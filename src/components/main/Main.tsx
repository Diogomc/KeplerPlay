import '@/components/main/main.css';

export const Main = () => {
    return (
        <div>
            <main>
                <div className="main-title">
                    <ul className='ul-main-movie'>
                        <li><h2 className='title-main-movie'>NADA DE NOVO NO FRONT</h2></li>
                        <li className='information-main-movie'>Inglês | A16 | 2h 28min | Drama | 2022</li>
                        <li className='information-main-movie'><button className='watch-button'><a href="https://www.adorocinema.com/filmes/filme-182953/" target='_blank'>Avaliações</a></button></li>
                    </ul>
                    <div>
                    </div>
                </div>
            </main>
        </div>
    )
}