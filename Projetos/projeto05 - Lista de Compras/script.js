const item = document.getElementById("item");
const qtd = document.getElementById("qtd");
const categoria = document.getElementById("categoria");
const btnAdd = document.getElementById("btn-add");
const listaCompras = document.getElementById("lista-compras");
const comprasConcluidas = document.getElementById("compras-concluidas");

btnAdd.addEventListener("click", () => {
    lerNovoItem();
})

function lerNovoItem() {
    const nome = item.value;
    const quantidade = qtd.value;
    const category = categoria.value;

    if (!nome || !quantidade || !category) {
        alert("Preencha os campos corretamente.");
        return;
    }

    if (quantidade < 1 || quantidade % 1 !== 0) {
        alert("Digite uma quantidade válida.");
        return;
    }

    criarItem(nome, quantidade, category);
    item.value = "";
    qtd.value = "";
    categoria.value = "";
}

function criarItem(item, qtd, categoria) {
    const cardId = new Date();
    const card = document.createElement("div");
    const title = document.createElement("h3");
    const amount = document.createElement("p");
    const category = document.createElement("p");
    const btnFinish = document.createElement("button");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");

    title.textContent = item;
    amount.innerHTML = `<strong>Qtd:</strong> ${qtd}`;
    category.innerHTML = `<strong>Categoria:</strong> ${categoria}`;
    btnFinish.textContent = "✅";
    btnEdit.textContent = "Editar";
    btnDelete.textContent = "❌";

    card.classList.add("card", categoria);

    card.appendChild(title);
    card.appendChild(amount);
    card.appendChild(category);
    card.appendChild(btnFinish);
    card.appendChild(btnEdit);
    card.appendChild(btnDelete);

    listaCompras.appendChild(card);
    listaCompras.style.display = "block"

    salvarLocalStorage(cardId, item, qtd, categoria);
}

function salvarLocalStorage(id, item, qtd, categoria) {

}