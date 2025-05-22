const vendas = [150, 200, 100, 50];

function calcularTotalVendas (sales) {
    const totalVendas = sales.reduce((acumulador, num) => acumulador + num);
    return totalVendas;
}

console.log(calcularTotalVendas(vendas));