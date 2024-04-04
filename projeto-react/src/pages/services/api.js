//BASE DA API:  https://api.themoviedb.org/3/
//URL: 

import axios from 'axios';//Importando axios --> usado para API

const api = axios.create( {
    baseURL: 'https://api.themoviedb.org/3/'//Padronizando nossa base da API
})

export default api;