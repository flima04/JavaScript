function jogarDados() {
    let randomP1 = Math.ceil(Math.random() * 6);
    let randomP2 = Math.ceil(Math.random() * 6);
    
    const dados = document.querySelectorAll("img");
    
    function sortDados (dado, randomNum){
        dado.setAttribute("src", `assets/dado${randomNum}.png`);
    }

    sortDados(dados[0], randomP1);
    sortDados(dados[1], randomP2);

    const titulo = document.querySelector("h1");

    if (randomP1 > randomP2) {
        titulo.textContent = "🚩 O Jogador 1 Venceu!"
    }
    else if (randomP1 == randomP2) {
        titulo.textContent = "Empate!"
    }
    else {
        titulo.textContent = "O Jogador 2 Venceu! 🚩"
    }
}