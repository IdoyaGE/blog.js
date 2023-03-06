//evento para submit un post, en vez de hacer en HTML, lo hacemos en js con objetos


//FUNCIONES PARA CREAR ICONOS y crear los iconos DE EDITAR Y GUARDAR (El de borrar lo hemos creado en el js de la lista de la compra)

function crearIcono(simbolo,callback){
  let icono = document.createElement("i");
  icono.classList.add("fa", simbolo);
  icono.addEventListener("click",callback);
  return icono;
}

function crearIconoEditar(){
  let iconoEditar = document.createElement("i");
  iconoEditar.classList.add("fa", "fa-pencil");
  iconoEditar.addEventListener ("click", upDatePost);
  return iconoEditar;
}

function crearIconoGuardar(){
  let iconoGuardar = document.createElement("i");
  iconoGuardar.classList.add("fa", "fa-send");
  iconoGuardar.addEventListener ("click", upDatePost);
  return iconoGuardar;
}

//FUNCION CREAR UN POST

function createPostEvent(event) {
  event.preventDefault();
  let titulo = document.getElementById("titulo").value.trim();
  let contenido = document.getElementById("contenido").value.trim();
  createPost(titulo,contenido);
  document.getElementById("blogForm").reset();
}
function createPost (titulo,contenido){
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  let article = document.createElement("article");// creamos un articulo para unificar h2, p e iconos en un mismo blog
  let iconoBorrar = document.createElement("i");
  let iconoEditar = crearIcono ("fa-pencil", upDatePost);
  let iconoGuardar = crearIcono ("fa-send",upDatePost);
  iconoBorrar.classList.add("fa", "fa-trash");
  h3.innerText = titulo;
  p.innerText = contenido;
  article.appendChild(h3);//Llamas para que te lo guarde en articulo en lugar de sección
  article.appendChild(p);//Tenemos h2 y p guardados en articulo, pero no sabemos donde los guarda
  article.appendChild(iconoBorrar);//Hasta aqui solo creas el icono
  article.appendChild(iconoEditar);
  article.appendChild(iconoGuardar);
  nuevosBlog.insertBefore(article, nuevosBlog.children[1]);
  iconoBorrar.addEventListener("click", deletePost);//Al hacer el Listener te reconoce el evento y te realiza la función 
  iconoGuardar.addEventListener("click", guardarPost)
}

//FUNCION BORRAR UN POST

function deletePost(event) {
  let element = event.target;
  let parent = element.parentElement;
  //parent.remove(); lo ha descartado porque daba error
  let text = parent.getElementsByTagName("h3")[0].innerText;
  if (confirm("¿deseas borrar este post? \n" + text)) {
    parent.remove();
  }
}

//FUNCION GUARDAR UN POST


function submitPost(event) {
  let element = event.target;
  let parent = element.parentElement;
  parent.submit();
  let text = parent.getElementsByTagName("h3")[0].innerText;
  if (confirm("¿deseas guardar este post? \n" + text)) {
    parent.submit();
  }
}

//FUNCION DE CANCELACION DE EDICION DE POST
function cancelEdit(event,textoTitulo,textoParrafo){
  let element =event.target;//Necesitamos para saber donde, nos da el botón y sabemos cual es el parent del botón (donde está)
  let parent =element.parentElement;
  let titulo =document.createElement("h3");
  let parrafo = document.createElement("p");
  titulo.innerText = textoTitulo;
  parrafo.innerText= textoParrafo;
  parent.appendChild(titulo);
  parent.appendChild(parrafo);
  parent.getElementsByTagName("input")[0].remove();
  parent.getElementsByTagName("textarea")[0].remove();
  element.remove();//element es donde hacemos click
}

//FUNCION DE ACTUALIZAR UN POST

function upDatePost (event){
  //console.log(event);
  //console.log(target);
let element = event.target;
let parent = element.parentElement;
let titulo = parent.getElementsByTagName("h3")[0].innerText; //coja el primero del h3
let texto = parent.getElementsByTagName("p")[0].innerText; //coja el primero del parrafo
/* console.log("titulo" + titulo); // pilla el titulo
console.log("texto" + texto); // pilla el texto
*/
let inputTitulo = document.createElement("input"); // crea dos input vacios
let textArea = document.createElement("textarea");
let br = document.createElement("br"); // creas un elemeto br
let iconoCancelar =document.createElement("i");
iconoCancelar.classList.add("fa","fa-close");
inputTitulo.setAttribute("type", "text"); // no hace falta poner atributtes de texto parrafo porque es tipo textrea
inputTitulo.value = titulo;
textArea.value = texto;
parent.appendChild(inputTitulo);
parent.appendChild(br);
parent.appendChild(textArea);
parent.appendChild(iconoCancelar);
// parent.getElementsByTagName("h3")[0].remove(); este seria sin poner el let siguiente
iconoCancelar.addEventListener("click", function (event){
  cancelEdit(event, titulo,texto);//creamos una función anónima que no le hemos puesto nombre, se llama directamente con el listener
}); //le pasamos el evento, porque si no no funciona
let titulo1 = parent.getElementsByTagName("h3")[0];
titulo1.remove();
parent.getElementsByTagName("p")[0].remove(); 
}
//Vamos a crear un FILTER para hacer un buscador dentro del post 
let form = document.getElementById("blogForm");
form.addEventListener("submit", createPostEvent);
createPost("manzana", "Las manzanas rojas son las mejores");
createPost("limón", "El limón tiene muchas propiedades");
createPost("melocotón", "El melocotón está delicioso")



