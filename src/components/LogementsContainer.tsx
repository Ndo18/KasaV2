import Noslogements from '../data/logements.json'
import LogementsCard from './LogementsCard'
// import './stylesComponents/LogementsContainer.css'

function LogementsContainer () {
   
    return (
        <div className='logementsContent'>
        {
            Noslogements.map((logement) => (
            <LogementsCard key = {logement.id} id = {logement.id}
            titre = {logement.title}
            cover = {logement.cover}
            />
            ))
        }
        </div>
    )
}
export default LogementsContainer