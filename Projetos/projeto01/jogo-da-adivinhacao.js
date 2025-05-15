//Ainda em deselvovimento

let num = 0;
let guess = 0;
let option = true;
let bestPlayer = "";
let bestGuess = 100;

alert("Bem-vindo ao Jogo da Adivinhação!🎮")

do {
    num = Math.ceil(Math.random() * 100);
    let count = 0;
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
            if (count <= 3) {
                alert("Parabéns, " + name + "! Você acertou em " + count + " tentativas.\nUau! Você é um gênio da adivinhação! 🧠")
            }
            else if (count > 3 && count <=6) {
                alert("Parabéns, " + name + "! Você acertou em " + count + " tentativas.\nMuito bem! Você foi rápido! 🚀")
            }
            else {
                alert("Parabéns, " + name + "! Você acertou em " + count + " tentativas.\nConseguiu! Persistência é tudo! 💪")
            }  
        }
    } while (guess != num);

    option = confirm("Deseja jogar novamente?")

} while (option == true);