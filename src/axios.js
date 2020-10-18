import axios from 'axios';

// base url to make requests to tmdb //
const instance = axios.create({
    baseURL: 'https://www.themoviedb.org/3'
});

export default instance;