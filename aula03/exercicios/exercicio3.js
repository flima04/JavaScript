let peso = Number(prompt("Digite seu peso (em kg):"));
let altura = Number(prompt("Digite sua altura (em metros):"));

let imc = peso / (altura * altura);

if (imc >= 40){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem obesidade grau 3." )
}
else if (imc >= 35 && imc < 40){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem obesidade grau 2." )
}
else if (imc >= 30 && imc < 35){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem obesidade grau 1." )
}
else if (imc >= 25 && imc < 30){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem Sobrepeso." )
}
else if (imc >= 18.5 && imc < 25){
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê tem peso normal." )
}
else{
    alert("Seu IMC é " + imc.toFixed(1) + "\nVocê está abaixo do peso." )
}