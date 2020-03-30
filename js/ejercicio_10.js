function hacerclic(){
	document.querySelector("#p10").onclick=mostrarElementos;
}

function palindromo(cadena) {
    var resultado = "<h2>La cadena: "+cadena+"</h2>";
  
    // Pasar a minusculas la cadena
    var cadenaOriginal = cadena.toLowerCase();
  
    // Convertir la cadena en un array
    var letrasEspacios = cadenaOriginal.split("");
  
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var cadenaSinEspacios = "";
    for(i in letrasEspacios)
      if(letrasEspacios[i] != " ")
            cadenaSinEspacios += letrasEspacios[i];
  
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
  
    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    var iguales = true;
    for(i in letras)
      if(letras[i] != letrasReves[i])
           iguales = false;
    if(iguales)
      resultado += "<h2>"+" es un palíndromo"+"</h2><br>";
    else
      resultado += "<h2>"+"no es un palíndromo"+"</h2><br>";

    return resultado;
  }
  
  function mostrarElementos (){
    texto.innerHTML = texto.innerHTML +(palindromo("La ruta nos aporto otro paso natural"));
    texto.innerHTML = texto.innerHTML +(palindromo("Esta frase no se parece a ningun palindromo"));  
  } 
  
  window.onload= hacerclic;