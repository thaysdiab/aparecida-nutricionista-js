//pacientes.forEach(function(paciente){
 //   paciente.addEventListener("dblclick",function(){
 //       this.remove();
//    });
//});

var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

    tabela.addEventListener('dblclick', function(event) {
    
        // Somente executará o código caso o elemento em que clicamos seja um <td>
        if (event.target.tagName == 'TD') {
            event.target.parentNode.remove()
        }
    });
    
