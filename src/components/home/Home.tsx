'use client'
import '@/components/home/home.css'
import axios from "axios"
import { useEffect, useState } from "react"
import { movie } from '@/type/movie';

export const Home = () => {

    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    const [movies, setMovies] = useState<movie[]>([])
    const [clickImageMovie, setClickImageMovie] = useState(false);

    function handleImageMovie(){
        setClickImageMovie(!clickImageMovie)
        console.log("funcionou")
    }

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: apiKey,
                language: 'pt-br'
            }
        }).then(resp => {
            setMovies(resp.data.results)
            console.log(resp.data.results)
        })
    }

    return (
        <div className="container-home-movies">
            
            {movies.map(item => (

                <div key={item.id} className="movies">
                        <img onClick={handleImageMovie} className={`movie-poster ${clickImageMovie ? 'movie-clicked' : ''}`} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />

                    <div className='movies-data'>
                        <h2 className='movie-title'>{item.title}</h2>
                        <p className='rate'>{item.vote_average}</p>
                        <p className='overview'>{item.overview}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}
