var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click"),function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var reposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function(paciente){
            adicionarPacienteNaTabela(paciente); 
        });

    });
    xhr.send();
}