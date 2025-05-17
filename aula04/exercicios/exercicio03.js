const mensagemDeBoasVindas = function (name) {
    const data = new Date();
    const hora = data.getHours();
    
    if (hora >= 6 && hora <12) {
        return `Bom dia, ${name}!`
    }
    else if (hora >= 12 && hora <18) {
        return `Boa tarde, ${name}!`
    }
    else if (hora >= 18 && hora <24) {
        return `Boa noite, ${name}!`
    }
    else {
        return `Olá, ${name}!`
    }
}

let nome = prompt('Digite seu nome: ');
alert(mensagemDeBoasVindas(nome));
