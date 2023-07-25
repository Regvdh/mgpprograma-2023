//EJERCICIO: calcular el numero mayor y menor de tres variables usando if y else o ? :

var numeroUno =10;

var numeroDos = 52;

var numeroTres= 34;

var mayor; 

var menor; 

if (numeroUno> numeroDos && numeroUno > numeroTres) {mayor = numeroUno}

    else if (numeroDos > numeroUno && numeroDos > numeroTres) {mayor = numeroDos}

        else {mayor = numeroTres};


if (numeroUno < numeroDos && numeroUno < numeroTres) {menor = numeroUno}

        else if (numeroDos < numeroUno && numeroDos < numeroTres) {menor = numeroDos}
    
            else {menor = numeroTres};


console.log ('El numero menor es', menor, 'y el numero mayor es', mayor);
    

