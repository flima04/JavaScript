let ano;
let nasc;
let idade;

nasc = Number(prompt("Digite o ano de nascimento:"));
ano = Number(prompt("Digite o ano atual:"));

idade = ano - nasc;

if (idade >= 18 ) {
    alert("Você completa " + idade + " anos em " + ano + " e poderá tirar a habilitação.");
}
else if (idade > 0 && idade < 18) {
    alert("Você completa " + idade + " anos em " + ano + " e ainda não poderá tirar a habilitação.");
}
else{
    alert("Idade inválida.");
}