function colorPallete(){
    const palleta = document.querySelectorAll(".color");
    console.log('paleta'+ palleta);
    let cores = ['black', 'green','yellow', 'magenta','red','blue','pink']
   console.log('cores ' + cores);
   console.log(cores.length);
    for(let i = 1; i < palleta.length; i += 1 ) {
    //numero aleatorio
    let rnd = Math.random(0,cores.length) *10;
    rnd = Math.round(rnd)
    console.log('rnd ' + rnd);
    // rnd definida e fixa ate o fim dessa parte do for
    palleta[i].style.backgroundColor = cores[rnd];
    cores.slice(rnd, 1);
    console.log(cores);
    }
}
function limparQuadro() {
    const pixeis = document.querySelectorAll(".pixel");
    for ( let i = o; i < pixeis.length; i += 1){
        pixeis[i].style.backgroundColor = "rgb(255, 255, 255)";
    }
}
 function selecionar(origem){
    const palleta= document.querySelectorAll(".color");
    for (let i =0; i < palleta.length; i +=1){
        palleta[i].classList.remove('selected');
    }
    const selectedFrase = 'selected';
    origem.target.classList.add(selectedFrase)
}
function pintarPixel(origem) {
    const corSelected = document.querySelector('selected').style.backgroundColor;
    origem.target.style.backgroundColor = corSelected;
}
function adicionarEventos() {
    const palleta = Document.querySelectorAll('.color');
    const pixeis = document.querySelectorAll('.pixel');
    const button = document.querySelector("#generate-board");

    for (let i = 0; i < palleta.length; i+=1) {
        palleta[i].addEventListener('click',selecionar);
    }

    for (let i = 0; i < pixeis.length; i += 1) {
       pixeis[i].addEventListener('click', pintarPixel);
        
    }
}
colorPallete();
adicionarEventos();
limparQuadro();
pintarPixel();
selecionar();
