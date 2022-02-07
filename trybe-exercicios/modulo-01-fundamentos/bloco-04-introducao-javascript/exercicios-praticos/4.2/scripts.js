// -----------------------------------------------------------------------------------------
// ------------------------------------ EXERCICIOS -----------------------------------------
// -----------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------

// 01. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const number of numbers) {
    console.log(number);
}

// 02. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
console.log(soma);

// 03. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

let media = soma / numbers.length;
console.log(media);

// 04. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log('valor maior que 20');
}
else
    console.log('valor menor ou igual a 20');

// 05. Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// versão didática

let maior = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log(maior);
// // versão simplificada
let maior = numbers.reduce(function (a, b) {
    return Math.max(a, b);

});
console.log(maior);