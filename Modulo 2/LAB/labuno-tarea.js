const prompt=require ('prompt-sync')({sigint:true});

//1- A partir de 3 valores ingresados por el usuario saber cual es el mayor de ellos 

var nUno = prompt("ingrese un numero: ");

var nDos = prompt("Ingrese un segundo numero: ");

var nTres = prompt("Ingese un tercer numero: ");

if (isNaN(nUno) || isNaN(nDos) || isNaN(nTres)) {
    console.log("los caracteres no son validos");
} else if (nTres < nUno && nDos < nUno) {
    console.log("El primer numero ingresado es el mayor: ", nUno);
} else if (nTres < nDos && nUno< nDos) {
    console.log("El segundo numero ingresado es el mayor: ", nDos);
} else if (nDos < nTres && nUno < nTres) {
    console.log("El tercer numero ingresado es el mayor: ", nTres);
} else if (nUno == nDos && nUno == nTres) {
        console.log("Todos los numeros son iguales: ", nUno);
} else {
       
        /// despues preguntamos si uno y dos son iguales y mayores
        /// despues preguntamos si uno y tres son iguales y mayores
        /// despues preguntamos si dos y tres son iguales y mayores
        // cualquier otro caso tuvo que ser una condicion valida anterior
        if (nUno == nDos && nUno > nTres) {
            console.log("El primer y segundo numero son iguales y mayores: ", nUno);
        } else if (nUno == nTres && nUno > nDos) {
            console.log("El primer y tercer numero son iguales y mayores: ", nUno);
        } else if (nDos == nTres && nDos > nUno) {
            console.log("El segundo y tercer numero son iguales y mayores: ", nDos);
        }
 }

//2- Realizar la tabla de multiplicar dado un valor por el usuario (del 1 al 10)

var valor = prompt ('Ingrese el numero que quiere multiplicar: ');
var multiplicador = '';

for (multiplicador= 1; multiplicador <= 10; multiplicador++) {
    console.log ('Tabla: ',valor, 'x', multiplicador, '=' ,multiplicador * valor );
   
};


//3- Realizar lo mismo que antes pero dividiendo 

var valord = prompt ('Ingrese el numero que quiere dividir: ');

var x = 1; 



while (x<=10) {
    
    console.log('Division: ', valord * x, '/', valord, '=', x)
    x++
};


/*var divisor = '';

for (divisor= 1; divisor <= 10; divisor++) {
    console.log ('Tabla: ', divisor / valord );
}; */