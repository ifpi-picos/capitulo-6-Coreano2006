function testeBloco() {
    if (true) {
        let variavelBloco = "Estou dentro de um bloco";
        //Escopo de bloco

        console.log(variavelBloco);
        //Acessivel dentro do bloco
    }
    //console.log(variavelBloco);
    //Isso resultaria em erro, pois a variavel nao é acessivel fora do bloco
}

testeBloco();