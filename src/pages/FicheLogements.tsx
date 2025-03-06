import { useEffect, useState } from 'react';
import Noslogements from '../data/logements.json';
import { useParams } from 'react-router-dom';
import InfosLogement from '../components/InfosLogement';
import TagsRates from '../components/TagsRates';
import Slideshow from '../components/Slideshow';
import Collapse from '../components/Collapse';
import Error from './Error';
import { LogementsType } from '../TypeScript/LogementsType';

function FicheLogements() {
  const { id } = useParams();
  const [logementsfilter, setLogementsFilter] = useState<LogementsType>([]); // Typage en tableau

  useEffect(() => {
    const filteredLogements = Noslogements.filter((logement) => logement.id === id);
    setLogementsFilter(filteredLogements);
  }, [id]);

  const ratingstars = [1, 2, 3, 4, 5];

  // Si aucun logement n'est trouvé, afficher l'erreur
  if (logementsfilter.length === 0) {
    return <Error />;
  }

  return (
    <div>
      {logementsfilter.map((logement) => (
        <div key={logement.id}> {/* Clé unique pour chaque logement dans la liste */}
          <Slideshow pictures={logement.pictures} /> {/* Pas de besoin de clé ici */}
          
          <InfosLogement
            titre={logement.title}
            location={logement.location}
            photoprofil={logement.host.picture}
            name={logement.host.name}
          />

          <TagsRates
            tags={ // Les tags sont passés en JSX
              <>
                {logement.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </>
            }
            rating={ratingstars.map((num) => (
              <i
                key={num}
                className={Number(logement.rating) >= num ? "fa-solid fa-star colorate" : "fa-solid fa-star"}
              />
            ))}
            hostname={logement.host.name}
            hostpicture={logement.host.picture}
          />

          <section className='collapseinfoslogement'>
            <Collapse
              titre="Description"
              description={logement.description}
            />
            <Collapse
              titre="Équipements"
              description={
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li> // Clé unique pour chaque élément
                  ))}
                </ul>
              }
            />
          </section>
        </div>
      ))}
    </div>
  );
}

export default FicheLogements;
