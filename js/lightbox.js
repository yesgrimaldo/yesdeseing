const imagenes = document.querySelectorAll('.img-galeria')
const imagenlight= document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')

imagenes.forEach(imagen=>{
    imagen.addEventListener('click', ()=>{
       imagen.getAttribute('src');
    })
})
const aparecerimagen = (imagen)=> {
imagenlight.src = imagen;
}