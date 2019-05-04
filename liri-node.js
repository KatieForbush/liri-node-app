require('dotenv').config();
//getting the keys from the other page
var keys = require("./keys.js");
//grabbing moment; moment("2019-05-10T20:00:00").format();
var moment = require('moment');
//getting the spotify api
var Spotify = require('node-spotify-api');
//getting the keys from the other page
var spotify = new Spotify(keys.spotify);

//getting axios
var axios = require("axios");

var query = process.argv[3];
var action = process.argv[2];

if (action === "concert-this") {
  concertThis(query);
} else if (action === "spotify-this-song") {
  spotifyThisSong(query);
} else if (action === "movie-this") {
  movieThis(process.argv.slice(3).join(' '));
};

function concertThis(artist) {
  //if (process.argv[2] === "concert-this") {
  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
      console.log(response.data[0].venue.name);
      console.log(response.data[0].venue.city);
      console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"));
    })
    .catch(function (error) {
      //console.log(error);
    });
  // }
}
function movieThis(movie) {
  // console.log("MOVIE", movie);
  axios.get("http://www.omdbapi.com/?t=" + movie
  + "&apikey=trilogy")
    .then(function (response) {
      // console.log("-----------------\n",  response.data);
      console.log(response.data.Title),
      console.log(response.data.Year);
      var tomatoes = response.data.Ratings.find(o => o.Source === 'Rotten Tomatoes');
      console.log(tomatoes.Value);
      console.log(response.data.Country);
      console.log(response.data.Language);
      console.log(response.data.Plot);
      console.log(response.data.Actors);
    })
    .catch(function (error) {
      console.log(error);
    })
}

function spotifyThisSong(trackName) {
  spotify.search({
    type: 'track',
    query: trackName
  },
    function (err, data) {
      if (err) {
        // return console.log('Error occurred: ' + err);
      }
      console.log(data.tracks.items);
    });
}
