

    $(document).ready(function (){
        $('#iniciar').click(function (){

            let jogador1 = $('#jogador-1').val();
            let jogador2 = $('#jogador-2').val(); 

            if (jogador1 == '') {
                alert("Nome do jogador 1 não inserido");
                return false;
            }

            if (jogador2 == '') {
                alert("Nome do jogador 2 não inserido");
                return false;
            }

            $('#nome-jogador-1').html(jogador1)
            $('#nome-jogador-2').html(jogador2)

            // ocultar campo e mostrar palco de jogo
            $('#pagina_inicial').hide();
            $('#palco_jogo').show();

            // alert($('#jogador-1').val());
            // alert($('#jogador-2').val());
        })
    })

