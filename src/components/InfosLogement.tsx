// import './stylesComponents/InfosLogement.css'

function InfosLogement(props) {
    return (
        <section>
            <div className="infoslogement">
                <h2>{props.titre}</h2>
                <p>{props.location}</p>
            </div>
            <div className="infohost">
                <div>{props.name}</div>
                <img src = {props.photoprofil} alt="Profile Face" />
            </div>
        </section>
    )
}
export default InfosLogement