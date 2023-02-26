/*MENU*/

const btnMenu = document.querySelector(".menu-btn"),
      menu = document.querySelector(".menu");

btnMenu.addEventListener("click", (e)=>{
    menu.classList.toggle("is-active");
    btnMenu.firstElementChild.classList.toggle("none");
    btnMenu.lastElementChild.classList.toggle("none");
});

document.addEventListener("click", (e) => {
    if(!e.target.matches(".menu a"))return false;

    btnMenu.firstElementChild.classList.remove("none");
    btnMenu.lastElementChild.classList.add("none");    
    menu.classList.remove("is-active");
})



/*MODO OSCURO */
document.getElementById("modo-oscuro").addEventListener('click', function(){
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'black';
    document.getElementById('habilidades').classList.toggle("dark-mode");
    document.getElementById('proyectos').classList.toggle("dark-mode");
    document.getElementById('contacto').classList.toggle("dark-mode");
    document.getElementById('modo-oscuro').classList.toggle("none");
    document.getElementById('modo-claro').classList.remove("none");
})

document.getElementById("modo-claro").addEventListener('click', function(){
    document.body.style.color = 'black';
    document.body.style.backgroundColor = 'white';
    document.getElementById('habilidades').classList.remove("dark-mode");
    document.getElementById('proyectos').classList.remove("dark-mode");
    document.getElementById('contacto').classList.remove("dark-mode");
    document.getElementById('modo-claro').classList.toggle("none");
    document.getElementById('modo-oscuro').classList.remove("none");
})




/* Mostrar Proyecto*/
function mostrar(number) {
    div = document.getElementById(`${'project'+number}`);
    if(div.style.opacity == 0){
        div.classList.toggle("is-active");
        document.getElementById(`${'boton-proyecto'+number}`).classList.toggle("none");
        document.getElementById(`${'ocultar-proyecto'+number}`).classList.toggle("none");
    } else {
        div.classList.remove("is-active");
        document.getElementById(`${'boton-proyecto'+number}`).classList.remove("none");
        document.getElementById(`${'ocultar-proyecto'+number}`).classList.remove("none");
    }
}