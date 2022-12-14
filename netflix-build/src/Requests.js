const API_KEY = 'ae7015a9f362f0050e26dbcf86679e2b';

const requests ={
    fetchTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals :`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomenticMovies : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`

}
export default requests;