function calcularMedia(num1, num2) {
    return (num1 + num2) / 2;
}
let num1 = parseFloat(prompt("digite o primeiro numero:"));
let num2 = parseFloat(prompt("digite o segundo numero:"));
let media = calcularMedia(num1, num2);
console.log(`A media entre ${num1} e ${num2} é: ${media}`);