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
      <Movie title="Documenter" url={CONFIG.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default App;
