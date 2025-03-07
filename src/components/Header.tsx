import { NavLink } from 'react-router-dom'
import '../style/Header.css'


 function Header() {
        return (
        <div className="header">
            <nav>
                <NavLink to="/"><img src={'logokasa.png'} alt='Logo Kasa' className='logokasa' /></NavLink>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/Apropos">À propos</NavLink></li>
                </ul>
            </nav>
        </div>
        )
    }
    export default Header