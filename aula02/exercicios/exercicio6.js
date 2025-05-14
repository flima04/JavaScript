let nome;
let peso;
let altura;
let option;
let imc;

nome = prompt("Qual o seu nome?");
peso = Number(prompt("Digite seu peso (em kg):"));
altura = Number(prompt("Digite sua altura (em metros):"));

option = confirm("Seus dados:\nNome: " + nome + "\nPeso: " + peso + "\nAltura: " + altura + "\nDeseja continuar?");

imc = peso / (altura * altura);

option == true ? alert(nome + ", seu IMC é " + imc.toFixed(2)) : alert("Você saiu do programa.")
