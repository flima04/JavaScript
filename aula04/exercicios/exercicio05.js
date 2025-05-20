function executarComAtraso (message, callback) {
    alert(message);
    callback();
}

function finalizar () {
    alert('Programa finalizado.')
}

let option = confirm('Deseja iniciar o processamento de dados?')

if (option == true) {
    setTimeout (executarComAtraso, 2000, 'Processamento concluído', finalizar);
}