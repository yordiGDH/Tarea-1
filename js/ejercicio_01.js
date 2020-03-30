
function hacerclic(){
	document.querySelector("#p1").onclick=mostraralerta;
}

function mostraralerta(){
			alert('Hola Mundo!');
			alert("Soy el primer script");
}
window.onload=hacerclic;
