// 18) Programa una función que dada una cadena de texto cuente el número
// de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva
// Vocales: 4, Consonantes: 5.
const e18_text = document.getElementById("e18_text");
const e18_btn = document.getElementById("e18_btn");

e18_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(contarVocalesYConsonantes(e18_text.value));
});

const contarVocalesYConsonantes = (text) =>{
    let vocales=0, consonantes =0;
    text = text.split("");
    text.forEach(element => {
        if(element.match(/[aeiou]/ig)){
            vocales++;
        }else{
            consonantes++;
        }
    });
    return `La cadena tiene ${vocales} vocales y ${consonantes} consonantes`;
}

const e19_text = document.getElementById("e19_text");
const e19_btn = document.getElementById("e19_btn");

e19_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(validarNombre(e19_text.value));
});

const validarNombre = (text="") =>{
 if(text === ""){
     return "ERROR: Ingrese un nombre!"
 }else if(text.match(/\d/g)){
    e19_text.value = "";
    return "ERROR: No puede llevar numeros"
 }else if(text.match(/[^A-Za-z ]/g)){
    e19_text.value = "";
    return "ERROR: No puede llevar caracteres especiales"
 }else if(!text.match(/\b[A-Z][A-Za-z]\b/g)){
    e19_text.value = "";
    return "ERROR: La primera letra debe ser mayuscula"
 }else{
     return "Validado con exito!"
 }
}

const e20_text = document.getElementById("e20_text");
const e20_btn = document.getElementById("e20_btn");

e20_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    if(validateEmail(e20_text.value)){
        alert("Email validado con exito!");
    }else{
        alert("ERROR: Email invalido!");
    }
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };