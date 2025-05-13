let num1;
let num2;
let oper;
let res;

num1 = Number(prompt("Digite o primeiro número: "));
num2 = Number(prompt("Digite o segundo número: "));

oper = Number(prompt("--Operações-- \n1 - Soma \n2 - subtração \n3 - Multiplicação \n4 - Divisão \n----------------- \n \nEscolha uma operação: "));

switch (oper) {
    case 1:
        res = num1 + num2;
        console.log("O resultado da soma é:" + res)
        break;

    case 2:
        res = num1 - num2;
        console.log("O resultado da subtração é:" + res)
        break;

    case 3:
        res = num1 * num2;
        console.log("O resultado da multiplicação é:" + res)
        break;

    case 4:
        res = num1 / num2;
        console.log("O resultado da divisão é:" + res)
        break;

    default:
        console.log("Parâmetro inválido.")

        
}