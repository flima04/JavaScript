let valor;
let desconto;
let index;
let valorFinal;

valor = prompt("Informe o valor da compra: ")
valor > 100 ? desconto = 0.1 : desconto = 0.05
index = 1 - desconto
valorFinal = valor*index

console.log("Valor original: ", valor)
console.log()