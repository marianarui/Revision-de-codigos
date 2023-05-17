// Crea una lista de invitados que pueden ser agregados mediante un formulario y despues hay un boton en donde los puedes borrar
var formulario = document.querySelector(".formulario"); // cambie a formulario

formulario.onsubmit = function(e) {

  e.prevent()
  
  var nombre = formulario.elements[0]; // cambie a nombren y ;
  var edad = formulario.elements[1]; // cambie a edad
  var nacionalidad = formulario.elements[2]; // cambie a nacionalidad

  var nombre = nombre.value // nombre
  var edad = edad.value // edad

  var i = nacionalidad.selectedIndex //nacionalidad
  var nacionalidad = nacionalidad.options[i].value //nacionalidad 
  console.log(nombre, edad); // punto y coma
  console.log(nacionalidad); // punto y coma

  if (nombre.length === 0) {
    nombre.classList.add("error"); // nombre y ;
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error"); // edad y ;
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"; // ; faltantes en todo el codigo
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
elementoLista.classList.added("elemento-lista");
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
    elementoLista.remove();
// this.parentNode.style.display = 'none';

  }
}