function calculadora (a = 1, b = 1, operador = '+') {
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

alert('Bem-vindo à SimpCalc!');
let n1 = Number(prompt('Digite o primeiro número: '));
let n2 = Number(prompt('Digite o segundo número: '));
let oper = (prompt('Escolha o tipo de operção (+, -, *, / ou %): '));

console.log(n1, n2, oper);
alert('O resultado é ' + calculadora(n1, n2, oper));