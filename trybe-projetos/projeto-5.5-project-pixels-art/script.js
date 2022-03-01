function selected(click) {
  const ChangeSelected = document.querySelector('.selected');
  ChangeSelected.classList.remove('selected');
  click.target.classList.add('selected');
}

const color = document.querySelectorAll('.color');
for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', selected);
}

function changeColor(click) {
  const colorSelected = document.querySelector('.selected');
  const colorChange = getComputedStyle(colorSelected).backgroundColor;
  const toBeClick = click;
  toBeClick.target.style.backgroundColor = colorChange;
  console.log(colorChange);
}

function limparPixels() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
const limpar = document.querySelector('#clear-board');
limpar.addEventListener('click', limparPixels);

const pixel = document.querySelectorAll('.pixel');
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', changeColor);
}
