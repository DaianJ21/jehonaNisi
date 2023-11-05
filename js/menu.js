$(document).ready(main);

var contador = 1;

function main() {
    $('.bar-menu').click(function(){
       // $('.cabecera__menu__lista').toggle();

       if (contador==1){
            $('.cabecera__menu__lista').animate({
                left: '0'
            });
            contador = 0;
       }else {
        contador = 1;
        $('.cabecera__menu__lista').animate({
            left: '-100%'
        });

       }

    });

};