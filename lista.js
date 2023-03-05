let boton= document.getElementById("guardar");//Para hacer el botón guardar
        boton.addEventListener("click",guardarElemento);// Para meter los elementos de la lista con un click

        function guardarElemento() {
            let text =document.getElementById("input").value.trim(); // trim para quitar los espacios de las palabras de las listas
            let textToCheck = text.replace(/\s/g,"");//para quitar los espacios si metes en el input y el dos es para dos espacios
            if (textToCheck.length <2){//le ponemos esta condición para que no nos guarde si no metemos un input
                return;
            }
            if (alreadyExists(text)){
                returns;

            } 
            let li = document.createElement("li");
            let icono =document.createElement("i");//Hemos subido el enlace del icono, en style le hemos metido en rojo
            icono.classList.add("fa","fa-trash");//Esto lo hemos hecho para crear el icono para cada elemento de la lista
            li.innerText =text; //No ponemos HTML para que no se pueda modificar nuestro HTML y no lo dejemos abierto (solo poner texto)
            li.appendChild(icono);
            li.addEventListener("click",clickImportant);//Liestener para poner importante con click
            document.getElementById("lista").appendChild(li);//Para añadir los elementos de la lista al guardar 
            document.getElementById("input").value = " ";//Queremos borrar el texto en el input
        }
        function clickImportant(event){//Hacemos estas dos funciones para inputs importantes, creamos la clase importante
            console.log(event.target);
            let element = event.target;
            if(element.classList.contains("fa-trash")){//Condicional para que no coja el icono, sino el contenido
               deleteParent(element);
               return;
        } 
            toggleImportant(event.target);//Función que se realiza cuando ocurre el evento
        }
        function toggleImportant(element){
            element.classList.toggle("important");//Cambiar la clase a important y en HTML en el style le hemos cambiado el fondo azul
        }
        function deleteParent(element){//Asi estariamos eliminando el icono y no lo que está antes del icono
            let parent = element.parentElement;
            let text = parent.innerText;
            if(confirm("¿Quieres borrar?\n"+text)){
            //El listener del evento ya está hecho, asi que mejor hacer una condicional
            parent.remove();
        }
    
}
        // Vamos a hacer que no se repitan los elementos de la lista
        function alreadyExists(text){
            let lista = document.getElementById("lista");
            let elementosLista = lista.getElementsByTagName("li");
            for (let i=0; i< elementosLista.length; i++){
                if(text === elementosLista[i].innerText){
                    return true;
                }
            }
            return false;
        }
        