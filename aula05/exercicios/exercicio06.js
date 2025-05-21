const precosDolares = [10, 20, 30]; 

function converterMoeda (valores) {
    const precoReais = valores.map(valor => valor * 5.67)
    return precoReais;
}

console.log(converterMoeda(precosDolares));