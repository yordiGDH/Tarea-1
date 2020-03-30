var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \"comillas dobles\" ";


function hacerclic(){
	document.querySelector("#p2").onclick=mostrarmensaje;
}

function mostrarmensaje(){
			alert(mensaje);
}
window.onload=hacerclic;
