//Exercício 01

function saudacao(name = 'visitante', age) {
    if (age < 18) {
        alert(`Olá, ${name}! Você é menor de idade.`)
    } 
    else{
        alert(`Olá, ${name}! Você é maior de idade.`)
    }
}

let option = confirm('Deseja confirmar uma idade?');

while (option == true) {
    let idade = 121;
    let nome = prompt('Digite o seu nome: ');
    do {
        idade = Number(prompt('Digite sua idade: '));
        if (idade < 0 || idade > 120) {
            alert('Idade inválida. Digite uma idade entre 0 e 120.');
        }
    } 
    while (idade < 0 || idade > 120);

    saudacao(nome, idade);
    option = confirm('Deseja confirmar uma idade?');
} 

if (option == false) {
    alert('Programa encerrado.');
}


//Exercício 02

function calculadora (operador = '+', a = 1, b = 1) {
    let resultado;
    switch (operador) {
        case '+':
            resultado = a + b;
            break
        case '-':
            resultado = a - b;
            break
        case '*':
            resultado = a * b;
            break
        case '/':
            resultado = a / b;
            break
        case '%':
            resultado = a % b;
            break
    }
    return resultado;
}

let n1 = 0;
let n2 = 0;
let oper = '+';
option = true;

do {
    alert('Bem-vindo à SimpCalc!');
    oper = (prompt('Escolha o tipo de operação (+, -, *, / ou %): '));
    n1 = Number(prompt('Digite o primeiro número: '));

    if (oper == '/' || oper == '%') {
        do {
            n2 = Number(prompt('Digite o segundo número: '));
            if (n2 == 0) {
            alert('Entrada inválida para esta operação. Escolha um valor diferente de 0.')
            }
        } while (n2 == 0);
    }

    else {
        n2 = Number(prompt('Digite o segundo número: '));
    }

    console.log(n1, n2, oper);
    alert('O resultado é ' + calculadora(oper, n1, n2));
    option = confirm('Deseja realizar outro cálculo?')

} while (option == true);



//Exercício 03

const mensagemDeBoasVindas = function (name) {
    const data = new Date();
    const hora = data.getHours();
    
    if (hora >= 6 && hora <12) {
        return `Bom dia, ${name}!`
    }
    else if (hora >= 12 && hora <18) {
        return `Boa tarde, ${name}!`
    }
    else if (hora >= 18 && hora <24) {
        return `Boa noite, ${name}!`
    }
    else {
        return `Olá, ${name}!`
    }
}

let nome = prompt('Digite seu nome: ');
alert(mensagemDeBoasVindas(nome));


//Exercício 04

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


//Exercício 05

function executarComAtraso (message, callback) {
    alert(message);
    callback();
}

function finalizar () {
    alert('Programa finalizado.')
}

let option = confirm('Deseja iniciar o processamento de dados?')

if (option == true) {
    setTimeout (executarComAtraso, 2000, 'Processamento concluído', finalizar);
}