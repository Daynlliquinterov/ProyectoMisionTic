import { game } from '../data/game';

export const getGameByDesarrollador = ( desarrollador ) => {

    const validDesarrollador = ['Games PC', 'Games PS4', 'Games Xbox'];
    if( !validDesarrollador.includes( desarrollador ) ) {
        throw new Error( `${ desarrollador } no es un desarrollador valido` );
    }

    return game.filter( game => game.desarrollador === desarrollador );
}
