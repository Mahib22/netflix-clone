import Movie from './scripts/components/Movie'
import CONFIG from './scripts/globals/config'
import Navbar from './scripts/components/Navbar'
import Footer from './scripts/components/Footer'

function App() {
  return (
    <div>
      <Navbar />

      <Movie title="Netflix Originals" url={CONFIG.fetchNetflixOriginals} />
      <Movie title="Trending" url={CONFIG.fetchTrending} />
      <Movie title="Top Rated" url={CONFIG.fetchTopRated} />
      <Movie title="Action" url={CONFIG.fetchActionMovies} />
      <Movie title="Comedy" url={CONFIG.fetchComedyMovies} />
      <Movie title="Horror" url={CONFIG.fetchHorrorMovies} />
      <Movie title="Romance" url={CONFIG.fetchRomanceMovies} />
      <Movie title="Adventure" url={CONFIG.fetchAdventureMovies} />
      <Movie title="Animation" url={CONFIG.fetchAnimationMovies} />
      <Movie title="Crime" url={CONFIG.fetchCrimeMovies} />
      <Movie title="Drama" url={CONFIG.fetchDramaMovies} />
      <Movie title="Family" url={CONFIG.fetchFamilyMovies} />
      <Movie title="Fantasy" url={CONFIG.fetchFantasyMovies} />
      <Movie title="History" url={CONFIG.fetchHistoryMovies} />
      <Movie title="Music" url={CONFIG.fetchMusicMovies} />
      <Movie title="Mistery" url={CONFIG.fetchMysteryMovies} />
      <Movie title="Science" url={CONFIG.fetchScienceMovies} />
      <Movie title="Thriller" url={CONFIG.fetchThrillerMovies} />
      <Movie title="TV Movies" url={CONFIG.fetchTvMovies} />
      <Movie title="War" url={CONFIG.fetchWarMovies} />
      <Movie title="Western" url={CONFIG.fetchWesternMovies} />
      <Movie title="Documenter" url={CONFIG.fetchDocumentariesMovies} />

      <Footer />
    </div>
  );
}

export default App;
