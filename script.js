function selecionar(evento) {
  document.querySelector('.selected').classList.remove('selected');
  evento.target.classList.add('selected');
}
const color = document.querySelectorAll('#color-palette .color');

function adicionarClasse() {
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', selecionar);
  }
}
window.onload = adicionarClasse;
