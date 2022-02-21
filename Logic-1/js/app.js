//1) Programa una función que cuente el número de caracteres 
//de una cadena de texto, 
//pe. miFuncion("Hola Mundo") devolverá 10.

const e1_String = document.getElementById("e1_string");
const e1_Btn = document.getElementById("e1_btn");

e1_Btn.addEventListener("click", (item)=>{
    item.preventDefault();
    contarString(e1_String.value.trim()); 
    e1_String.value = "";
});

const contarString =(string)=>{
    if(getInputType(string) == 'string'){
        alert("La cantidad de caracteres es: "+string.length+ "😎");
    }else if(getInputType(string) == ""){
        alert("Ingrese un valor 👻");  
    }else{
        alert("El valor ingresado no corresponde a un String 🛑");    
    }
}



// 2) Programa una función que te devuelva el texto recortado según el
// número de caracteres indicados, pe. miFuncion("Hola Mundo", 4)
// devolverá "Hola".

const e2_String = document.getElementById("e2_string");
const e2_Number = document.getElementById("e2_number");
const e2_btn = document.getElementById("e2_btn");

e2_btn.addEventListener("click",(item) =>{
    item.preventDefault();
    if(e2_String.value !== "" && e2_Number.value!==""){
        alert(cortarCaracteres(e2_String.value, e2_Number.value)); 
    }else{
        alert("Ingrese un valor 👻");  
    }
    e2_String.value="";
    e2_Number.value="";
});

const cortarCaracteres = (string, number) =>{
    let cortado = "";
    const caracteres = string.split("");
    try{
        caracteres.length = caracteres.length - number;
        caracteres.forEach(element => {
            cortado += element;
        });
    }catch(e){
        return(e);
    }
    return("El valor recortado es: "+cortado);
}

// 3) Programa una función que dada una String te devuelva un Array de
// textos separados por cierto caracter, pe. miFuncion('hola que tal', '
// ') devolverá ['hola', 'que', 'tal'].

const e3_String = document.getElementById("e3_string");
const e3_btn = document.getElementById("e3_btn");

e3_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(cortarPalabras(e3_String.value));
});

const cortarPalabras = (string) =>{
    let palabras = [];
    if(getInputType(string) === "string"){
        palabras = string.split(" ");
    }else if(getInputType(string) === "" ){
        alert("Ingrese un valor 👻");  
    }else{
        alert("El valor ingresado no corresponde a un String 🛑");    
    }
    console.log(palabras)
        return palabras;
}


// 4) Programa una función que repita un texto X veces, pe.
// miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const e4_String = document.getElementById("e4_string");
const e4_Number = document.getElementById("e4_number");
const e4_btn = document.getElementById("e4_btn");

e4_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    if(e4_String.value !== "" && e4_Number.value!==""){
    alert(repetir(e4_String.value, e4_Number.value));
    }else{
    alert("Ingrese un valor 👻");  
    }
    e4_String.value="";
    e4_Number.value="";
});

const repetir = (string, number) =>{
    let resultado="";
    for(let i=0; i<number; i++){
       resultado += string+" ";
    }
    return resultado;
}

function getInputType(value) {
    if(value === "")
        return "";
    else if(value === "true" || value === "false")
        return "boolean";
    else if(!Number.isNaN(Number(value)))
        return "number";
    else
        return typeof value;
}