    var rodada = 1;
    var matriz_jogo = Array(3);

    $(document).ready(function (){
        $('#iniciar').click(function (){

            // alertas

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
            // exibir apelidos
            $('#nome-jogador-1').html(jogador1)
            $('#nome-jogador-2').html(jogador2)

            // ocultar campo e mostrar palco de jogo
            $('#pagina_inicial').hide();
            $('#palco_jogo').show();

            // jogando
            $('.jogada').click(function (){
                var id_campo = this.id;
                jogada(id_campo)
            })

            function jogada(id){
                var icone = '';
                var ponto = 0;

                if((rodada % 2) == 1){
                    icone = 'url("imagens/marcacao_1.png")';
                    ponto = -1;
                } else{
                    ponto = 1;
                }

                rodada ++;
            }
        })
    })

