
let boton = document.getElementById("guardar");//Para hacer el botón guardar
boton.addEventListener("click", guardarElemento);// Para meter los elementos de la lista con un click

function guardarElemento() {
  let text = document.getElementById("input").value.trim();// trim para quitar los espacios de las palabras de las listas
  let textToCheck = text.replace(/\s/g, "");//para quitar los espacios si metes en el input 
  if (textToCheck < 2) {//le ponemos esta condición para que no nos guarde si no metemos un input, <2 dos espacios en blanco
    return;
  }
  if (alreadyExist(text)) {
    return;
  }
  let li = document.createElement("li");//variable elementos de la lista
  let icono = document.createElement("i");//variable icono de crear elementos en la lista
  icono.classList.add("fa", "fa-trash");//añadinos un icono papelera a cada elemento de la lista para poder borrarlo
  li.innerText = text;//No ponemos HTML para que no se pueda modificar nuestro HTML y no lo dejemos abierto (solo poner texto)
  li.appendChild(icono);//para colocar el icono detrás de cada elemento
  li.addEventListener("click", clickImportant);//Listener para poner importante con click
  document.getElementById("lista").appendChild(li);//Para añadir los elementos de la lista al guardar 
  document.getElementById("input").value = "";//Queremos borrar el texto en el input
}
function clickImportant(event) {//Hacemos estas dos funciones para inputs importantes, creamos la clase importante
  console.log(event.target);
  let element = event.target;
  if (element.classList.contains("fa-trash")) {//Condicional para que no borre el icono papelera, sino su contenido
    deleteParent(element);
    return;
  }
  toggleImportant(event.target);//Función que se realiza cuando ocurre el evento, se convierte en importante con el click
}

function toggleImportant(element) {
  element.classList.toggle("important");//Cambiar la clase a important y en HTML en el style le hemos cambiado el fondo azul
}

function deleteParent(element) {//Asi estariamos eliminando el iconoborrar y no lo que está antes del iconoborrar
  let parent = element.parentElement;
  let text = parent.innerText;
  if (confirm("¿deseas borrar este elemento? \n" + text)) {//El listener del evento ya está hecho, asi que mejor hacer una condicional
    parent.remove();
  }
}

function alreadyExist(text) { // Vamos a hacer que no se repitan los elementos de la lista
  let lista = document.getElementById("lista");
  let elementosLista = lista.getElementsByTagName("li");
  for (let i = 0; i < elementosLista.length; i++) {
    if (text === elementosLista[i].innerText) {
      return true;
    }
  }
  return false;
}
