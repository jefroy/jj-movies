import axios from 'axios';
import Requests from "./Requests";
const requests = new Requests();

// base url to make requests to tmdb //
const instance = axios.create({
    baseURL: requests.BASE_URL
});

export default instance;