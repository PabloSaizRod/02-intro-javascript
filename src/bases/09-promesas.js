import { getHeroeById } from "./08-import-export";
//Promesas
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         const heroe = getHeroeById(2);
//         // reject('No se ha encontrado el heroe');
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Then de la promesa ', heroe);
// })
// .catch( err=> console.warn(err));

const getHeroesByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //Tarea
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            }else{
                reject('No se ha encontrado el heroe');
            }
        }, 2000);
    });
}

getHeroesByIdAsync(10)
    //.then( heroe => console.log('Heroe: ', heroe))
    .then(console.log)
    .catch(console.warn)