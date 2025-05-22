const dividas = [95.90, 180.50, 22.99, 105.99, 30.50, 80,0];

function filtrarDevedores (debt) {
    const devedores = debt.filter(num => num >= 80);
    return devedores;
}

console.log(filtrarDevedores(dividas));