const calcularMedia = (n1, n2, n3) => {
    let media = (n1 + n2 + n3) / 3;
    console.log(`À media é: ${media}`);
};

const quadrado = (numero) => numero * numero;

const exibirMensagem = () => console.log("Ola, isso é uma baita de uma mensagem kkk, oii ptof.");

const testeEscopo = () => {
    let variavelGlobal = "Sou globalll";
    let variavelLocal = " sou locallll";

    console.log(variavelGlobal);
    console.log(variavelLocal);
};
const testeBloco = () => {
    if (true) {
        let variavelBloco = "Estou dentro de um bloco";
        console.log(variavelBloco);
    }
};
//chamando as funçoes 
calcularMedia(10, 20, 30);
console.log(`o quadrado de 5 é: ${quadrado(5)}`);
exibirMensagem();
testeEscopo();
testeBloco();