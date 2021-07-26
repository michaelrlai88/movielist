const express = require('express');
const router = express.Router();
const db = require('../db');
const axios = require('axios');
const authorization = require('../middleware/authorization');

//route '/api/v1'

router.get('/', authorization, async (req, res) => {
  try {
    const response = await db.query('SELECT email FROM users where id = $1', [
      req.user_id,
    ]);

    res.json(response.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

router.get('/search', async (req, res) => {
  try {
    const { id, title } = req.query;

    //call to api for movie info by id
    if (id) {
      const response = await axios({
        method: 'get',
        url: `http://omdbapi.com/?apikey=${process.env.apiKey}&i=${id}`,
      });

      res.json(response.data);
    }
    //call to api for movie info by title
    else if (title) {
      const response = await axios({
        method: 'get',
        url: `http://omdbapi.com/?apikey=${process.env.apiKey}&t=${title}`,
      });

      res.json(response.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
