import axios from 'axios';
export const GET_MOVIES = 'GET_MOVIES';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
import {API_KEY} from '@env'
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5bfa169bb94febf1edb12d73f0424aa6');
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results,
        });
      } else {
        console.log("Unable to fetch");
      }
    };
  }
  catch (error) {


  }

};
