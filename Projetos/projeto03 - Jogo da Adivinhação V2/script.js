//Inicio
const inicio = document.getElementById("inicio");
const nome = document.getElementById("nome");
const erroNome = document.getElementById("erroNome");
const comecarBtn = document.getElementById("comecarBtn");

//Jogo
const jogo = document.getElementById("jogo");
const boasVindas = document.getElementById("boasVindas");
const palpite = document.getElementById("palpite");
const erroPalpite = document.getElementById("erroPalpite");
const tentarBtn = document.getElementById("tentarBtn");
const mensagem = document.getElementById("mensagem");

//Final
const fim = document.getElementById("fim");
const resultado = document.getElementById("resultado");
const jogarNovamenteBtn = document.getElementById("jogarNovamenteBtn");

//Recorde
const recorde = document.getElementById("recorde");

//Variaveis globais
let nomeJogador = "";
let numRandom = "";
let palpiteAtual = "";
let tentativas = 0;
let bestRecord = 1000;
let bestPlayer = "";
let jogarNovamente = false

do {
    comecarBtn.addEventListener("click", () => {
        nomeJogador = nome.value;
        if (nomeJogador.length < 3 || nomeJogador === "") {
            erroNome.classList.remove("hidden");
        }
        else {
            numRandom = Math.ceil(Math.random() * 100);
            console.log(numRandom);
            inicio.classList.add("hidden");
            jogo.classList.remove("hidden");
            boasVindas.textContent = `Boas-vindas, ${nomeJogador}.`
        }
    });


    tentarBtn.addEventListener("click", () => {
        palpiteAtual = palpite.value;
        console.log(palpiteAtual);

        if (palpiteAtual < 1 || palpiteAtual === NaN) {
            erroPalpite.classList.remove("hidden");
        }

        else {
            erroPalpite.classList.add("hidden");
            tentativas++;

            if (palpiteAtual > numRandom) {
                mensagem.textContent = "";
                setTimeout(() => {
                    mensagem.textContent = "Palpite é maior que o número sorteado."
                }, 30);
            }

            else if (palpiteAtual < numRandom) {
                mensagem.textContent = "";
                setTimeout(() => {
                    mensagem.textContent = "Palpite é menor que o número sorteado."
                }, 30);
            }

            else {
                jogo.classList.add("hidden");
                fim.classList.remove("hidden");

                if (tentativas <= 3) {
                    resultado.textContent = `🧠 Gênio da adivinhação! Você venceu em ${tentativas} tentativas.`;
                }

                else if (tentativas > 6) {
                    resultado.textContent = `💪 Persistência é tudo! Você venceu em ${tentativas} tentativas.`;
                }

                else {
                    resultado.textContent = `🚀 Muito bem! Você venceu em ${tentativas} tentativas.`;
                }

                if (tentativas < bestRecord) {
                    bestPlayer = nomeJogador
                    bestRecord = tentativas
                    recorde.textContent = `🏅 Melhor jogador: ${bestPlayer}, com ${bestRecord} tentativa(s).`
                }
            }
        }
    })

    jogarNovamenteBtn.addEventListener("click", () => {
        jogarNovamente = true;
        palpiteAtual = "";
        tentativas = 0;
        nome.value = "";
        palpite.value = "";
        inicio.classList.remove("hidden");
        fim.classList.add("hidden");
    })
} while (jogarNovamente == true);


