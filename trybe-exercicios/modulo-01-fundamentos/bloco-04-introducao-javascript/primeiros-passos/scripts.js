// ----------------------------------------------------------------------------------------------------------------------
// ---------------------------------------- BLOCO 04 - JAVASCRIPT -------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// -------------------------------------Javascript - Primeiros Passos----------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------- Variáveis ------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// 01. Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
const myName = 'Marcel';

// 02. Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
const birthCity = 'Natal';

// 03. Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
const birthYear = 1993;

// 04. Utilize o console.log() para imprimir as constantes e variáveis que você criou.
console.log(myName, birthCity, birthYear);

// 05. Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
birthYear = 2030;
console.log(birthYear); // erro

// 06. Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
birthCity = Porto;
console.log(birthCity); // erro


// ----------------------------------------------------------------------------------------------------------------------
// --------------------------Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas----------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// 01. Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
const base = 5;
let height = 8;

// 02.  Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
const area = base * height;
console.log(area);
// 03.  Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
const perimeter = base + height + base + height;
console.log(perimeter);