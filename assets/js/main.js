var navegador=document.getElementById("navegador");
var formTelefono = document.getElementById("formTelefono")
var formularioOculto = document.getElementById("formularioOculto");

formularioOculto.style.display = "none"
formTelefono.addEventListener("click", mostrarFormulario);
document.addEventListener("scroll", cambiarFondoNavegador);

function cambiarFondoNavegador(){
  if(window.scrollY>90){
    navegador.style.backgroundColor="white";
  }else if(window.scrollY<90){
    navegador.style.backgroundColor="transparent";
  }
}

function mostrarFormulario() {
  formularioOculto.style.display = "inline-block";

}
