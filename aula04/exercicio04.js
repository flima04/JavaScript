const calcularDesconto = (price, discount) => {
    rate = [100 - discount] / 100;
    newPrice = price * rate;
    return newPrice.toFixed(2);
}

alert('Bem-vindo à calculadora de descontos.')
let option = false

do {
    let valor = Number(prompt('Digite o valor do produto: '))
    let desconto = Number(prompt('Digite o percentual de desconto (apenas números): '))

    alert('Novo valor com desconto: R$' + calcularDesconto(valor, desconto));

    option = confirm('Deseja calcular o desconto de outro produto?');

} while (option == true);