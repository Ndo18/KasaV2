import { Link } from 'react-router-dom'
// import "./stylesComponents/LogementsCard.css"

type LogementsCardType = {
    id: string,
    titre: string,
    cover: string
}

function LogementsCard({id, titre, cover}: LogementsCardType) {

    return (
        <div className="logementcard" key={ id }>
            <Link className="logementlink" to={`/Fiche-logement/${id}`} state={{logementid : id}}>
                <img src={ cover } alt="" />
                <span><p>{ titre }</p></span>
            </Link>
        </div>
    )
}
export default LogementsCard