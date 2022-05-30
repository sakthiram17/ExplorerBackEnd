const axios = require('axios');

const HttpError = require('../models/http-error')
const apiKey = process.env.API_KEY
async function getCoordinates(address){
  let url = `https://geocoder.ls.hereapi.com/6.2/geocode.json?apiKey=${apiKey}&searchtext=${address}`
  let url1 = "https://geocode.ls.hereapi.com/6.2/geocode.json?searchtext="+address+"&gen=9&apiKey="+apiKey;

  const response = await axios.get(url)

  const data = response.data;
 if(!data.Response)
   {
     const error = new HttpError('could not find the locaton for given address',422)
    throw error
  }
  //console.log(data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
 // console.log(data.Response.View[0].Result[0].Location.DisplayPosition.Longitude)
  let coordinates = data.Response.View[0].Result[0].Location.DisplayPosition;
 
  return coordinates
}

module.exports = getCoordinates;