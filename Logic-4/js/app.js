//12) Programa una función que determine si un número es primo 
//(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const e12_num = document.getElementById("e12_num");
const e12_btn = document.getElementById("e12_btn");

e12_btn.addEventListener("click", (item)=>{
item.preventDefault();
alert(evaluarPrimo(e12_num.value));
});

const evaluarPrimo = (num) => {
let resultado=0;
    for(let i=1; i<=num; i++){
        if(num%i === 0){
            resultado = num/i;
            if(resultado !=1 && resultado != num){
                console.log(resultado);
              return false;
            }
        }
    }
    return true;
}

//13) Programa una función que determine si un número es par o impar, pe.
//miFuncion(29) devolverá Impar.
const e13_num = document.getElementById("e13_num");
const e13_btn = document.getElementById("e13_btn");

e13_btn.addEventListener("click", (item)=>{
    item.preventDefault();
    alert(evaluarPares(e13_num.value));
});

const evaluarPares = (num) =>{
    if(num%2==0){
        return "El numero es par";
        }else{
            return "El numero es impar";
        }
}

//14) Programa una función para convertir grados Celsius a Fahrenheit 
//y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const e14_num = document.getElementById("e14_num");
const e14_btn = document.getElementById("e14_btn");

e14_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(transformarGrados(e14_num.value));
});

const transformarGrados = (num) =>{
    num = (num*9/5) + 32;
    return "La cantidad ingresada de °C a °F es: "+ num;
}