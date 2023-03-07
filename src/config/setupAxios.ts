import axios from 'axios';
// ! Доваввить функции helper для экспортов городов
const API_URL = `https://api.open-meteo.com/v1`

const $api = axios.create({
   baseURL: API_URL
})

export default $api;