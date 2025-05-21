const nomes = ['Lucas', 'Marina', 'João'];

function exibirNomes (names) {
    names.forEach((name) => {
        console.log(`Bem-vindo(a), ${name}!`);
    });
}

exibirNomes(nomes);
