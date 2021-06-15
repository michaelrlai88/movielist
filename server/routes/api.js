const express = require('express');
const db = require('../db/db');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const response = await axios({
      method: 'get',
      url: `http://omdbapi.com/?apikey=${process.env.apiKey}&t=inception`,
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
