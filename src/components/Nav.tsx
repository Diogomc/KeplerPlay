export const Nav = () => {

    function mobileMenu() {
        const menu = document.querySelector('menu-ul')
        menu?.classList.toggle('menu-opened')
    }

    return (
        <header>
            <nav>
                <div className="menu">
                <img className="hamb-menu" src="menu.png" alt="" />
                    <ul className="menu-ul">
                        <li>
                            <a href="#">
                                <img className="logo w-20 mr-40" src="logo.jpg" alt="" />
                            </a>
                        </li>
                        <li><a className="menu-item" href="#">Home</a></li>
                        <li><a className="menu-item" href="#">Sobre</a></li>
                        <li><a className="menu-item" href="#">Categorias</a></li>
                        <li><a className="menu-item" href="#">Filmes</a></li>
                        <li><a className="menu-item" href="#">Registrar-se</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}