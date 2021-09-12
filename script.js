function colorPallet(){
    const palleta = document.querySelectorAll('.color');
    let cores = ['black', 'green','yellow', 'magenta','red', 'pink', 'darkblue', 'brow', 'salmon'];
   
    for(let i=0; i < palleta.length; i+=1 ){
        let rnd = Math.floor(math.randon()* cores.length);
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
    for (let i = 0; i < palleta.length; i+=1) {
        palleta[i].addEventListener('click',selecionar);
    }
    for (let i = 0; i < pixeis.length; i++) {
        const element = array[i];
        
    }
}