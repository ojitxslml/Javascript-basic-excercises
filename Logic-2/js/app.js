// 5) Programa una función que invierta las palabras de una cadena de
// texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

e5_String = document.getElementById("e5_string");
e5_Btn = document.getElementById("e5_btn");

e5_Btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(voltearPalabra(e5_String.value));
    e5_String.value = "";
});

const voltearPalabra = (string) =>{
    let resultado = "";
    let array = [];
    array = string.split("");
    array = array.reverse();
    resultado = array.join("");
    return resultado;
}

// 6) Programa una función para contar el número de veces que se repite una palabra 
// en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

e6_String = document.getElementById("e6_string");
e6_String2 = document.getElementById("e6_string2");
e6_btn = document.getElementById("e6_btn");

e6_btn.addEventListener("click", (item) =>{
item.preventDefault();
alert(contarPalabras(e6_String.value, e6_string2.value));
e6_String.value= "";
e6_String2.value= "";
});

const contarPalabras = (oracion, palabra) =>{
    let palabras = [];
    let contador=0;
    palabras = oracion.split(" ");
    palabras.forEach(element => {
        if(element === palabra){
            contador++;
        }
    });
    return contador;
}

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
//(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

e7_String = document.getElementById("e7_string");
e7_btn = document.getElementById("e7_btn");

e7_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert("El resultado es: "+esPalindromo(e7_String.value));
    e7_String.value= "";
});

const esPalindromo = (string) =>{
    let array = string.split("").reverse();
    let alreves = "";
    array.forEach(element => {
        alreves += element;
    });
    if(alreves==string){
        return true;
    }else{
        return false;
    }
}

//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

e8_String = document.getElementById("e8_string");
e8_String2 = document.getElementById("e8_string2");
e8_btn = document.getElementById("e8_btn");

e8_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(eliminarPatron(e8_String.value, e8_String2.value));
});

const eliminarPatron = (string, patron) =>{
    let resultado = string.replaceAll(patron , "");
    return resultado;
}