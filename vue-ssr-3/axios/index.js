import axios from 'axios';

const myaxios = axios.create({
    // ...
})

myaxios.defaults.baseURL = 'http://localhost:1236';
myaxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

myaxios.interceptors.request.use(
    config => {
        return config;
    },
    err =>{
        console.log('请求的err', err);
        return Promise.reject(err);
    }
)
myaxios.interceptors.response.use(
    response => {
        return response.data;
    },
    err => {
        console.log('相应的err', err);
        return Promise.reject(err);
    }
)

export default myaxios;