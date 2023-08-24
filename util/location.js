const axios = require('axios');

const HttpError = require('../models/http-error')
const apiKey = process.env.API_KEY
async function getCoordinates(address){
  let url = `https://geocode.search.hereapi.com/v1/geocode?q=${address}&apiKey=${apiKey}`

  const response = await axios.get(url)
  console.log(response)
  
  const data = response.data;
 if(!data.Response)
   {
     const error = new HttpError('could not find the locaton for given address',422)
    throw error
  }
  
  //console.log(data.Response.View[0].Result[0].Location.DisplayPosition.Latitude)
 // console.log(data.Response.View[0].Result[0].Location.DisplayPosition.Longitude)
 console.log(data.Response) 
 let lat = data.items[0].position.lat;
 let lang = data.Response.items[0].position.lng;
 let coordinates = {
  Latitude:lat,
  Longitude:lang
 }

 
  return coordinates
}

module.exports = getCoordinates;
