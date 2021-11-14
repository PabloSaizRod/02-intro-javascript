//import { heroes } from '../data/heroes'
// import heroes, {owners} from '../data/heroes'
import heroes from '../data/heroes'
//import {heores, owners} from '../data/heroes'

//Import
//console.log(heroes);

export const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id===id);
}

//console.log(getHeroeById(5));

export const getHeroesByOwner = (owner) =>{
    return heroes.filter(heroe => heroe.owner===owner);    
}

//console.log(getHeroesByOwner('DC'));
//console.log(owners);
