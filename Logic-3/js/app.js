//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const e9_btn = document.getElementById("e9_btn");
e9_btn.addEventListener("click", () =>{
    alert(Math.round((Math.random())*(600 - 500)+500));
});

//10) Programa una función que reciba un número y evalúe si es capicúa o no 
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const e10_num = document.getElementById("e10_num");
const e10_btn = document.getElementById("e10_btn");

e10_btn.addEventListener("click", (item)=>{
item.preventDefault();
alert(comprobarCapicua(e10_num.value));
});

const comprobarCapicua = (num) =>{
    resultado = num.split("").reverse().join("");
    if(resultado === num){
        return true;
    }else{
        return false;
    }
}

//11) Programa una función que calcule el factorial de un número 
//(El factorial de un entero positivo n, se define como el producto 
//de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.


const e11_num = document.getElementById("e11_num");
const e11_btn = document.getElementById("e11_btn");

e11_btn.addEventListener("click", (item)=>{
    item.preventDefault();
   alert(calcularFactorial(e11_num.value));
});

calcularFactorial = (num) => {
    let resultado = 1;
    for(let i = 1; i<=num; i++){
        resultado = resultado*i;
    }
    return resultado;
}