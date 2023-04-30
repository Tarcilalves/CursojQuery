$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $("#spinner").toggle();

    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();

        }, 3000);
             
        
       
    })
    .always(function(){
        $("#spinner").toggle();

    });
}


function trocaFraseAleatoria(){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);

    
}

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();
    var dados = { id: fraseId};

    $.get("http://localhost:3000/frases", dados,tocaFrase)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();

        }, 3000);
    })
    .always(function(){
        $("#spinner").toggle();

    });

}

function trocaFrase(data){
    var frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data,tempo);
}