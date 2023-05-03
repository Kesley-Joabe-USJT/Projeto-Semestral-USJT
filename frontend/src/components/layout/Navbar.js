import { Link } from 'react-router-dom'
import { useContext } from 'react'

import styles from './Navbar.module.css'

import Logo from '../../assets/img/logo.png'

/* context */
import {Context} from '../../context/UserContext'

function Navbar() {

    const { authenticated, logout } = useContext(Context)

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_logo}>
            <a href="/">
                <img src={Logo} alt='Troque e Toque'/>
                <h2>Troque e Toque</h2>
                </a>
            </div>
            <ul>
                <li>
                    <Link to="/">Trocar</Link>
                </li>
                {authenticated ? (
                <>
                <li>
                    <Link to="/instrument/myinstruments">Meus Instrumentos</Link>
                </li>
                <li>
                    <Link to="/user/profile">Perfil</Link>
                </li>
                <li onClick={logout}>Sair</li>
                </>
                ) : (
                <>
                
                <li>
                    <Link to="/login">Entrar</Link>
                </li>
                <li>
                    <Link to="/register">Cadastrar</Link>
                </li>
                </>
                )}
                
            </ul>
        </nav>
    )
}

export default Navbar