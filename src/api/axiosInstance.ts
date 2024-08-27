import axios from 'axios';

export const formulaOneApiInstance = axios.create({
  baseURL: 'https://ergast.com/api/f1/',
});
