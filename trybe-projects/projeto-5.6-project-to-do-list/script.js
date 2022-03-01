const InputTextoTarefa = document.querySelector('#texto-tarefa');
const ButtonCriarTarefa = document.querySelector('#criar-tarefa');
const OlListaTarefas = document.querySelector('#lista-tarefas');
const apagaTudo = document.querySelector('#apaga-tudo');

function CriarLista() {
  const li = document.createElement('li');
  li.innerText = InputTextoTarefa.value;
  OlListaTarefas.appendChild(li);
  InputTextoTarefa.value = '';
}
ButtonCriarTarefa.addEventListener('click', CriarLista);

function liCinza(event) {
  const selectedLi = document.querySelector('.selected');
  const liClick = event.target;
  if (liClick.tagName === 'LI') {
    if (selectedLi !== null) {
      selectedLi.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
}
document.addEventListener('click', liCinza);

function liRiscado(event) {
  event.target.classList.toggle('completed');
}
document.addEventListener('dblclick', liRiscado);

apagaTudo.addEventListener('click', () => {
  const remove = document.querySelectorAll('li');
  for (let i = 0; i < remove.length; i += 1) {
    const removeTarefa = remove[i];
    OlListaTarefas.removeChild(removeTarefa);
  }
});
