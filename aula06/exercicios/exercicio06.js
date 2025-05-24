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