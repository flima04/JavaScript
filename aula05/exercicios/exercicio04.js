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
