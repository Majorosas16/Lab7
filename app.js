const contenedor1 = document.querySelector("#contenedor1");
const contenedor2 = document.querySelector("#contenedor2");
const contenedor3 = document.querySelector("#contenedor3");
const contenedor4 = document.querySelector("#contenedor4");
const contenedor5 = document.querySelector("#contenedor5");
const contenedor6 = document.querySelector("#contenedor6");
const contenedor7 = document.querySelector("#contenedor7");
const contenedor8 = document.querySelector("#contenedor8");

let completadas=0, pendientes=0;

//tarea 01
const tarea1 = "Barrer la casa";
const estadoTarea1= false;


if (estadoTarea1===false){
completadas=completadas+1;
contenedor1.innerHTML= "<p>" +tarea1+ "</p> <input type='checkbox'checked>"; 

}else{
    pendientes=pendientes+1;
    contenedor1.innerHTML= "<p>" +tarea1+ "</p> <input class='desactivado check' type='checkbox'>";
}


//tarea 02
const tarea2 = "Limpiar el celular";
const estadoTarea2= false;

if (estadoTarea2===true){
    completadas=completadas+1;
    contenedor2.innerHTML= "<p>" +tarea2+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor2.innerHTML= "<p>" +tarea2+ "</p> <input type='checkbox'> ";
    }



//tarea 03
const tarea3 = "Darle comida a Lukas";
const estadoTarea3= false;

if (estadoTarea3===true){
    completadas=completadas+1;
    contenedor3.innerHTML= "<p>" +tarea3+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor3.innerHTML= "<p>" +tarea3+ "</p> <input type='checkbox'> ";
    }

//tarea 04

const tarea4 = "Tender la cama";
const estadoTarea4= false;

if (estadoTarea4===true){
    completadas=completadas+1;
    contenedor4.innerHTML= "<p>" +tarea4+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor4.innerHTML= "<p>" +tarea4+ "</p> <input type='checkbox'> ";
    }

//tarea 05

const tarea5 = "Hacer el trabajo de DYT";
const estadoTarea5= false;

if (estadoTarea4===true){
    completadas=completadas+1;
    contenedor5.innerHTML= "<p>" +tarea5+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor5.innerHTML= "<p>" +tarea5+ "</p> <input type='checkbox'> ";
    }

//tarea 06

const tarea6 = "Terminar los actos de narración";
const estadoTarea6= false;

if (estadoTarea6===true){
    completadas=completadas+1;
    contenedor6.innerHTML= "<p>" +tarea6+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor6.innerHTML= "<p>" +tarea6+ "</p> <input type='checkbox'> ";
    }

 //tarea 07

const tarea7 = "Hacer el almuerzo";
const estadoTarea7= false;

if (estadoTarea7===true){
    completadas=completadas+1;
    contenedor7.innerHTML= "<p>" +tarea7+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor7.innerHTML= "<p>" +tarea7+ "</p> <input type='checkbox'> ";
    }

//tarea 08

const tarea8 = "Consentir a Lukas";
const estadoTarea8= false;

if (estadoTarea7===true){
    completadas=completadas+1;
    contenedor8.innerHTML= "<p>" +tarea8+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor8.innerHTML= "<p>" +tarea8+ "</p> <input type='checkbox'> ";
    }

//tarea 09

const tarea9 = "Hacer invitación";
const estadoTarea9= false;

if (estadoTarea9===true){
    completadas=completadas+1;
    contenedor9.innerHTML= "<p>" +tarea9+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor9.innerHTML= "<p>" +tarea9+ "</p> <input type='checkbox'> ";
    }

    //tarea 10

const tarea10 = "Planchar ropa";
const estadoTarea10= false;

if (estadoTarea10===true){
    completadas=completadas+1;
    contenedor10.innerHTML= "<p>" +tarea10+ "</p> <input type='checkbox' checked> "; 
    
    }else{
        pendientes=pendientes+1;
        contenedor10.innerHTML= "<p>" +tarea10+ "</p> <input type='checkbox'> ";
    }




