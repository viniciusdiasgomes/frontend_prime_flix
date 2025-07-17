import axios from 'axios';

//Base da url : https://api.themoviedb.org/3/

// Chave da API :   e1d448d891e9dc53aeaf18264cd0aa46


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;