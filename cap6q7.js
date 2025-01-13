let variavelGlobal = "sou global";
//variavel global

function testeEscopo() {
    let variavelLocal = "sou local";
    //variavel local

console.log(variavelGlobal);
//Acesando variavel global dentro da funçao

console.log(variavelLocal);
//Acessando variavel local dentro da funçao
}

testeEscopo();
console.log(variavelGlobal);
//Acessando variavel global fora da funçao
//console.log(variavelLocal);
//Isso resultaria em erro, pois variavelLocal nao é acessivel fora da funçao