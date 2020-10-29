import React, {useState, useEffect} from 'react'
import axios from "./axios"
import "./row.css"
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"
function Row({title, fetchUrl, isLargeRow}) {

    const [TrailerUrl, setTrailerUrl] = useState("")
    const [TrailerActive, setTrailerActive] = useState(false)
    const [movies, setmovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie, index) => {
        console.log(index)
        if (TrailerActive) {
            setTrailerActive(false)
        } else{
            setTrailerActive(true)
        }
        
        var movie_title = movie.original_title || movie.original_name
        // if(movie.original_title){
        //     var movie_title = `${movie.original_title}`
        // }

        console.log("in handle click")
        console.log(movie_title)
        if(TrailerUrl){
            setTrailerUrl('')
        } else{
            // movieTrailer(movie?.name || "")
            // .then(url => {
            //     // const urlParams =new URLSearchParams( new URL(url).search);
            //     // setTrailerUrl(urlParams.get("v"));
            //     console.log("SUCCESS")
            // })
            // .catch((error) => {
            //     console.log(error)
            //     console.log("Not found ============")
            // })

            movieTrailer( `${movie_title}` ).then( url => {
                console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams)
                setTrailerUrl(urlParams.get("v"))
            } ).catch( console.error )
        }
    }

    return (
        <div className = "row">
            <h3>{title}</h3>
            <div className="row__posters">
                {movies.map((movie, index)=>{
                    // console.log(movie)
                    return <img src = {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    key = {movie.id}
                    alt={movie.name} 
                    className = {`row__poster ${isLargeRow && "row__posterLarge"} `}
                    onClick = {()=> handleClick(movie, index)}
                    />
                })}
            </div>
            {TrailerUrl && <YouTube videoId={TrailerUrl} opts = {opts} />}
        </div>
    )
}

export default Row
