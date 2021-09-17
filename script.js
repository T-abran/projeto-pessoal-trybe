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


function pintar(origem) {
  const corSelected = document.querySelector('.selected').style.backgroundColor;
  origem.target.style.backgroundColor = corSelected;
}
function pegaSelecionar() {

  const palleta = document.querySelectorAll('.color');

  for (let index = 0; index < palleta.length; index += 1){
    palleta[index].addEventListener('click', selecionar);
}
}
function adicionarEventos() {
 
  const pixel = document.querySelectorAll('.pixel');


  for (let index = 0; index < pixel.length; index += 1){
      pixel[index].addEventListener('click', pintar);
 }
}


document.getElementById('yellow').style.backgroundColor = 'yellow';
document.getElementById('black').style.backgroundColor = 'black';
document.getElementById('pink').style.backgroundColor = 'pink';
document.getElementById('blue').style.backgroundColor = 'blue';
   
window.onload =()=>{
  pegaSelecionar()
  adicionarEventos();
}
