const op_content = document.getElementById('optinal_content')
let rotated = false;

$('#click_content').click(() =>{
    if(rotated) {
        $("#icon_row").css({ "transform": "rotate(0deg)", "position": "relative", "top": "0px"});
    } else {
        $("#icon_row").css({ "transform": "rotate(180deg)", "position": "relative", "top": "10px"});
    }
    rotated = !rotated;
});

$('#click_content').click(() =>{
    if (hide_content.style.display == 'block') {
        (hide_content.style.display = 'none')
    } else {
       (hide_content.style.display = 'block')
    }
    op_content.scrollIntoView({ behavior: "smooth" })
});

/* ______________________________________________ */

$('#icon_menu').click(() =>{
    if (imenu.style.display == 'block'){
        imenu.style.display = 'none'
    } else {
        imenu.style.display = 'block'
    }
});

/* ______________________________________________ */

/* Função para mostrar o menu quando a tela for maior ou igual a 760px*/
$(window).resize(() =>{
    if (window.innerWidth >= 760){
        imenu.style.display = 'block'
    } else {
        imenu.style.display = 'none'
    }
});