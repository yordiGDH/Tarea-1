function valida(campo){
    var bRet = false;
    var resultado = " ";
    var nuevoElemento = "";

    if (campo.value == ""){
        resultado = "Faltan datos";
        nuevoElemento = "<br><h2>"+resultado+"</h2>";
        texto.innerHTML = texto.innerHTML + nuevoElemento;
    }
    
    else if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/)){
        resultado = "No tiene formato de RFC";
        nuevoElemento = "<br><h2>"+resultado+"</h2>";
        texto.innerHTML = texto.innerHTML + nuevoElemento;
    }

    else {
        bRet= true;
    }
   
    return bRet;
}
