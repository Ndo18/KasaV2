import { Link } from 'react-router-dom'
import "../style/LogementsCard.css"

//Type des props
type LogementsCardType = {
    id: string,
    titre: string,
    cover: string
}

function LogementsCard({id, titre, cover}: LogementsCardType) {
    //Liens vers les pages détaillées des logements
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