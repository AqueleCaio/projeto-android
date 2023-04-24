var content = document.getElementById('click_content')
var icon_menu = document.getElementById('icon_menu')
var op_content = document.getElementById('optinal_content')

icon_menu.addEventListener('click', showMenu)
content.addEventListener('click', clickContent)

function clickContent(){
    if (hide_content.style.display == 'block') {
        hide_content.style.display = 'none'
    } else {
        hide_content.style.display = 'block'
    }
    op_content.scrollIntoView({ behavior: "smooth" })
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