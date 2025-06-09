const botoes = document.querySelectorAll(".botao-bateria");

const tom1 = new Audio("assets/sons/tom-1.mp3");
const tom2 = new Audio("assets/sons/tom-2.mp3");
const tom3 = new Audio("assets/sons/tom-3.mp3");
const tom4 = new Audio("assets/sons/tom-4.mp3");
const snare = new Audio("assets/sons/snare.mp3");
const crash = new Audio("assets/sons/crash.mp3");
const kickBass = new Audio("assets/sons/kick-bass.mp3");

function reproduzirSom(tecla) {
    switch (tecla) {
        case "W":
            tom1.play();
            break;
        case "A":
            tom2.play();
            break;
        case "S":
            tom3.play();
            break;
        case "D":
            tom4.play();
            break;
        case "J":
            snare.play();
            break;
        case "K":
            crash.play();
            break;
        case "L":
            kickBass.play();
            break;
    }
}

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        let tecla = botao.textContent.toUpperCase();

        reproduzirSom(tecla);
        animarBotao(tecla);
    })
});

document.addEventListener("keydown", (event) => {
    let tecla = event.key.toUpperCase();

    reproduzirSom(tecla);
    animarBotao(tecla);
});

function animarBotao(tecla) {
    let botaoAtivo = document.querySelector(`.${tecla.toLowerCase()}`);

    if (botaoAtivo) {
        botaoAtivo.classList.add("pressionado");
        setTimeout(() => {
            botaoAtivo.classList.remove("pressionado");
        }, 100);
    }
};