const API_KEY = '9ea747356208bb92aba811d1dd3d1f73'
const DISCOVER_MOVIE = `/discover/movie?api_key=${API_KEY}&with_genres=`

const CONFIG = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    
    fetchActionMovies: `${DISCOVER_MOVIE}28`,
    fetchComedyMovies: `${DISCOVER_MOVIE}35`,
    fetchHorrorMovies: `${DISCOVER_MOVIE}27`,
    fetchRomanceMovies: `${DISCOVER_MOVIE}10749`,
    fetchAdventureMovies: `${DISCOVER_MOVIE}12`,
    fetchAnimationMovies: `${DISCOVER_MOVIE}16`,
    fetchCrimeMovies: `${DISCOVER_MOVIE}80`,
    fetchDramaMovies: `${DISCOVER_MOVIE}18`,
    fetchFamilyMovies: `${DISCOVER_MOVIE}10751`,
    fetchFantasyMovies: `${DISCOVER_MOVIE}14`,
    fetchHistoryMovies: `${DISCOVER_MOVIE}36`,
    fetchMusicMovies: `${DISCOVER_MOVIE}10402`,
    fetchMysteryMovies: `${DISCOVER_MOVIE}9648`,
    fetchScienceMovies: `${DISCOVER_MOVIE}878`,
    fetchTvMovies: `${DISCOVER_MOVIE}10770`,
    fetchThrillerMovies: `${DISCOVER_MOVIE}53`,
    fetchWarMovies: `${DISCOVER_MOVIE}10752`,
    fetchWesternMovies: `${DISCOVER_MOVIE}37`,
    fetchDocumentariesMovies: `${DISCOVER_MOVIE}99`,
    
    baseImage: 'https://image.tmdb.org/t/p/original/',
}

export default CONFIG;