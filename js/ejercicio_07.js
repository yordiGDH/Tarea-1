function hacerclic(){
	document.querySelector("#p7").onclick=operacion;
}

function operacion(){
    var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
    var resultado = 1;

    for(var i=1; i<=numero; i++) {
    resultado *= i;
    }

    var nuevoElemento = "<br><h2>"+resultado+"</h2>";
    texto.innerHTML = texto.innerHTML + nuevoElemento;
}

window.onload=hacerclic;