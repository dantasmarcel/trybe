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


//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 07. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

const i = 101;

if (i >= 90 && i <= 100) {
    console.log("A");
}
if (i >= 80 && i < 90) {
    console.log("B");
}
if (i >= 70 && i < 80) {
    console.log("C");
}
if (i >= 60 && i < 70) {
    console.log("D");
}
if (i >= 50 && i < 60) {
    console.log("E");
}
if (i < 50 && i > 0) {
    console.log("F");
}

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

if (i < 0 || i > 100)
    console.log("Erro");

//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 08. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

if ((a % 2 == 0) || (b % 2 == 0) || (i % 2 == 0)) {
    console.log(true);
}

else
    console.log(false);

//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 09. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.Caso contrário, ele retorna false.
//Bonus: use somente um if .

if ((a % 2 == 1) || (b % 2 == 1) || (i % 2 == 1)) {
    console.log(true);
}

else
    console.log(false);

//--------------------------------------------------------------------------------------------------------------------
console.log(d);
// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.A partir dos valores, calcule quanto de lucro(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const k = 2;
const l = 5;

// Atente que, sobre o custo do produto, incide um imposto de 20 %.
// valorCustoTotal = valorCusto + impostoSobreOCusto
const valorCustoTotal = k + (20 / 100);

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20 % também faz parte do valor de custo.
// lucro = valorVenda - valorCustoTotal(lucro de um produto)
const lucro = (5 - valorCustoTotal) * 1000;

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
if (k < 0 || l < 0) {
    console.log("Erro");
}

console.log(lucro);
