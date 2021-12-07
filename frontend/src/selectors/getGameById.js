import { game } from '../data/game';


export const getGameById = ( id = '' ) => {
    console.log('getGameById called');
    return game.find( game => game.id === id );
}