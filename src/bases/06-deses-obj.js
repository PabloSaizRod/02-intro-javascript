

//Desectructuración
//o
//Asignación Desesctructurante

const persona = {
    nombre: 'Pablo',
    edad: 31,
    clave: 'IronMan',
    //rango: 'Soldado',
};

//Extraemos del objeto persona, el nombre y lo guardamos en una constante que se llama nombre
//const {nombre} = persona;
//Extraemos del objeto persona, el nombre y lo guardamos en una constante que se llama nombre2
//Con esto evitamos tener constantes duplicadas.
//const {nombre:nombre2} = persona;
//Extraemos del objeto persona, el nombre, edad y clave y lo guardamos en constantes con su mismo nombre
//const {nombre, edad, clave} = persona;

/* console.log(nombre);
console.log(edad);
console.log(clave);
console.log(nombre2); */

//Le estamos pasando el rango con un valor, si ya lo tiene el propio objeto persona, devolvera el que
//tiene, si no, el que le estamos pasando.
const usarContext = ({clave, nombre, edad, rango = 'Capitán'}) => {
    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.1212,
            lng: -15.3434,
        }
    }
}

//Obtenemos el nombreClave, los anios y del objeto que esta dentro de persona, que es el objeto latlng, 
//obtenemos los valores de lat y lng
const {nombreClave, anios, latlng:{lat, lng}} = usarContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
