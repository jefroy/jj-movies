import axios from 'axios';
import requests from "./requests";

// base url to make requests to tmdb //
const instance = axios.create({
    baseURL: requests.BASE_URL
});

export default instance;