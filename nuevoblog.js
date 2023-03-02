let boton2 = document.getElementById("blog_form"); //En vez de hacer en HTML, lo hacemos en js con objetos
boton2.addEventListener("submit",crearPost);

function crearPost(event) {
    event.preventDefault();
    let articulo = document.createElement("article");// creamos un articulo para unificar h2 y p en un mismo blog
    articulo.classList.add("article");
    //TITULO
    let titulo = document.getElementById("titulo").value.trim(); 
    let tituloToCheck = titulo.replace(/\s/g,"");
    if (tituloToCheck.length <2){
        return;
    }
    if (alreadyExists(titulo)){
        returns;
    } 
    let h2 = document.createElement("h2");
    h2.innerText = titulo; 
    articulo.appendChild(h2);//Llamas para que te lo guarde en articulo en lugar de sección
    document.getElementById("titulo").value = " ";
    
    //CONTENIDO BLOG
    let contenido =document.getElementById("contenido").value.trim(); 
    let contenidoToCheck = contenido.replace(/\s/g,"");
    if (contenidoToCheck.length <2){
                return;
    }
    if (alreadyExists(contenido)){
                returns;
    } 
    let p = document.createElement("p");
    p.innerText = contenido; 
    articulo.appendChild(p);//Tenemos h2 y p guardados en articulo, pero no sabemos donde los guarda
    document.getElementById("contenido").value = " ";
//ICONO BASURA
    let icono2 =document.createElement("i");
    icono2.classList.add("fa","fa-trash");
    articulo.appendChild(icono2);//Hasta aqui solo creas el icono
    articulo.addEventListener("click",clickImportant);//Al hacer el Listener te reconoce el evento y te realiza la función 
//ARTICULO: Recoge el título, el parrafo y el icono de delete
    document.getElementById("blog_section").appendChild(articulo);//Nos guarda articulo en la sección blog_section

}  
function deleteParent(element){//Asi estariamos eliminando el icono y no lo que está antes del icono
    let parent = element.parentElement;
    let text = parent.innerText;
    if(confirm("¿Quieres borrar?\n"+text)){
    //El listener del evento ya está hecho, asi que mejor hacer una condicional
    parent.remove();
    }

}      
                   
       