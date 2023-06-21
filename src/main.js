// Change image
const imagen = document.querySelector(".bg-header");

function cambiarImagen() {
  if (window.innerWidth <= 550) {
    imagen.src = "../images/bg-header-mobile.png";
  } else {
    imagen.src = "../images/bg-header-desktop.png";
  }
}

window.addEventListener("resize", cambiarImagen);

cambiarImagen();
