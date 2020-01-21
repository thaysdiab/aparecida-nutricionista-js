var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click"),function(){

var xhr = new XMLHttpRequest();
xhr.open("GET", "api-pacientes.herokuapp.com/pacientes");
xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax")
        if(xhr.status ==200){
            erroAjax.classList.add("invisivel")
            var reposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionarPacienteNaTabela(paciente); 
            });
        }else{
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
}