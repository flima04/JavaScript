const itemInput = document.getElementById("item");
const qtdInput = document.getElementById("qtd");
const catgInput = document.getElementById("categoria");
const btnAdd = document.getElementById("btn-add");
const filterInput = document.getElementById("filtro");
const btnFilter = document.getElementById("btn-filter")
const listaCompras = document.getElementById("lista-compras");
const comprasConcluidas = document.getElementById("compras-concluidas");

let idEdicao = null;

document.addEventListener('DOMContentLoaded', loadItems(), loadConcludedItems());

btnAdd.addEventListener("click", () => {
    addOrEditItem();
})

btnFilter.addEventListener("click", () => {
    
})

function getItemsLocalStorage() {
    const items = localStorage.getItem('items');
    return items ? JSON.parse(items) : [];
}

function getItemsConcludedLocalStorage() {
    const itemsConcluded = localStorage.getItem('concluded');
    return itemsConcluded ? JSON.parse(itemsConcluded) : [];
}

function addOrEditItem() {
    const item = itemInput.value;
    const qtd = qtdInput.value;
    const catg = catgInput.value;

    if (!item || !qtd || !catg) {
        alert("Preencha os campos corretamente.");
        return;
    }

    if (qtd < 1 || qtd % 1 !== 0) {
        alert("Digite uma quantidade válida.");
        return;
    }

    const items = getItemsLocalStorage();

    if (idEdicao) {
        const index = items.findIndex(i => i.id === idEdicao);
        items[index].name = item;
        items[index].amount = qtd;
        items[index].category = catg;

        idEdicao = null
    } else {
        const novoItem = {
            id: Date.now(),
            name: item,
            amount: qtd,
            category: catg,
        };

        items.push(novoItem);
        console.log(items)
    }

    saveItemsLocalStorage(items);
    loadItems();
    loadConcludedItems();

    itemInput.value = ""
    qtdInput.value = "";
    catgInput.value = "";
}

function saveItemsLocalStorage(items) {
    localStorage.setItem("items", JSON.stringify(items));
}

function saveItemsConcludedLocalStorage(concluded) {
    localStorage.setItem("concluded", JSON.stringify(concluded));
}

function loadItems() {
    const items = getItemsLocalStorage();
    console.log(items)
    if (!items.length){
        listaCompras.innerHTML = "";
        return;
    } else {
        listaCompras.innerHTML = "<h2>Itens adicionados:</h2>"
        items.forEach(item => addItemNoDom(item));
    }
}

function loadConcludedItems() {
    const concludeItems = getItemsConcludedLocalStorage();

    if (!concludeItems.length) {
        comprasConcluidas.innerHTML = "";
        return;
    } else {
        comprasConcluidas.innerHTML = "<h2>Itens concluídos:</h2>";
        concludeItems.forEach(item => addItemNoDom(item));
    }
}

function addItemNoDom(item) {
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const amount = document.createElement("p");
    const category = document.createElement("p");
    const btnConclude = document.createElement("button");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");

    title.textContent = item.name;
    amount.innerHTML = `<strong>Qtd:</strong> ${item.amount}`;
    category.innerHTML = `<strong>Catg:</strong> ${item.category}`;
    btnConclude.textContent = "✅";
    btnEdit.textContent = "Editar";
    btnDelete.textContent = "❌";

    card.classList.add("card", item.category);
    card.id = item.id;

    if (item.status === "concluded") {
        card.appendChild(title);
        card.appendChild(amount);
        card.appendChild(category);
        card.appendChild(btnDelete);
        comprasConcluidas.appendChild(card);
        comprasConcluidas.style.display = "block";
    } else {
        card.appendChild(title);
        card.appendChild(amount);
        card.appendChild(category);
        card.appendChild(btnConclude);
        card.appendChild(btnEdit);
        card.appendChild(btnDelete);
        listaCompras.appendChild(card);
        listaCompras.style.display = "block";
    }

    btnConclude.addEventListener("click", () => {
        concludeItem(item.id);
    })

    btnEdit.addEventListener("click", () => {
        editItem(item.id);
    });

    btnDelete.addEventListener("click", () => {
        deleteItem(item);
    })
}

function concludeItem(id) {
    if (id === idEdicao) {
        idEdicao = null;
    }
    const itemsConcluded = getItemsConcludedLocalStorage();
    const items = getItemsLocalStorage();
    const itemToConclude = items.find(i => i.id === id);
    const newItems = items.filter(i => i.id !== id);
    itemsConcluded.push(itemToConclude);
    itemToConclude["status"] = "concluded";

    saveItemsLocalStorage(newItems);
    saveItemsConcludedLocalStorage(itemsConcluded);
    loadConcludedItems();
    loadItems();
}

function editItem(id) {
    const items = getItemsLocalStorage();
    const item = items.find(i => i.id === id);

    const previousEditing = document.querySelector(".editing");
    if (previousEditing) {
        previousEditing.classList.remove("editing");
    }

    itemInput.value = item.name;
    qtdInput.value = item.amount;
    catgInput.value = item.category;

    const cardEditing = document.getElementById(id);
    cardEditing.classList.add("editing");

    idEdicao = id;
}

function deleteItem(item) {
    if (item.status === "concluded") {
        const concludeItems = getItemsConcludedLocalStorage();
        const newConcludedItems = concludeItems.filter(i => i.id !== item.id);
        saveItemsConcludedLocalStorage(newConcludedItems);
    } else {
        if (item.id === idEdicao) {
            idEdicao = null;
        }
        const items = getItemsLocalStorage();
        const newItems = items.filter(i => i.id !== item.id);
        saveItemsLocalStorage(newItems);
    }
    

    loadItems();
    loadConcludedItems();
}