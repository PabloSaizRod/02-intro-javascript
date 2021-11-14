


const persona = {
    nombre: 'Pablo',
    apellido: 'Saiz',
    edad: 45,
    direccion: {
        ciudad: 'Sevilla',
        cp: 41010,
        lat: 14.3232,
        lng: 34.1212,
    }
};

//console.table({persona});
console.log({persona});

const persona2 = {...persona};
persona2.nombre = 'Javi';

console.log({persona});
console.log({persona2});