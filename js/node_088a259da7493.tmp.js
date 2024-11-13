var todosPacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event){
   event.target.parentNode.remove() // O event.target é o alvo de determinado evento
})

// todosPacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove() // this está atrelado ao paciente. Mesma coisa de "paciente.remove()". O this é o dono de determinado evento
//     })
// })
