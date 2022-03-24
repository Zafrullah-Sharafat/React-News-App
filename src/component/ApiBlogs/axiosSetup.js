import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines',
});
instance.defaults.headers.common['X-Api-Key'] = 'a469eb69d70047b59f01dd864109c708';

export default instance;
