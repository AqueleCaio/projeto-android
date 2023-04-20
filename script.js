function clickContent(){
    if (hide_content.style.display == 'block') {
        hide_content.style.display = 'none'
    } else {
        hide_content.style.display = 'block'
    }
}

/* ################################################## */


function showMenu(){
    if (imenu.style.display == 'block'){
        imenu.style.display = 'none'
    } else {
        imenu.style.display = 'block'
    }
}

/* ################################################## */

/* Função para mostrar o menu quando a tela for maior ou igual a 760px*/
function keepMenu(){
    if (window.innerWidth >= 760){
        imenu.style.display = 'block'
    } else {
        imenu.style.display = 'none'
    }
}