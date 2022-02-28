// 21) Programa una función que dado un array numérico devuelve otro
// array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5])
// devolverá [1, 16, 25].
const e21_text = document.getElementById("e21_text");
const e21_btn = document.getElementById("e21_btn");

e21_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(numerosCuadrado(e21_text.value));
});

const numerosCuadrado = (text="") =>{
    if(text===""){
        return `ERROR: Ingrese un valor`
    }else if(!text.replaceAll(/\s/g,'').match(/^[-,0-9]+$/)){
        return `ERROR: Ingrese solo numeros y comas`
    }else{
        let num = text.split(",");
        num.forEach((element, index) => {
            num[index] = Math.pow(element, 2);
        });
        return num.join(", ");
    }
}
// 22) Programa una función que dado un array devuelva el número mas alto 
// y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const e22_text = document.getElementById("e22_text");
const e22_btn = document.getElementById("e22_btn");

e22_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(numMaxMin(e22_text.value));
});

const numMaxMin = (text="") =>{
    if(text===""){
        return `ERROR: Ingrese un valor`
    }else if(!text.replaceAll(/\s/g,'').match(/^[-,0-9]+$/)){
        return `ERROR: Ingrese solo numeros y comas`
    }else{
        let num = text.split(",");
       return `El número más alto es: ${Math.max(...num)} y el número más bajo es: ${Math.min(...num)}.`;
    }
}

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos 
// en el primero almacena los números pares y en el segundo los impares, 
// pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const e23_text = document.getElementById("e23_text");
const e23_btn = document.getElementById("e23_btn");

e23_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(objparImpar(e23_text.value));
});

const objparImpar = (text="") =>{
    if(text===""){
        return `ERROR: Ingrese un valor`
    }else if(!text.replaceAll(/\s/g,'').match(/^[-,0-9]+$/)){
        return `ERROR: Ingrese solo numeros y comas`
    }else{
        let num = text.split(",");
        let numeros= {
        pares: num.filter(num => num % 2 ===0),
        impares: num.filter(num => num % 2 === 1)
    }
    return `Los numeros pares son: ${numeros.pares} y los numeros impares son: ${numeros.impares}`;
    }
}