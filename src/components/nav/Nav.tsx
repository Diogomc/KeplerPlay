import '@/components/nav/nav.css';
import { useState } from 'react';
import { TbXboxX } from "react-icons/tb";

export const Nav = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);
    function handleOpenMenu() {
        setMenuOpened(!menuOpened)
    }

    
    const modal = () => {
        setModalOpened(true)
    }
    const handleCloseModal = () => {
        setModalOpened(false)
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
                    <li className="menu-item"><a href="#"><button className='btn-sign' onClick={modal}>Entrar</button></a></li>
                </ul>
            </div>
            <div className={`${modalOpened ? 'modal-opened' : 'modal-closed'}` }>
                
                <div className="modal-title-area">
                    <p className='modal-title'>Log-in</p>
                    <button className='btn-close-modal' onClick={handleCloseModal}><TbXboxX color='brown' size={25}/></button>
                </div>
                <form action="">
                    <div className="input-fields">
                        <input className='input-modal' type="text" placeholder='Email' required/>
                        <input className='input-modal' type="password" name="" id="" placeholder='Password' required/>
                    </div>
                    <div className="btn-login-area">
                        <a href="#" className='forgot-pass'>Esqueci minha senha</a>
                        <input className='btn-login' type="submit" value="Entrar" />
                    </div>
                </form>
            </div>
        </nav>
    )
}