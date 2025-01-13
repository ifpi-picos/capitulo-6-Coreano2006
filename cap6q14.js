function calcularIMC(peso,altura) {
    return peso / (altura * altura);
}
function classificarIMC(imc) {
    if (imc < 18.5) {
        return "abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "sobrepeso"
    } else {
        return "obesidade";
    }
}
function calcularIMCUsuario() {
    let peso = parseFloat(prompt("digite seu peso em kg:"));
    let altura = parseFloat(prompt("digite sua altura em metros:"));
    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);
    alert(`Seu IMC é: ${imc.toFixed(2)}{classificacao: ${classificacao}`);
}
calcularIMCUsuario();