import '@/components/nav/nav.css';
import { useState } from 'react';
export const Nav = () => {

    const [menuOpened, setmenuOpened] = useState(false);

    function handleOpenMenu(){
        setmenuOpened(!menuOpened)
    }

    return (
        <nav>


            <div className="menu">

                <header>
                    <button onClick={handleOpenMenu}>
                    <img className='mobile-menu-btn' src={`${menuOpened ? 'menuClosed.svg' : 'menu.svg'}`} alt="mobile-menu" />
                    </button>
                    <h1 className='site-name'>KeplerPlay</h1>
                </header>

                <ul className={`menu-ul ${menuOpened ? 'menu-opened' : ''}`}>
                    <li className="menu-item"><a href="#">Home</a></li>
                    <li className="menu-item"><a href="#">Sobre</a></li>
                    <li className="menu-item"><a href="#">Filmes</a></li>
                    <li className="menu-item"><a href="#"><button className='btn-sign'>Registrar-se</button></a></li>
                </ul>
            </div>
        </nav>
    )
}