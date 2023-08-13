/*Agregar arreglos de objeto: que significa? hacer un pequeño script con el objeto persona. Crear una funcion especifica para poder agregar
al array el objeto, para luego usar array de objeto, cuandpo trabajamos del lado del prompt siempre recibimos un objeto.
Vamos a crear una funcion para ir agregando al arreglo ese objeto
Array => agrego objeto => es un array de objetos */


const Arraypersona = [
    {
        firstname: 'maria' ,
        apellido : 'Rosa',
        brithday: 2003,
        status: true,
    },

    {
        firstname: 'lola',
        apellido : 'meyer', 
        brithday: 2003,
        status: true,
    },

    {
        firstname: 'pedro',
        apellido : 'capo',
        brithday: 2003,
        status: true,
    }
];


for (let i = 0; i< Arraypersona.length; i++){
    console.log('===================');
    console.log('Nombre: ', Arraypersona[i].firstname );
    console.log('Apellido: ', Arraypersona[i].apellido);
    console.log('Año de nacimiento: ', Arraypersona[i].brithday);
    console.log ('Trabaja?: ', Arraypersona[i].status);
}