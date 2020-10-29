const APIKEY = "f277d2f94c8f31f7696bd7b6acc4ac06"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchAction: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}

export default requests;