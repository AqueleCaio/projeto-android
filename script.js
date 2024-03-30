let rotated = false;
const click_content = $('#click_content') // Area clicavel para aparecer o hide_content

click_content.click(() =>{
    if(rotated) {
        $("#icon_row").css({ "transform": "rotate(0deg)", "position": "relative", "top": "0px"});
    } else {
        $("#icon_row").css({ "transform": "rotate(180deg)", "position": "relative", "top": "10px"});
    }
    rotated = !rotated;
});

click_content.click(() => {
    $('#hide_content').slideToggle();
});


/* ______________________________________________ */

$('#icon_menu').click(() => {
    $('#imenu').slideToggle();
});

/* ______________________________________________ */

/* Função para mostrar o menu quando a tela for maior ou igual a 760px*/
$(window).resize(() => {
    if ($(window).width() >= 760) {
        $('#imenu').css('display', 'block');
    } else {
        $('#imenu').css('display', 'none');
    }
});
