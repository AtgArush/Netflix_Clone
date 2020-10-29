import React, {useEffect, useState} from 'react'
import axios from "./axios"
import requests from "./requests"
import "./banner.css"
function Banner() {

    const [movie, setmovie] = useState([])

    useEffect(() => {
        async function fetchdata () {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setmovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchdata()
    }, [])
    console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }

    return (
        
        <header className="banner"
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.original_title || movie?.title || movie?.name }</h1>
                <div className="banner__buttons">
                    <button className="banner__button">
                        Play
                    </button>
                    <button className="banner__button">
                        My List
                    </button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 200)}
                </h1>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Banner
