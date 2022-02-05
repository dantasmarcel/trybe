// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------- JAVASCRIPT - PRIMEIROS PASSOS ------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------ EXERCÍCIOS PRÁTICOS -----------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// 01. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
const a = 3;
const b = 2;
const c = 4;
const d = "-------";

const soma = a + b;
console.log(soma);

// Subtração (a - b)
const sub = a - b;
console.log(sub);

// Multiplicação (a * b)
const mult = a * b;
console.log(mult);

// Divisão (a / b)
const div = a / b;
console.log(div);

// Módulo (a % b)
const mod = a % b;
console.log(mod);

//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 02. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if (a > b) {
    console.log(a);
}
if (b > a) {
    console.log(b);
}

//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 03. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

if (a > b && a > c) {
    console.log(a);
}
if (b > a && b > c) {
    console.log(b);
}
if (c > a && c > b) {
    console.log(c);
}

//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 04. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const e = -2;
if (a > 0) {
    console.log("positivo");
}
else if (a < 0) {
    console.log("negativo");
}
else if (a == 0) {
    console.log("zero");
}
