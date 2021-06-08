
function soma(n1, n2){
    return n1 + n2;
}

var validar;
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);

//alert(soma(5, 10));

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*\

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*\

/*
var count = 0
while (count <= 5){
    console.log(count);
    alert = (count);
    count ++;
}; 
*\

/*
var idade = prompt("Qual sua idade");
if (idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva"); //adiciona uma fruta da lista
//lista.pop(); //remove uma fruta da lista

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(", "));




//var nome = "Murilo Patrício";
//var n1 = 4;
//var n2 = 4;
//var frase2 = "Teste só o básico";
//var frase = "Eu torço para o México";
//alert(nome + " tem " + idade+ " anos")
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase2.toLowerCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("México", "Brasil"));
