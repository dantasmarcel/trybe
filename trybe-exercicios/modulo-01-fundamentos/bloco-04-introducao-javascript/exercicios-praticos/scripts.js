// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------- JAVASCRIPT - PRIMEIROS PASSOS ------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------ EXERCÍCIOS PRÁTICOS -----------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

// 01. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
const a = 80;
const b = 60;
const c = 40;
const d = "---------------------";

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

//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 05. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

if (a + b + e == 180) {
    console.log(true);

}
else
    console.log("Não é um triângulo");

if ((a < 0) || (b < 0) || (e < 0)) {
    console.log(false);
}

//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 06. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const f = "BISPO";
const g = "Cavalo";
const h = "Torres";

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

if (f.toLowerCase() == "bispo") {
    console.log("bispo -> diagonais");
}
if (g.toLowerCase() == "cavalo") {
    console.log("cavalo -> três casas para frente e uma casa para o lado");
}
if (h.toLowerCase() == "torre") {
    console.log("torre -> horizontais e verticais");
}

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
else
    console.log("Erro");