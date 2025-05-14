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