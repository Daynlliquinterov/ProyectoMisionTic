import { useMemo } from 'react';

import { GameCard } from './GameCard';
import { getGameByDesarrollador } from '../../selectors/getGameByDesarrollador';

export const GameList = ({ desarrollador }) => {

    const game = useMemo( () => getGameByDesarrollador( desarrollador ), [ desarrollador ] );

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                game.map( game => (
                    <GameCard 
                        key={ game.id } 
                        { ...game }
                    />
                ))
            }
        </div>
    )
}
