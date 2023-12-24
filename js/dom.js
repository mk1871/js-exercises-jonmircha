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

/* const $linkDOM = document.querySelector(".link-dom");
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

$body.style.setProperty("background-color", varDarkColor); */

//
//
// 65. DOM: Clases CSS - video 65
/* const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
// averigua si una clase contiene x atributo
console.log($card.classList.contains("rotate-45"));
// agrega una clase
$card.classList.add("rotate-45");
// averigua si una clase es contenida
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
// quita una clase
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
// agrega o quita según estado actual
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
//reemplazar clases
$card.classList.replace("rotate-45", "rotate-135");
// agregar varias clases a la vez
$card.classList.add("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); */

/* // 66. DOM: Texto y HTML
const $whatIsDOM = document.getElementById("que-es");
let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM Documento Object Model</i></b>) es un API para documentos HTML y XML. 
</p>
<p>
Este provee una representación estructural del documento, permitiendo modificar su contenido y representación visual mediante código JS.
</p>
<p>
<mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark></p>
`;
// innerText no reconoce etiquetas HTML
//$whatIsDOM.innerText = text;
// textContent tampoco reconoce HTML, y elimina los saltos de línea
$whatIsDOM.textContent = text;
// para reconocer las etiquetas HTML, se debe usar innerHTML
$whatIsDOM.innerHTML = text;
//outerHTML hace lo mismo pero reemplazando el elemento al que se lo estoy aplicando por el contenido del mismo
$whatIsDOM.outerHTML = text;
 */

// 67. DOM Traversing: Recorriendo el DOM
/* const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.children[3].closest("section"));
 */

// 68. DOM: Creando Elementos y Fragmentos
/* 
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  // utilizado para agregar otro figure usando innerHTML
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://loremflickr.com/200/200/animals");
$img.setAttribute("alt", "Animals");
// agregamos la clase cards a figure para que tome los estilos
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
// agregando figure con otro mètodo sin crear nodos
$figure2.innerHTML = `
<img src="https://loremflickr.com/200/200/people" alt="People" />
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

// agregar otro elemento, una lista, de  manera dinámica simulando consumo de API
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
$ul = document.createElement("ul");
document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

// agregar otro elemento dinámicamente con otra técnica
const continentes = ["América", "África", "Asia", "Europa", "Oceanía"];
$ul2 = document.createElement("ul");
document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";

continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

// contenido dinámico usando fragmentos
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
 */

/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
/* ($cards = document.querySelector(".cards")),
  ($template = document.getElementById("template-card").content),
  ($fragment = document.createDocumentFragment()),
  (cardsContent = [
    {
      title: "Tecnología",
      img: "https://loremflickr.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://loremflickr.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://loremflickr.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://loremflickr.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://loremflickr.com/200/200/nature",
    },
  ]);
cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
 */

/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://loremflickr.com/200/200/any" alt="Nature" />
        <figcaption>Any</figcaption>
  
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]);
// $cards.insertBefore($newCard, $cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);
document.body.appendChild($cloneCards); */

/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */

/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

let $contentCard = `
<img src="https://loremflickr.com/200/200/any" alt="Any" />
        <figcaption></figcaption>
  
`;
$newCard.classList.add("card");
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards.insertAdjacentElement("afterbegin", $newCard);

$cards.append($newCard);
 */

/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.

Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).

https://developer.mozilla.org/en-US/docs/Web/Events
*/

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocido/a") {
  alert(`Hola, ${nombre}.`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

// ponemos la función sin paréntesis para que no se ejecute sino cuando se realice el evento
$eventoSemantico.onclick = holaMundo;
// con funcion anonima
$eventoSemantico.onclick = function (e) {
  alert("Manejador de Eventos semántico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo, manejador de eventos múltiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});
// agregando parámetros a eventos, se hace con arrow functions dentro de las que va la función
// con los parámetros que queramos
$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Manuel");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
