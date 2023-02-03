import axios from "axios"

const endpoint = `https://api.remotebootcamp.dev/api/users/login`

const userLogIn = (payload) => {

  const config = {
    method: "POST",
    data: payload,
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
    'X-RapidAPI-Key': '219895c7c2msh60b15435f51b095p13232ajsn053ddcf635f4',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

return axios.request(config)
}

const netflixService = { userLogIn, getMovies }

export default netflixService;
