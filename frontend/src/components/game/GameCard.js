import { Link } from 'react-router-dom'


export const GameCard = ({
    id,
    nombre,
    desarrollador,
    descripcion,
    precio,
    genero,
}) => {

    const imagePath = `/assets/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ imagePath } className="card-img" alt={nombre} />
                    </div>
                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{desarrollador}</p>

                            {
                                ( descripcion !== genero ) 
                                    && <p className="text-muted">{ genero }</p>
                            }

                            <p className="card-text">
                                <small className="text-muted">{ precio }</small>
                            </p>

                            
                            <Link to={`/game/${id}`}>
                                Más...
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
