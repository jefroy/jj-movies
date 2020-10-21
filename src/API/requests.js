// tmdb api key
const API_KEY = 'b334b5c19778e77289998941265b24ed';
// base urls
const URL = {
    TV: '/tv',
    MOVIE: '/movie',
    VIDEOS: '/video',
    TOP_RATED: '/top_rated',
    DISCOVER: '/discover',
    TRENDING: '/trending',
    ALL: '/all',
    WEEK: '/week',
}
// queries
const QUERY = {
    API_KEY: '?api_key=' + API_KEY,
    NETWORK: '&with_networks=0',
    GENRE: '&with_genres=0',
    LANGUAGE: {
        ENGLISH: '&language=en-US',
    },
}
// genre ids
const GENRE = {
    ACTION: '28',
    COMEDY: '35',
    HORROR: '27',
    ROMANCE: '10749',
    DOCUMENTARY: '99',
}
// network ids
const NETWORK = {
    NETFLIX: '213',
}

const requests = {
    fetchTrending: `${URL.TRENDING + URL.ALL + URL.WEEK + QUERY.API_KEY + QUERY.LANGUAGE.ENGLISH}`,
    fetchNetflixOriginals: `${URL.DISCOVER + URL.TV + QUERY.API_KEY + QUERY.NETWORK + NETWORK.NETFLIX}`,
    fetchTopRated: `${URL.MOVIE + URL.TOP_RATED + QUERY.API_KEY + QUERY.LANGUAGE.ENGLISH}`,
    fetchActionMovies: `${URL.DISCOVER + URL.MOVIE + QUERY.API_KEY + QUERY.GENRE + GENRE.ACTION}`,
    fetchComedyMovies: `${URL.DISCOVER + URL.MOVIE + QUERY.API_KEY + QUERY.GENRE + GENRE.COMEDY}`,
    fetchHorrorMovies: `${URL.DISCOVER + URL.MOVIE + QUERY.API_KEY + QUERY.GENRE + GENRE.HORROR}`,
    fetchRomanceMovies: `${URL.DISCOVER + URL.MOVIE + QUERY.API_KEY + QUERY.GENRE + GENRE.ROMANCE}`,
    fetchDocumentaries: `${URL.DISCOVER + URL.MOVIE + QUERY.API_KEY + QUERY.GENRE + GENRE.DOCUMENTARY}`,
    BASE_URL: 'https://api.themoviedb.org/3',
    BASE_POSTER_PATH: 'https://image.tmdb.org/t/p/original',
    YOUTUBE_BASE_URL: 'https://www.youtube.com/watch?v=',
}

export default requests;