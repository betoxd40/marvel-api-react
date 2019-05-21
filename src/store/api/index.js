import axios from 'axios'

const apiUrl = process.env.API_URL || 'https://gateway.marvel.com/v1/'
const apiKey = process.env.API_KEY || '285f11515fead7c3ff0a75762a7c27e0'
const ts = '1';
const hash = 'd5d21cabe4213c4cc76375e926ecce4d';
const limit = 10;

/**
 * GET /public/characters
*/
const getSuperheroes = () => axios.get(`${apiUrl}public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=${limit}`);

export {
    getSuperheroes,
}