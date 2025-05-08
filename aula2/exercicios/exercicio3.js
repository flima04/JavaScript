let idade = Number(prompt("Digite sua idade:"));
let permitido;

idade >= 18 ? permitido = true : permitido = false;

permitido == true ? alert("Entrada permitida") : alert("Entrada negada");