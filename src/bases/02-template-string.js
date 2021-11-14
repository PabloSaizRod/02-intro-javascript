


const nombre = 'Pablo';
const apellido = 'Saiz';

const nombreCompleto = ` Hola ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola Mundo '+ nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);