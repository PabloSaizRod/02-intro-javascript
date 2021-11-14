

//Funciones en JS
//Es recomendable guardarlas en constantes para que no se puedan crear constantes o variables
//con el mismo nombre y de posibilidad a que ocurran errores.

//Función normal
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

//Función flecha
const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

//Funciones flechas abreviadas, sin return
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;



console.log(saludar('Pablo'))
console.log(saludar2('Pablo'))
console.log(saludar3('Pablo'))
//Aunque le pasamos el parametro, lo omite
console.log(saludar4('Pablo'))
console.log(saludar4())


//Función flecha con el return
const getUser = () => {
    return{
        uid: 'ABD123',
        username: 'PABLITO',
    }
};

//Función flecha abreviada sin el return, que al devolver varias cosas
//va dentro de () todo lo que devuelve
const getUser2 = () => ({
        uid: 'ABD123',
        username: 'PABLITO',
});

console.log(getUser())
console.log(getUser2())

const getUsuarioActivo = (nombre) => ({
        uid: 'ABD123',
        username: nombre,
});

console.log(getUsuarioActivo('Pablo'))
