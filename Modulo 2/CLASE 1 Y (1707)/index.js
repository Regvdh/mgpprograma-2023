//Las variables se declaran con cammel case. Como declaro una variable; existen 3 maneras que usan claves diferentes
//forma 1: declaro y pongo un valor

var pruebaUno=12;
var pruebaUnoYMedio='12';

//Cuando declaramos la variable el programa ya sabe que variable es, si no esta en comillas es entero, si lo encerramos en comillas es un string como esta en la linea de abajo
//Cando declaramos una bariable, dicha variable va a estar en nuestro codigo 

//Opcion 2: nos permite declarar variables en JS a nivel de bloque, es decir una funcion definida mayormente dentro de una llave, la usamos cuandoe stamos dentro de un bloque de instruccion {FRAGMENTO DE CODIGO}

let pruebaDos='hola';

//nosotros declaramos eso, dentro de un bloque le digo 

{let dos =2;}

//el var como tal en cambio respeta el valor, la declaras para el uso de todo el programa, solo le asignas valores, let se usa en bloques de isntrucciones

//opcion 3 = constante 

const pruebaTres = 'chau';

//PALABRAS RESERVADAS. LET, VAR, CONS, SON PREDEFINIDAS POR EL LENGUAJE, NO ALTERAMOS SU VALOR 
//typeof: nos permite saber que tipo de datos tiene una variable en js. lo usamos asi:

console.log(typeof pruebaUno)
console.log(typeof pruebaUnoYMedio)
console.log(typeof pruebaDos)
console.log(typeof pruebaTres);

//ademas de los tipos de datos vamos a tener distintos operadores
/*OPERADORES ARIGMETICOS */

/*OPERADORES DE ASIGNACION*
son el =, sumar y asignar +=, asi con el resto de las operaciones aritmeticas*/

//OPERADORES UNARIOS
/*PERMITEN INCREMENTAR, DISMINUIR UN VALOR*/

/*ESTRUCTURAS DE CONTROL, REPETITVAS, FUNCIONES*/