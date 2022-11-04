import axios from 'axios';

const baseURL = "http://localhost:3000/"

function handleAxios(url,method,data){
    return axios[method.toLowerCase()]
    (`${baseURL}${url}`,data);
}

export default handleAxios;