/* console.log(window);
console.log(document);
texto = "Hola. Vamos a seguir aprendiendo. Buena suerte.";
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

  hablar(texto) */

//
//
// DOM - video 61
/* console.log("******** Elementos del DOM ********");

console.log(window.document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Título h2 generado por js</h2>"); */

//
//
// DOM - Nodos, Elementos y Selectores - Video 62

// Los siguientes han sido reemplazados
/* console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("menu"))

// con estos más nuevos
// si es id, se hace con #
// sin embargo, no es tan rápido como el getElementById (2020)
console.log(document.querySelector("#menu"))
// enlaces
// extrae solo uno, el primero que encuentra
console.log(document.querySelector("a"))
// extrae todos
console.log(document.querySelectorAll("a"))
// comparte algunos métodos con los arreglos
console.log(document.querySelectorAll("a").length)
// forEach
document.querySelectorAll("a").forEach(el => console.log(el))
// con clases
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])
// grupos más pequeños
// li que se encuentren en menu
console.log(document.querySelector("#menu li"))
console.log(document.querySelectorAll("#menu li")) */

//
//
// DOM - Atributos y Data-Attributes - Video 63

/* // lang
console.log(document.documentElement.lang);
// esta segunda forma es más exacta
console.log(document.documentElement.getAttribute("lang"));
// por ejemplo, con los enlaces
console.log(document.querySelector(".link-dom").href);
// notar la diferencia
console.log(document.querySelector(".link-dom").getAttribute("href"));

//Estableciendo atributos
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
// con setAttibute
document.documentElement.setAttribute("lang", "es-CO");
console.log(document.documentElement.lang);

// como buena práctica, las variables de elementos del DOM
// empiecen por $, no es obligatorio pero es una buena práctica
const $linkDOM = document.querySelector(".link-dom");
// cambiamos otro atributo
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com/");

// averiguar si elemento tiene un atributo
console.log($linkDOM.hasAttribute("rel"));
// remover un atributo
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

///////////////// Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
// devuelve los data-attributes
console.log($linkDOM.dataset);
// obtener un atributo de data-attribute
// notación de punto
console.log($linkDOM.dataset.description);
// cambiar atributo
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
// notación de punto
$linkDOM.dataset.description = "Suscríbete y comparte.";
console.log($linkDOM.dataset.description);
// validar
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */

//
//
// DOM: Estilos y variables CSS - Video 64

const $linkDOM = document.querySelector(".link-dom");
// accedemos con notación de punto a atributos de estilo
console.log($linkDOM.style);
// también con la otra notación, pero se incluyen diferencias. Por ejemplo, en la URL
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
//otra manera de acceder
console.log(window.getComputedStyle($linkDOM));
// obtener
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
//establecer atributos
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
// otra notación
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));

// Variables CSS - Custom Properties CSS

// variable que apunte a html que es donde están las variables
const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);
