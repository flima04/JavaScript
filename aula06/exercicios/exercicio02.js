function atualizacaoIdade (user, age) {
    user.idade = age
}

const usuario = { 
    nome: "Marcos", 
    idade: 19, 
    email: "marquinhos@hotmail.com"
};

atualizacaoIdade(usuario, 25);

console.log(usuario);