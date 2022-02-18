const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// 01. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

const title = document.getElementById("page-title");
title.innerHTML = 'Velozes e Furiosos';

// 02. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

const secondParagraph = document.getElementById("second-paragraph");

secondParagraph.style.backgroundColor = 'yellow';

// 03. Por fim, recupere o subtítulo e altere-o também.

const subtitle = document.getElementById("subtitle");
subtitle.style.textAlign = "center";

// ---------------------------------------------------
// 01. Adicione uma classe igual para os dois parágrafos.

// 02. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;

const newP = document.getElementsByClassName("novaP");

for (i = 0; i < newP.length; i += 1) {
    newP[i].style.textAlign = "center";
    ;
}

// 03. Altere algum estilo do primeiro deles.

newP[0].style.color = "white";

// 04. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .

document.getElementsByTagName("h4")[0].style.color = "red";