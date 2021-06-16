const express = require("express");
const router = express.Router();
const axios = require("axios");

//route '/api/v1'
router.get("/", async (req, res) => {
  try {
    const { id, title } = req.query;

    //call to api for movie info by id
    if (id) {
      const response = await axios({
        method: "get",
        url: `http://omdbapi.com/?apikey=${process.env.apiKey}&i=${id}`,
      });
      console.log(response.data);
      res.json(response.data);
    }
    //call to api for movie info by title
    else if (title) {
      const response = await axios({
        method: "get",
        url: `http://omdbapi.com/?apikey=${process.env.apiKey}&t=${title}`,
      });
      console.log(response.data);
      res.json(response.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/search", (req, res) => {
  const { title } = req.query;
  console.log(title);
  res.json(title);
});

module.exports = router;
