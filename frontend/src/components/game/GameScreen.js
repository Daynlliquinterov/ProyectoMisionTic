import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getGameById } from '../../selectors/getGameById';

export const GameScreen = () => {

    const { GameId } = useParams();
    const navigate = useNavigate()

    const game = useMemo( () => getGameById(GameId), [ GameId ]);

    const handleReturn = () => {
        navigate( -1 );
    }


    if (!game) {
        return <Navigate to='/' />
    }
    
    const {
        id,
        nombre,
        desarrollador,
        descripcion,
        precio,
        genero
    } = game;

    const imagePath = `/assets/${ id }.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePath } 
                    alt={ nombre }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ game.nombre }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>genero:</b> { genero } </li>
                    <li className="list-group-item"> <b>Desarrollador:</b> { desarrollador } </li>
                    <li className="list-group-item"> <b>Precio:</b> { precio } </li>
                </ul>

                <h5 className="mt-3">Descripcion</h5>
                <p>{ descripcion }</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar
                </button>

            </div>

        </div>
    )
}
