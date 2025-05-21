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