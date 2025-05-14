//Exercício 1 - Habilitação

let ano;
let nasc;
let idade;

nasc = Number(prompt("Digite o ano de nascimento:"));
ano = Number(prompt("Digite o ano atual:"));

idade = ano - nasc;

if (idade >= 18 ) {
    alert("Você completa " + idade + " anos em " + ano + " e poderá tirar a habilitação.");
}
else if (idade > 0 && idade < 18) {
    alert("Você completa " + idade + " anos em " + ano + " e ainda não poderá tirar a habilitação.");
}
else{
    alert("Idade inválida.");
}


//Exercício 2 - Faixa Etária

let idade = Number(prompt("Digite sua idade: "));

if (idade >= 65){
    alert("Você é um idoso.")
}
else if (idade >= 18 && idade < 65){
    alert("Você é um adulto.")
}
else if (idade >= 13 && idade < 18){
    alert("Você é um adolescente.")
}
else{
    alert("Você é uma criança.")
}


//Exercício 03 - Classificação de IMC

let peso = Number(prompt("Digite seu peso (em kg):"));
let altura = Number(prompt("Digite sua altura (em metros):"));

let imc = peso / (altura * altura);

if (imc >= 40){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem obesidade grau 3." )
}
else if (imc >= 35 && imc < 40){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem obesidade grau 2." )
}
else if (imc >= 30 && imc < 35){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem obesidade grau 1." )
}
else if (imc >= 25 && imc < 30){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem Sobrepeso." )
}
else if (imc >= 18.5 && imc < 25){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem peso normal." )
}
else{
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê está abaixo do peso." )
}


//Exercício 04 - Calculadora Simples 1

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


//Exercício 05 - Imprimindo Intervalo

let inicial = parseInt(prompt("Valor inicial: "));
let final = parseInt(prompt("Valor final:"));

for (let contador = inicial; contador <= final; contador++) {
    console.log(contador);
}


//Exercício 06 - Soma dos Pares

let num2 = parseInt(prompt("Digite um número: "));
let num1 = 1;
let soma = 0;

for (let contador = num1; contador <= num2; contador++) {
    if (contador % 2 == 0){
        soma += contador;
    }
}

alert("A soma dos números pares de " + num1 + " até " + num2 + " é: " + soma);


//Exercício 07 - Positivos e Negativos

let contPos = 0;
let contNeg = 0;
let num = 1;

while (num != 0 ) {
    num = parseInt(prompt("Digite um número: "));
    if (num > 0){
        contPos++;
    }
    else if (num < 0){
        contNeg++;
    }
}

alert("Quantidade de números positivos: " + contPos + "\nQuantidade de números negativos: " + contNeg);


//Exercício 08 - Digite a Senha

let password = 2323;
let input = 0;

do {
    input = Number(prompt("Digite a senha: "));
    if (input != password) {
        alert("Senha incorreta.Tente novamente.")   
    }
} while (input != password);

alert("Acesso liberado.")