const optionMode = document.querySelector("#option-mode");
//por que traigo a body?
const body = document.querySelector("body");

//vamos a usar el evento onchange para poder obtener el valor select
optionMode.onchange = function(event) {
    // se acuerdan de la estructuracion de objetos?
    //esto obteniendo value desde la variebale event.target

    //esto nos ayuda a poder extraer los valores de un objeto y poder almacenalos en una variable
    //! estamos extrayendo value y name desde event.target
    // const value = event.target.value
    // const name = event.target.name
    const { value } = event.target;

    //aca debemos validar si el value es igual a dark entonces
    //el body debemo agrgarle el data-mode con valor dark si no
    //le agregamos el valor light

    body.setAttribute("data-mode", value);
};

//La funcion matchMedia detecta en modo esta nuestro dispositivo
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    // Modo oscuro preferido por el dispositivo
    body.setAttribute("data-mode", "dark");
} else {
    // Modo claro preferido por el dispositivo
    body.setAttribute("data-mode", "light");
}