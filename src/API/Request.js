class Request{
    // class for handling API scripts
    constructor() {
        this.API_KEY = 'b334b5c19778e77289998941265b24ed';
        this.URL = {
            TV: '/tv',
            MOVIE: '/movie',
            VIDEOS: '/videos',
            TOP_RATED: '/top_rated',
            DISCOVER: '/discover',
            TRENDING: '/trending',
            ALL: '/all',
            WEEK: '/week',
        }
        this.QUERY = {
            API_KEY: '?api_key=' + this.API_KEY,
            NETWORK: '&with_networks=0',
            GENRE: '&with_genres=0',
            LANGUAGE: {
                ENGLISH: '&language=en-US',
            },
        }
        this.GENRE = {
            ACTION: '28',
            COMEDY: '35',
            HORROR: '27',
            ROMANCE: '10749',
            DOCUMENTARY: '99',
        }
        this.NETWORK = {
            NETFLIX: '213',
        }
        this.BASE_URL = 'https =//api.themoviedb.org/3';
        this.BASE_POSTER_PATH = 'https =//image.tmdb.org/t/p/original';
        this.YOUTUBE_BASE_URL = 'https =//www.youtube.com/watch?v=';
    }

    fetchVideoLinkById (movieId) {
        // http://api.themoviedb.org/3
        // /movie/157336/videos?api_key=###
        return `${
            this.URL.MOVIE + '/' + 
            movieId + 
            this.URL.VIDEOS + 
            this.QUERY.API_KEY
        }`
    }

}

export default Request;