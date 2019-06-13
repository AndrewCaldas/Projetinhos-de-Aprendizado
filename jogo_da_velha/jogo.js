    var rodada = 1;
    var matriz_jogo = Array(3);

    matriz_jogo['a'] = Array(3);
    matriz_jogo['b'] = Array(3);
    matriz_jogo['c'] = Array(3);

    // Copulação das arrays

    matriz_jogo['a'][1] = 0;
    matriz_jogo['a'][2] = 0;
    matriz_jogo['a'][3] = 0;

    matriz_jogo['b'][1] = 0;
    matriz_jogo['b'][2] = 0;
    matriz_jogo['b'][3] = 0;

    matriz_jogo['c'][1] = 0;
    matriz_jogo['c'][2] = 0;
    matriz_jogo['c'][3] = 0;

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
                    // alert("jogador 1")
                    icone = 'url("imagens/marcacao_1.png")';
                    ponto = -1;
                } else{
                    // alert("jogador 2")
                    icone = 'url("imagens/marcacao_2.png")';
                    ponto = 1;
                }
                // alert(rodada)
                rodada ++;

                $('#'+id).css('background-image', icone);

                let linha_coluna = id.split('-')

                matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
            }

            function verifica() {
                let pontos = 0;
                for (let i = 0; i <= 3; i++) {
                    pontos = pontos + matriz_jogo['a'][i];
                }
                ganhador(pontos)

                pontos = 0;
                for (let i = 0; i <= 3; i++) {
                    pontos = pontos + matriz_jogo['b'][i];
                }
                ganhador(pontos)

                pontos = 0;
                for (let i = 0; i <= 3; i++) {
                    pontos = pontos + matriz_jogo['c'][i];
                }
                ganhador(pontos)
            }

            function ganhador(pontos) {
                if(pontos == -3) {
                    alert("Jogador numero 1 ganhou!")
                } else if (pontos == 3){
                    alert("Jogador numero 2 ganhou!")
                }
            }

            

        })
    })

