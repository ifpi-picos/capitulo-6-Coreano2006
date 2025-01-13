function adicionar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        return "Nao é possivel dividir por zero.";
    }
    return a / b
}
function calculadora() {
    let num1 = parseFloat(prompt("Digite o primeiro numero:"));
    let num2 = parseFloat(prompt("Digite o segundo numero:"));
    let operaçao = prompt("Escolha a operaçao:+, -, *, /");
    let resultado;
    if (operaçao === "+") {
        resultado = adicionar(num1, num2);
    } else if (operaçao === "-") {
        resultado = subtrair(num1, num2);
    } else if (operaçao === "*") {
        resultado = multiplicar(num1, num2);
    } else if (operaçao === "/") {
        resultado = dividir(num1, num2);
    } else {
        resultado = "Operaçao invalida.";
    }
    alert(`Resultado: ${resultado}`);
}
calculadora();