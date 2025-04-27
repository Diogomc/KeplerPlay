import '@/components/main/main.css';
import {motion} from 'framer-motion'
export const Main = () => {
    return (
        <div>
            <main>
                <div className="main-title">
                    <motion.ul className='ul-main-movie'
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7}}
                    >
                        <li><h2 className='title-main-movie'>NADA DE NOVO NO FRONT</h2></li>
                        <li className='information-main-movie'>Inglês | A16 | 2h 28min | Drama | 2022</li>
                        <li className='information-main-movie'><button className='watch-button'><a href="https://www.adorocinema.com/filmes/filme-182953/" target='_blank'>Avaliações</a></button></li>
                    </motion.ul>
                    <div>
                    </div>
                </div>
            </main>
        </div>
    )
}