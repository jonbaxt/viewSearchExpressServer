const axios = require('axios');
require('dotenv').config();
const API_KEY = process.env.API_KEY;

module.exports = {
    fetchMovies: (req, res) => {
        const userEntry = req.params.search;
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&query=${userEntry}&limit=10`,
            {})
            .then(response => {
                let movieList = [];
                for (let i=0; i<response.data.results.length; i++){
                    let movieInfo = {
                        "movie_id": response.data.results[i].id,
                        "title": response.data.results[i].title,
                        "poster_image_url": `https://image.tmdb.org/t/p/w500${response.data.results[i].poster_path}`, // (https://developers.themoviedb.org/3/getting-started/images)
                        "popularity_summary": `${response.data.results[i].popularity} out of ${response.data.results[i].vote_count}`, //(i.e. "{popularity} out of {vote_count}")
                    };
                    //If response is greater than 10 for some reason, only return 10 to the front.
                    if(i < 10) {
                        movieList.push(movieInfo);
                    }
                }
                res.status(200).send(movieList);
            })
            .catch(e => {
                console.log("You had an error while fetching your movies", e);
                res.status(400).send(e);
            });
    }
}