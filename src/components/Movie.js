import { useState, useEffect } from "react"
import API_ENDPOINT from '../globals/api-endpoint'
import CONFIG from '../globals/config'
import './Movie.css'

function Movie(props){
    const [movies, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await API_ENDPOINT.get(props.url)
            setMovie(request.data.results)
        }
        fetchData()
    }, [props.url])

    return(
        <div className="pt-4">
            <h2 className="pl-6 pb-2 text-xl font-bold text-white">{props.title}</h2>
            <div className="row-poster">
                { 
                    movies.map(movie => {
                        return (
                            <img src={`${CONFIG.baseImage}${movie.poster_path}`} alt={movie.name} key={movie.id} className="img-poster" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Movie