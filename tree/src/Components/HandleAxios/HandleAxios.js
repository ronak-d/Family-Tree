import axios from 'axios';

const baseURL = "http://localhost:3000/"

function handleAxios(url,method,data){
    console.log(url);
    return axios[method.toLowerCase()]
    (`${baseURL}${url}`,data);
}
export default handleAxios;

// http://localhost:3000/familyMember