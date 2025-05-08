let valor;
let taxa;
let desconto;
let valorFinal;

valor = prompt("Informe o valor da compra: ")
valor > 100 ? taxa = 0.1 : taxa = 0.05
desconto = valor * taxa
valorFinal = valor - desconto

console.log("Valor original: ", valor)
console.log("Desconto aplicado: ", desconto)
console.log("Valor final: ", valorFinal)