var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando...")
    
    var xhr = new XMLHttpRequest() // XML é um objeto no JS resposável por fazer requisições HTTP

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax")

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
      
            pacientes.forEach(function(paciente){
            adcionaPacienteNaTabela(paciente)
        })
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            erroAjax.classList.remove("invisivel")
        }
    })
    xhr.send()
})