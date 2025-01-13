function converterMoeda(reais,taxaCambio) {
    return reais / taxaCambio;
}
function conversorMoeda() {
    let valorReal = parseFloat(prompt("digite o valor em reais:"));
    let taxaDolar = parseFloat(prompt("digite a taxa de cambio atual do dolar:"));
    let valordolar = converterMoeda(valorReal,taxaDolar);
    alert(`O valor em dolares é: $${valordolar.toFixed(2)}`);
}
conversorMoeda();