class Tabuleiro{
    constructor(onClick){
        this.onClick = onClick;
        this.inicializar();
    }

    inicializar(){
        this.valor = []
        for(let linha = 0; linha < 3; linha++){
            let linhaAux = [];
            for(let coluna = 0; coluna < 3; coluna++){
                linhaAux.push(0)
            }
            this.valor.push(linhaAux);
        }
    }

    desenhar(){
        const container = document.createElement('div');
        container.id = 'container-tabuleiro';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.width = '100%';
        const tamanhoLista = this.valor.length;
        for(let linha = 0; linha < tamanhoLista; linha ++){
            const linhaContainer = document.createElement('div');
            linhaContainer.style.display = 'flex';
            linhaContainer.style.flexDirection = 'row';
            const colunaLista = this.valor[linha];
            for(let coluna = 0; coluna < colunaLista.length; coluna++){
                const itemContainer = document.createElement('div');
                itemContainer.style.width = '200px';
                itemContainer.style.height = '200px';
                itemContainer.style.display = 'flex';
                itemContainer.style.alignItems = 'center';
                itemContainer.style.justifyContent = 'center';
                itemContainer.style.fontSize = '100px';

                const textoConteudo = document.createTextNode(colunaLista[coluna] == 0 ? "" :colunaLista[coluna]);
                itemContainer.appendChild(textoConteudo);
                if(coluna > 0){
                    itemContainer.style.borderLeft = '1px solid #333';
                }
                if(linha != 2){
                    itemContainer.style.borderBottom = '1px solid #333';
                }
                const tentativa = new Tentativa(coluna, linha);
                itemContainer.onclick = () =>{ 
                    this.onClick(tentativa);
                }
                linhaContainer.appendChild(itemContainer);
            }
            container.appendChild(linhaContainer);
        }
        return container;
    }

    obterPosicao(tentativa) {
        return this.valor[tentativa.linha][tentativa.coluna];
    }

    atribuirPosicao = (jogador, tentativa) =>{
        this.valor[tentativa.linha][tentativa.coluna] = jogador.nome;
    }

    jogadaValida(tentativa){
        return this.obterPosicao(tentativa) == 0;
    }
}