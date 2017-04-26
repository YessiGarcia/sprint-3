var navegador=document.getElementById("navegador");
document.addEventListener("scroll",cambiarFondoNavegador);

function  cambiarFondoNavegador(){
  if(window.scrollY>90){
    navegador.style.backgroundColor="white";
  }else if(window.scrollY <90){
    navegador.style.backgroundColor="transparent";
  }
}
