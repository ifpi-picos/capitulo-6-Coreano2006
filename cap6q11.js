const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function math() {
    return Math.floor(Math.random() * 101);
}

function calculo() {
    let num = math();
    let cont = 1;

    function perguntar() {
        if (cont > 10) {
            console.log('Número de tentativas esgotadas! O número secreto era:', num);
            readline.close();
            return;
        }

        readline.question('Digite um número: ', (input) => {
            let numero = parseInt(input);
            if (num === numero) {
                console.log('Parabéns, você acertou!');
                readline.close();
            } else {
                if (numero > num) {
                    console.log('Maior do que o número secreto!');
                } else {
                    console.log('Menor do que o número secreto!');
                }
                cont++;
                perguntar();
            }
        });
    }

    perguntar();
}

calculo();
