import{useEffect, useState} from "react"
import {get } from "../data/httpClient"
import {MovieCard} from "../components/MovieCard"
export function ContextMovieCard(){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            setMovies(data.results)
        })
    }, []);

    return(
        <ul>
            {movies.map((movie)=>{
                <MovieCard />
            })}
        </ul> );
}