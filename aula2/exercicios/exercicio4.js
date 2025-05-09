let estoque = Number(prompt("Quantidade atual no estoque:"));
let remover = Number(prompt("Quantidade que deseja remover?"));

let total = estoque - remover;

total >= 0 ? alert("Estoque atualizado: " + total) : alert("Operação inválida: quantidade insuficiente no estoque");