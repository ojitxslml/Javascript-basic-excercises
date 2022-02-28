// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const e24_text = document.getElementById("e24_text");
const e24_btn = document.getElementById("e24_btn");

e24_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(numerosOrdenados(e24_text.value));
});

const numerosOrdenados = (text="") =>{
    if(text===""){
        return `ERROR: Ingrese un valor`;
    }else if(!text.replaceAll(/\s/g,'').match(/^[-,0-9]+$/)){
        return `ERROR: Ingrese solo numeros y comas`;
    }else{
        let num = text.split(",");
        let numeros = {
        ascendente: num.map(el => el).sort(),
        descendiente: num.map(el => el).sort().reverse()
        }
         return `Ascendente: ${numeros.ascendente} y Descendiente: ${numeros.descendiente}`
    }
}

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const e25_text = document.getElementById("e25_text");
const e25_btn = document.getElementById("e25_btn");

e25_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(eliminaDuplicados(e25_text.value));
});

const eliminaDuplicados = (text="") =>{
    let unicos = [];
    if(text.trim()===""){
        return "ERROR: Ingrese un valor!"
    }else{
        text = text.replaceAll(/\s/g,'').split(",");
        text.forEach(element => {
            if(!unicos.includes(element)){
                unicos.push(element);
            }
        });
        return unicos.join(", ");
    }
}

const e26_text = document.getElementById("e26_text");
const e26_btn = document.getElementById("e26_btn");

e26_btn.addEventListener("click", (item) =>{
    item.preventDefault();
    alert(promedio(e26_text.value));
});

const promedio = (text="") =>{
    if(text===""){
        return `ERROR: Ingrese un valor`
    }else if(!text.replaceAll(/\s/g,'').match(/^[-,0-9]+$/)){
        return `ERROR: Ingrese solo numeros y comas`
    }else{
        let num = text.split(",");
        let promedio = 0;
        num.forEach(element => {  
            promedio = parseInt(element) + promedio;
        });
        promedio = promedio/num.length;
        return `El promedio de los numeros es: ${promedio}`;
    }    
 }