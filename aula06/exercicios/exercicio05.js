const produto = {nome: "Câmera", preco: 1200};

function protegerObjeto (objeto, protecao) {
    const status = {extensivel: false, selado: false, congelado: false};

    switch (protecao) {
        case "extensivel":
            Object.preventExtensions(objeto);
            status.extensivel = true;
            break;
        case "selado":
            Object.seal(objeto);
            status.selado = true;
            break;
        case "congelado":
            Object.freeze(objeto);
            status.congelado = true;
            break;
    }

    return status;
}

const resultado = protegerObjeto(produto, "selado");

produto.estoque = 50;

console.log(produto);

console.log(resultado);