var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
   event.preventDefault()
   var form = document.querySelector("#form-adiciona")
   // Extraí os dados do form, atráves de uma function
   var paciente = pacientedoForm(form)
   var erros = validaPaciente(paciente);
   
   if(erros.length > 0){
      exibeMensagensDeErro(erros);
      return;
   }
   adcionaPacienteNaTabela(paciente)   
   form.reset()
   var mensagensErro = document.querySelector("#mensagens-erro")
   mensagensErro.innerHTML = ""
})

function adcionaPacienteNaTabela(paciente) {
   // Monta a tr com os dados, atráves de uma function
   var pacienteTr = montaTr(paciente)
   var tabela = document.querySelector("#tabela-pacientes")
   tabela.appendChild(pacienteTr)
}

function exibeMensagensDeErro(erros){
   var ul = document.querySelector("#mensagens-erro");
   ul.innerHTML = ""
   erros.forEach(function(erro){
       var li = document.createElement("li");
       li.textContent = erro;
       ul.appendChild(li);
   });
}

function pacientedoForm(form){
   // Pegando valores do form com um objeto (passando as propriedades dos objetos)
   var paciente = {
      nome:form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
   }
   return paciente
}

function montaTr(paciente) {
   // Criar os elementos da tabela (tr e td)
   var pacienteTr = document.createElement("tr")
   pacienteTr.classList.add("paciente")
    
   // Colando os valores e elementos dentro da tabela
   pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
   pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
   pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
   pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
   pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))
   return pacienteTr
}

function montaTd(dado, classe) {
   var td = document.createElement("td")
   td.textContent = dado
   td.classList.add(classe)
   return td
}

function validaPaciente(paciente) {
   var erros = []

   if (paciente.nome.length == 0) {
      erros.push("O Nome não pode estar em branco.")
   }

   if (!validaPeso(paciente.peso)){
      erros.push("O Peso é inválido.") 
   }  

   if (!validaAltura(paciente.altura)) {
      erros.push("A Altura é inválida.")
   }

   if(paciente.gordura.length == 0){
      erros.push("A Gordura não pode estar em branco.")
   }

   if(paciente.peso.length == 0){
      erros.push("O Peso não pode estar em branco.")
   }

   if(paciente.altura.length == 0){
      erros.push("A Altura não pode estar em branco.")
   }
   return erros
}