// Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
// - Todos los datos del objeto son obligatorios.
// - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//    7 restantes números.
// - Valida que el título no rebase los 100 caracteres.
// - Valida que el director no rebase los 50 caracteres.
// - Valida que el año de estreno sea un número entero de 4 dígitos.
// - Valida que el país o paises sea introducidos en forma de arreglo.
// - Valida que los géneros sean introducidos en forma de arreglo.
// - Valida que los géneros introducidos esten dentro de los géneros 
//    aceptados*.
// - Crea un método estático que devuelva los géneros aceptados*.
// - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//   decimal de una posición.
// - Crea un método que devuelva toda la ficha técnica de la película.
// - Apartir de un arreglo con la información de 3 películas genera 3 
//   instancias de la clase de forma automatizada e imprime la ficha técnica 
//   de cada película. 
const id = document.getElementById("e27_id");
const pelicula = document.getElementById("e27_titulo");
const calificacion = document.getElementById("e27_calific");
const director = document.getElementById("e27_director");
const estreno = document.getElementById("e27_estreno");
const pais = document.getElementById("e27_pais");
const generos = document.getElementById("e27_genero");
const txtGeneros = document.querySelector(".generos");
const txtPaises = document.querySelector(".paises");
const ficha = document.querySelector(".ficha");
const template = document.getElementById("template");
const templateFicha = document.getElementById("templateFicha");
const fragment = document.createDocumentFragment();
let listaGeneros = [];
let paises = [];
let errores = "";
let peli = [];
function myOnLoad() {
    cargar_generos();
   }

   const cargar_generos = () =>{
     const arrayGeneros = ("Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary, Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western").split(", "); 
     arrayGeneros.sort();
        for(value in arrayGeneros){
            let option = document.createElement("option");
            option.text = arrayGeneros[value];
            generos.add(option);
        }
    }

document.addEventListener("click", (e) =>{
    if(e.target.matches('#e27_btn')){
        e.preventDefault();
        validarDatos(id.value.trim(), pelicula.value.trim(), director.value.trim(), estreno.value.trim(), calificacion.value.trim());
    }else if(e.target.matches('#e27_btnGenero')){
        e.preventDefault();
        if(generos.value !==  ""){
            const indice = listaGeneros.findIndex((item) => item === generos.value);
            if(indice<0){
                listaGeneros.push(generos.value);
                pintarGenero();
            }else{
                alert("Este genero ya fue agregado!");
            }
            }
    }else if(e.target.matches('#e27_btnPais')){
        e.preventDefault();
        if(pais.value !==  ""){
            const indice = paises.findIndex((item) => item === pais.value);
            if(indice<0){
                paises.push(pais.value);
                pintarPais();
            }else{
                alert("Este país ya fue agregado!");
            }
            }
    }else if(e.target.matches('.g6 .tp_btn')){
        e.preventDefault();
        quitarGenero(e);
    }else if(e.target.matches('.g5 .tp_btn')){
        e.preventDefault();
        quitarPais(e);
    }else if(e.target.matches('.eliminarPeli')){
        e.preventDefault();
        quitarFicha(e);
    }
});


const pintarGenero = () =>{
    txtGeneros.textContent = "";
    listaGeneros.forEach(element => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".tp_text").textContent = element;
        clone.querySelector(".tp_btn").dataset.id = element;
        fragment.appendChild(clone);
    });
    txtGeneros.appendChild(fragment);
}


const quitarGenero = (e) =>{
    listaGeneros = listaGeneros.filter(item =>{
        if(item == e.target.dataset.id){
            return;
        }else{
            return item;
        }
    });
    pintarGenero();
}

const pintarPais = () =>{
    txtPaises.textContent = "";
    paises.forEach(element => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".tp_text").textContent = element;
        clone.querySelector(".tp_btn").dataset.id = element;
        fragment.appendChild(clone);
    });
    txtPaises.appendChild(fragment);
}

const quitarPais = (e) =>{
    paises = paises.filter(item =>{
        if(item == e.target.dataset.id){
            return;
        }else{
            return item;
        }
    });
    pintarPais();
}

const pintarFicha = () =>{
    ficha.textContent = "";
    peli.forEach(element => {
        const clone = templateFicha.content.cloneNode(true);
        clone.querySelector(".id").textContent = "ID: "+ element.id;
        clone.querySelector(".titulo").textContent = "Título: "+element.titulo;
        clone.querySelector(".director").textContent = "Director: "+element.director;
        clone.querySelector(".estreno").textContent = "Estreno: "+element.estreno;
        clone.querySelector(".calificacion").textContent = "Calificación: "+element.calificacion;
        clone.querySelector(".pais").textContent = "País: "+element.pais;
        clone.querySelector(".generos").textContent = "Generos: "+element.generos;
        clone.querySelector(".eliminarPeli").dataset.id = element.id;
        fragment.appendChild(clone);
    });
    ficha.appendChild(fragment);
}

const quitarFicha = (e) =>{
    peli = peli.filter(item =>{
        if(item.id == e.target.dataset.id){
            return;
        }else{
            return item;
        }
    });
    pintarFicha();
}

const validarDatos = (id="", pelicula="", director="", estreno="", calificacion="") => {
    errores="";
    errores += id==="" ? ("Error: debes ingresar un id") : "";
    errores += id.match(/[a-zA-Z][[a-zA-Z][0-9]{7}$/g) ? "" : ("\nError: El id debe ser de 2 letra y 7 numeros");
    errores += pelicula==="" ? ("\nError: debes ingresar un pelicula") : "";
    (calificacion<0 || calificacion>10) ? errores +=("\nError: la calificacion debe ser un número entre 0 y 10 pudiendo ser decimal de una posición. ") : calificacion = parseFloat(calificacion).toFixed(1); 
    errores += director==="" ? ("\nError: debes ingresar un director") : "";
    errores += estreno==="" ? ("\nError: debes ingresar una fecha de estreno") : "";
    errores += paises.length === 0 ? ("\nError: debes ingresar almenos un pais") : "";
    errores += listaGeneros.length === 0 ? ("\nError: debes ingresar almenos un genero"):"";
    errores += pelicula.length>100 ? ("\nError: el titulo no debe superar los 100 caracteres") : "";
    errores += director.length>50 ? ("\nError: el director no debe superar los 50 caracteres") : "";
    errores += director.length>50 ? ("\nError: el director no debe superar los 50 caracteres") : "";
    errores += director.length>50 ? ("\nError: el director no debe superar los 50 caracteres") : "";
    errores += estreno.match(/[0-9]{4}/g) ? "" : ("\nError: el año debe tener 4 digitos");
    if(errores === ""){
        let exists = false;
        peli.forEach(element => {
            if(element.id === id){
                  exists = true;  
            }
        });
        if(!exists){
            peli.push(new Pelicula({
                id: id,
                titulo: pelicula,
                director: director,
                estreno: estreno,
                pais: pais,
                generos: listaGeneros,
                pais: paises,
                calificacion: calificacion
            }));
            console.log(peli);
            pintarFicha();
        }else{
            alert ("Error: la pelicula ya existe!")
        }
        
    }else{
        alert(errores);
    }
    
}

class Pelicula{
    constructor({id, titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;        
    }
}

