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