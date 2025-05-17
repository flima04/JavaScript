function saudacao(name = 'visitante', age) {
    if (age < 18) {
        alert(`Olá, ${name}! Você é menor de idade.`)
    } 
    else{
        alert(`Olá, ${name}! Você é maior de idade.`)
    }
}

let option = confirm('Deseja confirmar uma idade?');

while (option == true) {
    let idade = 121;
    let nome = prompt('Digite o seu nome: ');
    do {
        idade = Number(prompt('Digite sua idade: '));
        if (idade < 0 || idade > 120) {
            alert('Idade inválida. Digite uma idade entre 0 e 120.');
        }
    } 
    while (idade < 0 || idade > 120);

    saudacao(nome, idade);
    option = confirm('Deseja confirmar uma idade?');
} 

if (option == false) {
    alert('Programa encerrado.');
}
