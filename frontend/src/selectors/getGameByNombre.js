import { game } from '../data/game';


export const getGameByNombre = ( nombre = '') => {
    
    if ( nombre.length === 0 ) {
        return [];
    }

    nombre = nombre.toLowerCase();
    return game.filter(game => game.nombre.toLowerCase().includes(nombre));

}