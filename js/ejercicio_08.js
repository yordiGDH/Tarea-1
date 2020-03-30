function hacerclic(){
	document.querySelector("#p8").onclick=operacion;
}

function operacion(){
    var numero = prompt("Introduce un número entero");
    var resultado = parImpar(numero);

    alert("El número "+numero+" es "+resultado);

    function parImpar(numero) {
        if(numero % 2 == 0)   return "par";
        else   return "impar";
    }
}
window.onload=hacerclic;

