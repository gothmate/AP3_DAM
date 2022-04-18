let valor = document.getElementById('valor_hora')
let horas = document.getElementById('horas_trabalhadas')
let result = document.getElementById('salario_total')

function calculaSalario() {
    zeraResultado()
    let salarioBruto = (parseFloat(valor.value) * parseInt(horas.value)).toFixed(2)
    
    result.innerHTML += `<p>Salário Bruto: R$${salarioBruto}</p>`
    result.innerHTML += `<p>Desconto INSS: R$${calculaINSS(salarioBruto)}</p>`
    result.innerHTML += `<p>Desconto IR: R$${calculaIR(salarioBruto)}</p>`
    result.innerHTML += `<p>Desconto Sindicato: R$${calculaSind(salarioBruto)}</p>`
    result.innerHTML += `<p>Salário Líquido: R$${(salarioBruto - calculaINSS(salarioBruto) -calculaINSS(salarioBruto) - calculaSind(salarioBruto).toFixed(2)).toFixed(2)}</p>`
    valor.value = ''
    horas.value = ''
    return result 
}

function calculaIR(salario) {
    descontoIR = salario*0.11
    return descontoIR
}

function calculaINSS(salario) {
    descontoINSS = salario*0.08
    return descontoINSS
}

function calculaSind(salario) {
    descontoSind = salario*0.05
    return descontoSind
}

function zeraResultado() {
    result.innerHTML = ''
}