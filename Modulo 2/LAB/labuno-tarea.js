const prompt=require ('prompt-sync')({sigint:true});

//1- A partir de 3 valores ingresados por el usuario saber cual es el mayor de ellos 

var nUno = prompt ('ingrese un numero: ');

var nDos = prompt ('Ingrese un segundo numero: ');

var nTres = prompt ('Ingese un tercer numero: ');


if (!(Number(nUno))||!(Number(nDos))||!(Number(nTres))) {
    console.log ('los caracteres no son validos')
} else if (nDos, nTres < nUno){
    console.log ('El primer numero ingresado es el mayor: ', nUno)
} else if (nUno, nTres < nDos) {
    console.log ('El numero mayor es el segundo ingresado es el segundo: ', nDos)
}  else if (((nUno === nDos) && (nTres < nUno, nDos )) || ((nDos===nTres) && (nUno < nDos, nTres)) || ((nUno=== nTres) && ( nDos< nUno, nTres ))){
    console.log ("Los numeros ingresados con mayor valor son iguales")
} else {
    console.log ( 'El numero mayor es el tercero: ', nTres)
}; 

//2- Realizar la tabla de multiplicar dado un valor por el usuario (del 1 al 10)

var valor = prompt ('Ingrese el numero que quiere multiplicar: ');
var multiplicador = '';

for (multiplicador= 1; multiplicador <= 10; multiplicador++) {
    console.log ('Tabla: ',multiplicador * valor );
   
};


//3- Realizar lo mismo que antes pero dividiendo 

var valord = prompt ('Ingrese el numero que quiere dividir: ');
var divisor = '';

for (divisor= 1; divisor <= 10; divisor++) {
    console.log ('Tabla: ', divisor / valord );
};