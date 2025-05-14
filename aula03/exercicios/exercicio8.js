let password = 2323;
let input = 0;

do {
    input = Number(prompt("Digite a senha: "));
    if (input != password) {
        alert("Senha incorreta.Tente novamente.")   
    }
} while (input != password);

alert("Acesso liberado.")