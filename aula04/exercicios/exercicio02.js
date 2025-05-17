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

