import { NavLink } from 'react-router-dom'


 function Header() {
        return (
        <div className="header">
            <nav>
                {/* <img src={`${process.env.PUBLIC_URL}/logokasa.png`} alt='Logo Kasa' className='logokasa' /> */}
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/Apropos">À propos</NavLink></li>
                </ul>
            </nav>
        </div>
        )
    }
    export default Header