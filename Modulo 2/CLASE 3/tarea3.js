const prompt=require ('prompt-sync')({sigint:true});
//Realizar una funcion que permita segun la accion dada por el usuario mostrar por pantalla la tabla de multiplicar, sumar, restar y dividir 
//El valor debe ser ingresado por el usuario 

var numIngresado = prompt ('Ingrese un numero: ');

numIngresado = parseInt (numIngresado);

let nAlterar = 10;

let x = '';

const sumar = (numIngresado, nAlterar) => {
    console.log("** Sumar ****");
    for (x = 1; x <= nAlterar; x++) {
        let resultadoA = numIngresado + x;
        console.log("Tabla de suma: ", numIngresado, "+", x, "=", resultadoA);
    }
};



const multiplicar = (numIngresado, nAlterar) => {
    console.log ('**Multiplicar***');
    for (x=1;x<= nAlterar; x++) {
        let resultadoB = numIngresado * x;
        console.log ('Tabla de multiplicar: ', numIngresado, 'x', x, '=', resultadoB);
    }
};



const dividir = (numIngresado, nAlterar) => {
    console.log('**Dividir***');
    for (x = 1; x<= nAlterar; x++) {
        console.log ('Tabla de dividir: ', numIngresado * x, '/', numIngresado, '=', x );
    }

};



const resta = (numIngresado) => {
    console.log('**Restar***');
    
    for (x=numIngresado; x>= 1; x--){
        let resultadoC = numIngresado - x;
        console.log ('Tabla de restar: ', numIngresado, '-', x, '=', resultadoC);
    };
}; 

const distinto = () => {
    console.log('el valor ingresado no corresponde a una accion');
};
 
let operacion = prompt ("Ingrese 1 si desea sumar, 2 si desea restar, 3 si desea multiplicar o 4 si desea dividir: ");

operacion = parseInt (operacion);

switch (operacion){
    case 1: operacion = sumar (numIngresado, nAlterar); break;
    case 2: operacion = resta (numIngresado, nAlterar); break; 
    case 3: operacion = multiplicar (numIngresado, nAlterar); break;
    case 4: operacion = dividir (numIngresado, nAlterar); break; 
    default: operacion = distinto(); break;
};

console.log (operacion); 