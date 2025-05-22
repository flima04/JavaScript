const produtos = [
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Webcam", preco: 250 }
];

function exibirCatalogo (products) {
    console.log("Catálogo de Produtos:");
    for (chave in products) {
        console.log(`${nome} - R$${preco}`);
    }
}