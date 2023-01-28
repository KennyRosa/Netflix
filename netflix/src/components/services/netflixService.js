import axios from "axios"

const endpoint = `https://api.remotebootcamp.dev/api/users/login`

const userLogIn = () => {

  const config = {
    method: "POST",
    url: endpoint,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };
  
  return axios(config);
};


const getMovies = () => {
  const config = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

return axios.request(config)
}




const netflixService = { userLogIn, getMovies }

export default netflixService;
