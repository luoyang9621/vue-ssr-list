import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1236';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
    config => {
        return config;
    },
    err =>{
        console.log('请求的err', err);
        return Promise.reject(err);
    }
)
axios.interceptors.response.use(
    response => {
        return response.data;
    },
    err => {
        console.log('相应的err', err);
        return Promise.reject(err);
    }
)

export default axios;