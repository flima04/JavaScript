//Ainda em deselvovimento

let count = 0;
let num = 0;
let guess = 0;
let option = true;



alert("Bem-vindo ao Jogo da Adivinhação!🎮")

do {
    num = Math.ceil(Math.random() * 100);
    let name = prompt("Qual o seu nome, Jogador(a)?");
    alert("Olá," + name + "! Preparando o jogo.\nUm número de 1 a 100 foi sorteado!\nTente adivinhar qual é. Boa sorte!")

    do {
        guess = Number(prompt("Qual seu palpite?"))
        if (guess > num) {
            alert("Seu palpite é maior que o número sorteado.\nTente novamente!")
            count++
        }
        else if (guess < num){
            alert("Seu palpite é menor que o número sorteado.\nTente novamente!")
            count++
        }
        else{
            alert("Parabéns, " + name + "! Você acertou em " + count + " tentativas.\nMuito bem! Você foi rápido! 🚀")
        }
    } while (guess != num);

    option = confirm("Deseja jogar novamente?")

} while (option == true);