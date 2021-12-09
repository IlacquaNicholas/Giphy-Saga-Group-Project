const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
const myApiKey = process.env.API_KEY;

// return search results
router.post('/', (req, res) => {
    const searchString = req.body.search;
    console.log('req.data is:', req.body);
    console.log('req.data.search is:', req.body.search);
    console.log('searchString is:', searchString);
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=${searchString}&limit=15&offset=0&rating=g&lang=en`
    }).then((apiRes) => {
        console.log(apiRes);
        res.send(apiRes.data);
    }).catch((apiErr) => {
        console.log(apiErr);
        res.send(apiErr);
    });
  });

module.exports = router;

// https://api.giphy.com/v1/gifs/search?api_key=STT5xxFbVKdJJGDQNXB1DN92tRZXPIRh&
// q=popcorn&limit=1&offset=0&rating=g&lang=en

//STT5xxFbVKdJJGDQNXB1DN92tRZXPIRh

//https://api.giphy.com/v1/gifs/random?api_key=STT5xxFbVKdJJGDQNXB1DN92tRZXPIRh