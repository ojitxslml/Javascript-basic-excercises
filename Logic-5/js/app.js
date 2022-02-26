// 15) Programa una función para convertir números de base binaria a
// decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const e15_num = document.getElementById("e15_num");
const e15_sel = document.getElementById("e15_sel");
const e15_btn = document.getElementById("e15_btn");

e15_btn.addEventListener("click", (item)=>{
    item.preventDefault();
   alert(convertirNumero(e15_num.value, e15_sel.value));
});

convertirNumero = (numero="", base) =>{
    if(numero===""){
        return("ERROR: Debe ingresar un número");
    }else{
       let n = parseInt(numero);
       let b = parseInt(base);
        if(b===2){
            if(isNaN(parseInt(numero, b))){
                return "El numero ingresado no es de base binaria!";
            }else{
                return `El numero ${numero} base ${base}, transformado a base decimal es: ${parseInt(numero, b)}`;
            }
            
        }else{
            return `El numero ${numero} base ${base}, transformado a base binaria es: ${n.toString(2)}`;
        }
    }
}


const e16_prec = document.getElementById("e16_prec");
const e16_desc = document.getElementById("e16_desc");
const e16_btn = document.getElementById("e16_btn");

e16_btn.addEventListener("click", (item) =>{
item.preventDefault();
alert(calcularMonto(e16_prec.value, e16_desc.value));
});

const calcularMonto = (prec="null", desc=0) =>{
    if(prec === ""){
        return `Error: debe ingresar un precio!`
    }else if(desc>=0 && desc<=100){
        return `El monto a pagar es: ${(prec - (prec * (desc/100)))}`
    }else{
        e16_desc.value = "";
        return `Error: Debe ingresar un descuento entre 0% y 100%`
    }
}

const e17_date = document.getElementById("e17_date");
const e17_btn = document.getElementById("e17_btn");



e17_btn.addEventListener("click", (item) =>{
    item.preventDefault();
   alert(calcularFecha(e17_date.valueAsNumber));
});

calcularFecha = (fnac) =>{
    if(isNaN(fnac)){
        return ("Error: Ingrese una fecha");
    }else{
        let fecha = new Date().getTime()-fnac,
        aniosMs = 1000*60*60*24*365,
        anios = Math.floor(fecha/aniosMs);
        if(anios<0){
            return `Faltan ${anios*-1} años`;
        }else{
            return `Han pasado ${anios} años`;
        }
    }
}