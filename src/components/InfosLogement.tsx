import '../style/InfosLogement.css'

type InfosLogementProps = {
    titre: string,
    location: string,
    name: string,
    photoprofil: string
}

function InfosLogement({titre, location, name, photoprofil}: InfosLogementProps) {
    return (
        <section>
            <div className="infoslogement">
                <h2>{titre}</h2>
                <p>{location}</p>
            </div>
            <div className="infohost">
                <div>{name}</div>
                <img src = {photoprofil} alt="Profile Face" />
            </div>
        </section>
    )
}
export default InfosLogement