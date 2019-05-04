require('dotenv').config();

var keys = require("./keys.js");

var axios = require("axios");
//http://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0

//id: f1e2a355101ef09d3565d7053ba70f0
//capture user input (think process.argv3)
//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

var query = process.argv[3];

//if (concert) {call concert func thisJerk(query)} elseif (spotify {call spotify})

function thisJerk(artist) {
// if (process.argv[2] === "concert-this") {
axios.get(
  "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp",
)
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

var moment = require('moment');
// moment("2019-05-10T20:00:00").format();

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// var spotify = new Spotify({
//   id:`905347c6f9c14c6e8028d655f4c2f2f5`,
//   secret: `cbfc6a5a09ab474a9daf6046a7db0bdc`
// }); 
spotify.search({
  type: 'track',
  query: 'my friends over you'
},
  function (err, data) {
    if (err) {
      // return console.log('Error occurred: ' + err);
    }
    console.log(data.track.artist);
  });
