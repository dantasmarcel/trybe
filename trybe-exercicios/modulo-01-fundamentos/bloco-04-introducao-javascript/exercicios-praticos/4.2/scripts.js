// -----------------------------------------------------------------------------------------
// ------------------------------------ EXERCICIOS -----------------------------------------
// -----------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------

// 01. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (const number of numbers) {
//     console.log(number);
// }

// // 02. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let i = 0; i < numbers.length; i++) {
//     soma += numbers[i];
// }
// console.log(soma);

// 03. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

let media = soma / numbers.length;
console.log(media);