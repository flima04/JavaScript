let num2 = parseInt(prompt("Digite um número: "));
let num1 = 1;
let soma = 0;

for (let contador = num1; contador <= num2; contador++) {
    if (contador % 2 == 0){
        soma += contador;
    }
}

alert("A soma dos números pares de " + num1 + " até " + num2 + " é: " + soma);