 require('dotenv').config()

const result = dotenv.config()
 
if (result.error) {
  throw result.error
}
 
console.log(result.parsed)

var keys = require("./keys.js");

var axios = require("axios");
  concert.this = function() {

  }

  //http://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0

  //id: f1e2a355101ef09d3565d7053ba70f0
//capture user input (think process.argv3)
//"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
axios.get({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'json'
})
  .then(function (response) {
    // console.log(response);
  })
  .catch(function (error) {
    // console.log(error);
  });
 
   var moment = require('moment');
   moment().format();


var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// var spotify = new Spotify({
//   id:`905347c6f9c14c6e8028d655f4c2f2f5`,
//   secret: `cbfc6a5a09ab474a9daf6046a7db0bdc`
// });
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    // return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
