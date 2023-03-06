//sacar el contenido para el buscador
document.getElementById("buscador").addEventListener("keyup",filtrarPost) //Si hacemos click en el botón, nos aparece en consola el contenido del input metido en el post
function filtrarPost ()//keyup para reconocer las teclas
{
    let text = document.getElementById("buscador").value.toLowerCase();
    //console.log(text) //cuando hacemos click, nos sale el input que hemos metido en el POST, su contenido
    //id para los post que vamos creando, están en un articulo dentro de Nuevosblogs, conseguimos la sección y hacemos un queryselector
    let section = document.getElementById("nuevosBlog");
    let titulos = section.querySelectorAll("article >h3"); //AppendChild es para añadir y query Selector es para seleccionar
    titulos = [...titulos];//titulos = array.from(titulo);
    let titulosFiltrados = titulos.filter (titulo =>!titulo.innerText.toLowerCase().includes(text))//filtrar los post que tengan incluido en su texto pera
    titulos.ForEach (titulo =>{
        let article =titulo.parentElement;
        article.style.display ="block";//para que nos coja el titulo y el post completo
    })
    titulosFiltrados.forEach(titulo => {
        let article =titulo.parentElement;
        article.style.display ="none";
    });
       // console.log(titulo.innerText));//Hasta qui conseguimos los titulos filtrados y se ven en la consola inspector
    //le ponemos una ! delante de titulo para que me filtre los no seleccionados para hacer luego que desaparezcan
       
    //Diferencias entre DisplayOn y Visibility es que en el segundo deja el espacio oculto
}

 

