// Exercício 01

const tarefas = ["Arrumar cama", "lavar pratos", "varrer casa"];

function gerenciarTarefas ( shores, action, name) {
    switch (action) {
        case "adicionarInicio":
            tarefas.unshift(name);
            break;
        case "adicionarFim":
            tarefas.push(name);
            break;
        case "removerInicio":
            tarefas.shift();
            break;
        case "removerFim":
            tarefas.pop();
            break;
    }
}

gerenciarTarefas(tarefas, "removerInicio");

console.log(tarefas);

gerenciarTarefas(tarefas, "adicionarFim", "regar plantas");

console.log(tarefas);

gerenciarTarefas(tarefas, "adicionarInicio", "Passear com cachorro")

console.log(tarefas);

gerenciarTarefas(tarefas, "removerFim");

console.log(tarefas);



// Exercício 02

const notas = [5, 8, 9, 3, 10, 7];

function calcularMedia (grades) {
    notas.sort((a, b) => a - b);
    
    let somaMaiores = notas.slice(3).reduce((acumulador, nota) => acumulador + nota );
    
    let media = somaMaiores / 3;
    return media;
}

console.log(calcularMedia(notas));


// Exercício 03

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

function somarNumeros (numbers) {
    soma = 0;

    for (let index in numbers) {
        if (numbers[index] % 2 == 0 && numbers[index] % 3 == 0) {
            soma += numbers[index]; 
        }
    }

    return soma;
}

console.log(somarNumeros(numeros));


// Exercício 04

const numeros = [-1, 3, 8, -2, 4, 10];

function obterMaior (numbers){
    maior = 0;
    for (let value of numbers) {
        if (value > maior){
            maior = value;
        }
    }
    return maior;
}

function obterMenor (numbers){
    menor = 0;
    for (let value of numbers) {
        if (value < menor){
            menor = value;
        }
    }
    return menor;
}

console.log(obterMaior(numeros), obterMenor(numeros));



// Exercício 05

const nomes = ['Lucas', 'Marina', 'João'];

function exibirNomes (names) {
    names.forEach((name) => {
        console.log(`Bem-vindo(a), ${name}!`);
    });
}

exibirNomes(nomes);



// Exercício 06

const precosDolares = [10, 20, 30]; 

function converterMoeda (valores) {
    const precoReais = valores.map(valor => valor * 5.67)
    return precoReais;
}

console.log(converterMoeda(precosDolares));


// Exercício 07

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50, 80,0];

function filtrarDevedores (debt) {
    const devedores = debt.filter(num => num >= 80);
    return devedores;
}

console.log(filtrarDevedores(dividas));


// Exercício 08

const vendas = [150, 200, 100, 50];

function calcularTotalVendas (sales) {
    const totalVendas = sales.reduce((acumulador, num) => acumulador + num);
    return totalVendas;
}

console.log(calcularTotalVendas(vendas));