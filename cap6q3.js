function calculadora(n1,n2, n3) {
    let soma = n1 + n2 + n3;
    let media = soma / 3;
    return Math.round(media);
    //funçao predefinida para arredondar o valor
}

let num1 = parseInt("7.5");
//Converte string para numero decimal
let num2 = parseFloat("8,3");
let num3 = parseFloat("9,1");
let media = calculadora(num1, num2, num3);
console.log(`${media}`);
