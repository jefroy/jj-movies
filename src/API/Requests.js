class Requests{
    // class for handling API scripts
    constructor() {
        this._API_KEY = 'b334b5c19778e77289998941265b24ed';
        this._URL = {
            TV: '/tv',
            MOVIE: '/movie',
            VIDEOS: '/videos',
            TOP_RATED: '/top_rated',
            DISCOVER: '/discover',
            TRENDING: '/trending',
            ALL: '/all',
            WEEK: '/week',
        }
        this._QUERY = {
            API_KEY: '?api_key=' + this._API_KEY,
            NETWORK: '&with_networks=0',
            GENRE: '&with_genres=0',
            LANGUAGE: {
                ENGLISH: '&language=en-US',
            },
        }
        this._GENRE = {
            ACTION: '28',
            COMEDY: '35',
            HORROR: '27',
            ROMANCE: '10749',
            DOCUMENTARY: '99',
        }
        this._NETWORK = {
            NETFLIX: '213',
        }
        this._BASE_URL = 'https://api.themoviedb.org/3';
        this._BASE_POSTER_PATH = 'https://image.tmdb.org/t/p/original';
        this._YOUTUBE_BASE_URL = 'https://www.youtube.com/watch?v=';
    }
    // start getters
    get API_KEY() {
        return this._API_KEY;
    }
    get URL() {
        return this._URL;
    }
    get QUERY() {
        return this._QUERY;
    }
    get GENRE() {
        return this._GENRE;
    }
    get NETWORK() {
        return this._NETWORK;
    }
    get BASE_URL() {
        return this._BASE_URL;
    }
    get BASE_POSTER_PATH() {
        return this._BASE_POSTER_PATH;
    }
    get YOUTUBE_BASE_URL() {
        return this._YOUTUBE_BASE_URL;
    }
    // end getters
    // start main methods
    fetchVideoLinkById (movieId) {
        // http://api.themoviedb.org/3
        // /movie/157336/videos?api_key=###
        const q = `${
            this._URL.MOVIE + '/' + 
            movieId + 
            this._URL.VIDEOS + 
            this._QUERY.API_KEY
        }`;
        return q;
    }

    fetchTrending(){
        const q = `${
            this._URL.TRENDING + 
            this._URL.ALL + 
            this._URL.WEEK + 
            this._QUERY.API_KEY + 
            this._QUERY.LANGUAGE.ENGLISH
        }`;
        return q;
    }

    fetchNetflixOriginals(){
        const q = `${
            this._URL.DISCOVER + 
            this._URL.TV + 
            this._QUERY.API_KEY + 
            this._QUERY.NETWORK + 
            this._NETWORK.NETFLIX
        }`;
        return q;
    }

    fetchTopRated(){
        const q = `${
            this._URL.MOVIE + 
            this._URL.TOP_RATED +
            this._QUERY.API_KEY +
            this._QUERY.LANGUAGE.ENGLISH
        }`;
        return q;
    }

    fetchActionMovies(){
        const q = `${
            this._URL.DISCOVER + 
            this._URL.MOVIE + 
            this._QUERY.API_KEY + 
            this._QUERY.GENRE + 
            this._GENRE.ACTION
        }`;
        return q;
    }

    fetchComedyMovies(){
        const q = `${
            this._URL.DISCOVER +
            this._URL.MOVIE +
            this._QUERY.API_KEY + 
            this._QUERY.GENRE + 
            this._GENRE.COMEDY
        }`;
        return q;
    }

    fetchHorrorMovies(){
        const q = `${
            this._URL.DISCOVER + 
            this._URL.MOVIE + 
            this._QUERY.API_KEY +
            this._QUERY.GENRE + 
            this._GENRE.HORROR}
        `;
        return q;
    }

    fetchRomanceMovies(){
        const q = `${
            this._URL.DISCOVER + 
            this._URL.MOVIE +
            this._QUERY.API_KEY +
            this._QUERY.GENRE +
            this._GENRE.ROMANCE
        }`;
        return q;
    }

    fetchDocumentaries(){
        const q = `${
            this._URL.DISCOVER + 
            this._URL.MOVIE + 
            this._QUERY.API_KEY +
            this._QUERY.GENRE +
            this._GENRE.DOCUMENTARY
        }`;
        return q;
    }

}

export default Requests;