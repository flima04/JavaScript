const pessoa = {
  nome: "Ana",
  idade: 28,
  cidade: "Recife"
};

function explorarObjeto (user, oper) {
    switch (oper) {
        case "chaves":
            return Object.keys(user);
        break;
        case "valores":
            return Object.values(user);
        break;
        case "entradas":
            return Object.entries(user);
        break;
    }
}

console.log(explorarObjeto(pessoa, "chaves"));
console.log(explorarObjeto(pessoa, "valores"));
console.log(explorarObjeto(pessoa, "entradas"));
console.log(explorarObjeto(pessoa, "testando"));