// Vamos começar o segundo projeto!

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let espaco = /\s* \s*/;
  let arrayList = frase.split(espaco);
  return arrayList;
}

// Desafio 4
function concatName(frase) {
  let firstWord = frase[0];
  let lastWord = frase[frase.length - 1];
  let virgula = ', ';
  let newFrase = lastWord + virgula + firstWord;
  return newFrase;
}

// Desafio 5
function footballPoints(win, ties) {
  let vitoria = 3 * win;
  let empate = 1 * ties;
  let points = vitoria + empate;
  return points;
}

// Desafio 6
function highestCount(array) {
  array.sort();
  let repetido = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === array[i + 1]) {
      repetido += 1;
      if (array[i] < array[array.length - 1] || array[i] < 0) {
        return 1;
      }
    }
  }
  return repetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  console.log('Cat 1: %s, Cat 2: %s, Mouse: %s', cat1, cat2, mouse);
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  console.log('Distancia 01: %s e Distancia 02: %s', distancia1, distancia2);

  if (distancia1 > distancia2) {
    return 'cat2';
  }
  if (distancia1 < distancia2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let vetor = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      vetor.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      vetor.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      vetor.push('fizzBuzz');
    } else vetor.push('bug!');
  }
  return vetor;
}

// Desafio 9
function encode(frase) {
  let resultadoA = frase.replace(/a/g, 1);
  let resultadoE = resultadoA.replace(/e/g, 2);
  let resultadoI = resultadoE.replace(/i/g, 3);
  let resultadoO = resultadoI.replace(/o/g, 4);
  let resultadoU = resultadoO.replace(/u/g, 5);
  return resultadoU;
}

function decode(frase) {
  let resultadoA = frase.replace(/1/g, 'a');
  let resultadoE = resultadoA.replace(/2/g, 'e');
  let resultadoI = resultadoE.replace(/3/g, 'i');
  let resultadoO = resultadoI.replace(/4/g, 'o');
  let resultadoU = resultadoO.replace(/5/g, 'u');
  return resultadoU;
}

// Desafio 10
function techList(tech, name) {
  tech.sort();

  let obj = [];
  if (tech.length === 0) {
    obj = 'Vazio!';
  }
  else {
    for (let i = 0; i < tech.length; i += 1) {
      obj.push(
        {
          tech: tech[i],
          name: name,
        }
      )
    }
  }
  return obj;
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
