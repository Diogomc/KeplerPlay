'use client'
import axios from "axios"
import { useEffect, useState } from "react"
import { movie } from '@/type/movie';

export const Home = () => {

    const apiKey = process.env.NEXT_PUBLIC_API_KEY; // Acessando a variável de ambiente no Next.js
    const [movies, setMovies] = useState<movie[]>([])

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: apiKey, // Usando a chave da API armazenada na variável de ambiente
                language: 'pt-br'
            }
        }).then(resp => {
            setMovies(resp.data.results)
            console.log(resp.data.results)
        })
    }

    return (
        <div className="card-movie">
            {movies.map((movie) =>
                <div key={movie.id}>
                    <h1 className="title">{movie.title}</h1>
                    <p>
                        <img className="img-movie" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    </p>
                    <div className="description">
                        <p className="text-average">{movie.vote_average}</p>
                        <p className="text-overview">{movie.overview}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
