// -----------------------------------------------------------------------------------------
// --------------------------------------- JAVASCRIPT --------------------------------------
// -----------------------------------------------------------------------------------------
// ------------------------------------ ARRAY E LOOP FOR -----------------------------------
// -----------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------
// 01. Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// -----------------------------------------------------------------------------------------
// 02. Procure o índice do valor "Portfólio" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// -----------------------------------------------------------------------------------------
// 03. Adicione o valor "Contato" no final do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);


// -----------------------------------------------------------------------------------------
// -------------------------------------- LOOP FOR -----------------------------------------
// -----------------------------------------------------------------------------------------

// 01. Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
    console.log(groceryList[index]);
}

// -----------------------------------------------------------------------------------------
// -------------------------------------- FOR OF -------------------------------------------
// -----------------------------------------------------------------------------------------

// 01. Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (const nome of names) {
    console.log(nome);
}