class Jogo {
    #jogada;
    constructor(){
        this.jogadorX = new Jogador('X');
        this.jogadorO = new Jogador('O');
        this.tabuleiro = new Tabuleiro(this.jogar);
        this.#jogada = 1;
    }

    iniciar(){
        this.#desenharTabuleiro(this.tabuleiro);
    }

    jogar = (tentativa) => {
        const jogadorVez = this.#obtemJogadorVez()
        if(this.tabuleiro.jogadaValida(tentativa)){
            jogadorVez.jogar(this.tabuleiro, tentativa);
            this.#jogada++;
            this.#desenharTabuleiro(this.tabuleiro);
            this.#checarVitoria();
        }else{
            alert('CAMPO INVALIDO, ESCOLHA UM CAMPO VAZIO!!')
        }
    }
    
    #obtemJogadorVez(){
        if(this.#jogada % 2 == 0){
            return this.jogadorO;
        }
        return this.jogadorX;
    }
   
    #checarVitoria(){
        const possibilidade = this.#possibilidades();
        const jogo = new Jogo();
        switch(possibilidade != 0){
            case possibilidade[1] == true:
                setTimeout(function() {
                    alert('Jogador X venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[2] ==  true:
                setTimeout(function() {
                    alert('Jogador O venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[3] == true:
                setTimeout(function() {
                    alert('Jogador X venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[4] == true:
                setTimeout(function() {
                    alert('Jogador O venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[5] == true:
                setTimeout(function() {
                    alert('Jogador X venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[6] == true:
                setTimeout(function() {
                    alert('Jogador O venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[7] == true:
                setTimeout(function() {
                    alert('Jogador X venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[8] == true:
                setTimeout(function() {
                    alert('Jogador O venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[9] == true:
                setTimeout(function() {
                    alert('Jogador X venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[10] == true:
                setTimeout(function() {
                    alert('Jogador O venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[11] == true:
                setTimeout(function() {
                    alert('Jogador X venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[12] == true:
                setTimeout(function() {
                    alert('Jogador O venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[13] == true:
                setTimeout(function() {
                    alert('Jogador X venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[14] == true:
                setTimeout(function() {
                    alert('Jogador O venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[15] == true:
                setTimeout(function() {
                    alert('Jogador X venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            case possibilidade[16] == true:
                setTimeout(function() {
                    alert('Jogador O venceu ');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            break;
            default: 
            if(this.#jogada == 10) {
                setTimeout(function() {
                    alert('Empate');
                    },30)
                    setTimeout(function() {
                        jogo.iniciar();
                        },200)
            }
        }
    }

   #desenharTabuleiro(tabuleiro){
        const cantainerAntigo = document.getElementById('container-tabuleiro')
        if(cantainerAntigo){
            document.body.removeChild(cantainerAntigo)
       }
        document.body.appendChild(tabuleiro.desenhar());
    }
    
    // enum(obj)
    #possibilidades(){
        const posisao = this.tabuleiro.valor;
        const possibilidade = {
            1: posisao[0][0] == this.jogadorX.nome && posisao[0][1] == this.jogadorX.nome && posisao[0][2] == this.jogadorX.nome ? true :false,
            2: posisao[0][0] == this.jogadorO.nome && posisao[0][1] == this.jogadorO.nome && posisao[0][2] == this.jogadorO.nome ? true :false,

            3: posisao[1][0] == this.jogadorX.nome && posisao[1][1] == this.jogadorX.nome && posisao[1][2] == this.jogadorX.nome ? true :false,
            4: posisao[1][0] == this.jogadorO.nome && posisao[1][1] == this.jogadorO.nome && posisao[1][2] == this.jogadorO.nome ? true :false,

            5: posisao[2][0] == this.jogadorX.nome && posisao[2][1] == this.jogadorX.nome && posisao[2][2] == this.jogadorX.nome ? true :false,
            6: posisao[2][0] == this.jogadorO.nome && posisao[2][1] == this.jogadorO.nome && posisao[2][2] == this.jogadorO.nome ? true :false,

            7: posisao[0][0] == this.jogadorX.nome && posisao[1][0] == this.jogadorX.nome && posisao[2][0] == this.jogadorX.nome ? true :false,
            8: posisao[0][0] == this.jogadorO.nome && posisao[1][0] == this.jogadorO.nome && posisao[2][0] == this.jogadorO.nome ? true :false,

            9: posisao[0][1] == this.jogadorX.nome && posisao[1][1] == this.jogadorX.nome && posisao[2][1] == this.jogadorX.nome ? true :false,
            10: posisao[0][1] == this.jogadorO.nome && posisao[1][1] == this.jogadorO.nome && posisao[2][1] == this.jogadorO.nome ? true :false,

            11: posisao[0][2] == this.jogadorX.nome && posisao[1][2] == this.jogadorX.nome && posisao[2][2] == this.jogadorX.nome ? true :false,
            12: posisao[0][2] == this.jogadorO.nome && posisao[1][2] == this.jogadorO.nome && posisao[2][2] == this.jogadorO.nome ? true :false,

            13: posisao[0][0] == this.jogadorX.nome && posisao[1][1] == this.jogadorX.nome && posisao[2][2] == this.jogadorX.nome ? true :false,
            14: posisao[0][0] == this.jogadorO.nome && posisao[1][1] == this.jogadorO.nome && posisao[2][2] == this.jogadorO.nome ? true :false,

            15: posisao[0][2] == this.jogadorX.nome && posisao[1][1] == this.jogadorX.nome && posisao[2][0] == this.jogadorX.nome ? true :false,
            16: posisao[0][2] == this.jogadorO.nome && posisao[1][1] == this.jogadorO.nome && posisao[2][0] == this.jogadorO.nome ? true :false,
        }
        return possibilidade;
    }
}