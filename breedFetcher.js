const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(error, 'Data not found');
      } else {
        let breedDescription = data[0].description;
        callback(error, breedDescription);
      }
    }
  });
};

module.exports = { fetchBreedDescription };