function selecionar(evento) {
  document.querySelector('.selected').classList.remove('selected');
  evento.target.classList.add('selected');
}
const color = document.querySelectorAll('#color-palette .color');

// eslint-disable-next-line no-unused-vars
function adicionarClasse() {
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', selecionar);
  }
}

function pintar(event) {
  const corSelected = document.querySelector('.selected').style.backgroundColor;
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = corSelected;
}

function pegaSelecionar() {
  const palleta = document.querySelectorAll('.color');

  for (let index = 0; index < palleta.length; index += 1) {
    palleta[index].addEventListener('click', selecionar);
  }
}
function adicionarEventos() {
  const pixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', pintar);
  }
}
document.getElementById('yellow').style.backgroundColor = 'gray';
document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('red').style.backgroundColor = 'red';
document.getElementById('blue').style.backgroundColor = 'white';

const botao = document.createElement('button');
botao.id = 'clear';
botao.innerText = 'Limpar';
document.getElementById('meio').appendChild(botao);

function apagar() {
  const pixeis = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixeis.length; index += 1) {
    pixeis[index].style.backgroundColor = 'white';
  }
}
botao.addEventListener('click', apagar);

window.onload = () => {
  apagar();
  pegaSelecionar();
  adicionarEventos();
};
