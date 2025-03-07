import { Link } from 'react-router-dom'
import '../style/Error.css'

function Error() {
    return (
        <div className='Errorpage'>
            <h1>404</h1>
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <span><Link to='/' className='homereturn'>Retourner sur la page d’accueil</Link></span>
        </div>
    )
}
export default Error