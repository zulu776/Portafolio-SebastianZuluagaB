let menuDesplegable = document.getElementById("menu");

function menuOpen(){
    if(menuDesplegable.classList.contains('open')){
        menuDesplegable.classList.remove('open');
    }else{
        menuDesplegable.classList.add('open');
    }
}


