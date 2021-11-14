

//Desectructuración de arrays
const personajes = ['Goku','Vegeta','Trunks'];

//Primer elemento
const [ p1 ] = personajes;
//Tercer elemento
const [,,p3] = personajes;

console.log(p1);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//TAREA
//1. Por consola el primer valor
//2. 
const usaEstado= (valor) => {
    return [valor, ()=>{console.log('HOLA MUNDO')}];
}

const [nombre, setNombre] = usaEstado('Pablo');

console.log(nombre);
setNombre();
