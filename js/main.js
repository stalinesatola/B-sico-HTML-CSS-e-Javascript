//sempre que houver um clique esta funcao sera chamada
$(document).ready(function() {

    $('.burguer-container').on('click', function() {
        $('.main-navigation').toggle('slow');
    })
});