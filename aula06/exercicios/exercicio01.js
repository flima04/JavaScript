function criarUsuario (nome, idade, email) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
} 

const usuario1 = new criarUsuario("Jorge", 17, "jorginho@hotmail.com");

console.log(usuario1);