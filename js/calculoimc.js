var titulo = document.querySelector(".titulo");
titulo.textContent = ("Nutri Aparecida");

// Selecionador de paciente
var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i]

    // Selecionador de Peso
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent
    
    // Selecionador de Altura
    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent
    
    // Alteração no valor do IMC direto na tabela
    var tdImc = paciente.querySelector(".info-imc")

    var pesoEhValido = validaPeso(peso)
    var alturaEhValida = validaAltura(altura)
    
    if (!pesoEhValido){
        console.log("Peso Inválido!")
        pesoEhValido = false
        tdImc.textContent = "Peso Inválido!"
        paciente.classList.add("paciente-invalido")
    }
    
    if (!alturaEhValida){
        console.log("Altura Inválida!")
        alturaEhValida = false
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")
    }
    
    if (pesoEhValido == false && alturaEhValida == false){
        console.log("Peso e Altura Inválidos!")
        tdImc.textContent = "Peso e Altura Inválidos!"
        paciente.classList.add("paciente-invalido")
    }
    
    // Calculo do IMC
    if (pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

titulo.addEventListener("click", function(){
    console.log("Olá! Eu sou uma função anônima.")
})

// function mostrarMensagem(){
//     console.log("Olá! Eu sou uma função nomeada")
// }

function calculaImc(peso, altura){
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 4.00) {
        return true
    } else {
        return false
    }
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true
    } else {
        return false
    }
}