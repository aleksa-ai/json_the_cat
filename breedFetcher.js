let input = process.argv.slice(2);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  if (error) console.log('error:', error);
  //console.log('body:', body);
  const data = JSON.parse(body);
  if (data.length === 0) console.log('Data not found');
  //const descr = data.description;
  //console.log(data);
});

