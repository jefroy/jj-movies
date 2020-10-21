class Requests{
    // has all the info for the api
    constructor() {
        this.BASE_URL = 'https://api.themoviedb.org/3';
        this.BASE_POSTER_PATH = 'https://image.tmdb.org/t/p/original';
        // tmdb api key
        this.API_KEY = 'b334b5c19778e77289998941265b24ed';
        // base urls
        this.URL = {
            TV: '/tv',
            MOVIE: '/movie',
            VIDEO: '/video',
            TOP_RATED: '/top_rated',
            DISCOVER: '/discover',
            TRENDING: '/trending',
            ALL: '/all',
            WEEK: '/week',
        };
        // queries
        this.QUERY = {
            API_KEY: '?api_key=' + this.API_KEY,
            NETWORK: '&with_networks=0',
            GENRE: '&with_genres=0',
            LANGUAGE: {
                ENGLISH: '&language=en-US',
            },
        };
        // genre ids
        this.GENRE = {
            ACTION: '28',
            COMEDY: '35',
            HORROR: '27',
            ROMANCE: '10749',
            DOCUMENTARY: '99',
        };
        // network ids
        this.NETWORK = {
            NETFLIX: '213',
        };
        this.fetchTrending = `${this.URL.TRENDING + this.URL.ALL + this.URL.WEEK + this.QUERY.API_KEY + this.QUERY.LANGUAGE.ENGLISH}`;
        this.fetchNetflixOriginals = `${this.URL.DISCOVER + this.URL.TV + this.QUERY.API_KEY + this.QUERY.this.NETWORK + this.NETWORK.NETFLIX}`;
        this.fetchTopRated = `${this.URL.MOVIE + this.URL.TOP_RATED + this.QUERY.API_KEY + this.QUERY.LANGUAGE.ENGLISH}`;
        this.fetchActionMovies = `${this.URL.DISCOVER + this.URL.MOVIE + this.QUERY.API_KEY + this.QUERY.GENRE + this.GENRE.ACTION}`;
        this.fetchComedyMovies = `${this.URL.DISCOVER + this.URL.MOVIE + this.QUERY.API_KEY + this.QUERY.GENRE + this.GENRE.COMEDY}`;
        this.fetchHorrorMovies = `${this.URL.DISCOVER + this.URL.MOVIE + this.QUERY.API_KEY + this.QUERY.GENRE + this.GENRE.HORROR}`;
        this.fetchRomanceMovies = `${this.URL.DISCOVER + this.URL.MOVIE + this.QUERY.API_KEY + this.QUERY.GENRE + this.GENRE.ROMANCE}`;
        this.fetchDocumentaries = `${this.URL.DISCOVER + this.URL.MOVIE + this.QUERY.API_KEY + this.QUERY.GENRE + this.GENRE.DOCUMENTARY}`;
    } // END CONSTRUCTOR


    
} // END CLASS

export default Requests;