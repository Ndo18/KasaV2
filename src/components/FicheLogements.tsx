import React, { useEffect, useState } from 'react'
import Noslogements from '../data/logements.json'
import { useParams } from 'react-router-dom'
import InfosLogement from './InfosLogement'
import TagsRates from './TagsRates'
import Slideshow from './Slideshow'
import Collapse from './Collapse'
import Error from '../pages/Error'
import { LogementsType } from '../TypeScript/LogementsType'

function FicheLogements() {
  const { id } = useParams()
  const [logementsfilter, setLogementsFilter] = useState<LogementsType>([])

  useEffect(() => {
    const logementsfilter = Noslogements.filter(logement => logement.id === id)
   
    setLogementsFilter(logementsfilter)
   
  }, [id])

  const ratingstars = [1, 2, 3, 4, 5]

  if(logementsfilter.length === 0) {
    return <Error/>
  }

  return (
    <div>
      {logementsfilter.map(logement => (
      <div key={logement.id}>
        <Slideshow key={logement.pictures}
        pictures = {logement.pictures}/>

        <InfosLogement key = {logement.id} 
        titre = {logement.title} 
        location = {logement.location}
        photoprofil = {logement.host.picture} 
        name = {logement.host.name}
        />
      
        <TagsRates key = {logement.host.name}
        tags = {<>
          {logement.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </>}
        rating = {ratingstars.map((num) => (
            <i key={num} className={Number(logement.rating) >= num ? "fa-solid fa-star colorate" : "fa-solid fa-star"}
></i>
        ))}
        hostname = {logement.host.name}
        hostpicture = {logement.host.picture}
        />
      
      <section className='collapseinfoslogement'>
        <Collapse key={logement.description} 
        titre="Description"
        description={logement.description}/>

        <Collapse key={logement.equipments} titre="Équipements"
        description = {<ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>}/>
        </section>
      </div>
      ))}
    </div>
  );
}

export default FicheLogements;
