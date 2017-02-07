import axios from 'axios';

const API_KEY = '27df1db40aff3878ee55a7bd9bb06e3b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},sk`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}