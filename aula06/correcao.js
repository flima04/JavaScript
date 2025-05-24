//-------Exercício 01-------

function criarUsuario (nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
} 

const usuario1 = new criarUsuario("Jorge", 17, "jorginho@hotmail.com");

console.log(usuario1);



//-------Exercício 02-------

function atualizacaoIdade (user, age) {
    user.idade = age
}

const usuario = { 
    nome: "Marcos", 
    idade: 19, 
    email: "marquinhos@hotmail.com"
};

atualizacaoIdade(usuario, 25);

console.log(usuario);



//-------Exercício 03-------

const pessoa = {
  nome: "Ana",
  idade: 28,
  cidade: "Recife"
};

function explorarObjeto (user, oper) {
    switch (oper) {
        case "chaves":
            return Object.keys(user);
        break;
        case "valores":
            return Object.values(user);
        break;
        case "entradas":
            return Object.entries(user);
        break;
    }
}

console.log(explorarObjeto(pessoa, "chaves"));
console.log(explorarObjeto(pessoa, "valores"));
console.log(explorarObjeto(pessoa, "entradas"));
console.log(explorarObjeto(pessoa, "testando"));



//-------Exercício 04-------
//Obs: Não consegui fazer usando for...in como pedia o enunciado, então fiz com for...of. 

const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Webcam", preco: 250 }
];

function exibirCatalogo (produtos) {
    console.log("Catálogo de Produtos:");
    for (produto of produtos) {
        console.log(`${produto.nome} - R$${produto.preco}`);
    }
}

exibirCatalogo(produtos);



//-------Exercício 05-------

const produto = {nome: "Câmera", preco: 1200};

function protegerObjeto (objeto, protecao) {
    const status = {extensivel: false, selado: false, congelado: false};

    switch (protecao) {
        case "extensivel":
            Object.preventExtensions(objeto);
            status.extensivel = true;
            break;
        case "selado":
            Object.seal(objeto);
            status.selado = true;
            break;
        case "congelado":
            Object.freeze(objeto);
            status.congelado = true;
            break;
    }

    return status;
}

const resultado = protegerObjeto(produto, "selado");

produto.estoque = 50;

console.log(produto);

console.log(resultado);



//-------Exercício 06-------

const produtos = [
  { nome: "Celular", preco: 2000, estoque: 5 },
  { nome: "Notebook", preco: 3500, estoque: 0 },
  { nome: "Fone de Ouvido", preco: 250, estoque: 12 }
];

function gerenciarProdutos (products, oper, name, value) {

    switch (oper) {
        case "listarDisponiveis":
            const disponiveis = products.filter(product => {
                        if (product.estoque > 0) {
                            return product.nome;
                        } 
            })
            return disponiveis;
            break;

        case "buscarProduto":
            return products.find(produto => produto.nome == name);
            break;

        case "calcularValorTotal":
            let total = 0;
            for (const produto of products) {
                if (produto.estoque > 0) {
                    total += produto.preco * produto.estoque;
                }
            }
            return total;
            break;

        case "atualizarEstoque":
            products.forEach(product => {
                if (product.nome == name) {
                    product.estoque = value;
                }
            });
            break;
    }
}

console.log(gerenciarProdutos(produtos, "listarDisponiveis"));

console.log(gerenciarProdutos(produtos, "buscarProduto", "Notebook"));

console.log(gerenciarProdutos(produtos, "calcularValorTotal"));

gerenciarProdutos(produtos, "atualizarEstoque", "Notebook", 3);
console.log(produtos[1].estoque);