const notas = [5, 8, 9, 3, 10, 7];

function calcularMedia (grades) {
    notas.sort((a, b) => a - b);
    
    let somaMaiores = notas.slice(3).reduce((acumulador, nota) => acumulador + nota );
    
    let media = somaMaiores / 3;
    return media;
}

console.log(calcularMedia(notas));