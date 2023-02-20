const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

  let sqlParams = req.params.id
  const genreQuery = `SELECT "movies".title, "genres".name FROM "movies"
  JOIN "movies_genres" ON "movies_genres".movie_id = "movies"."id"
  JOIN "genres" ON "movies_genres".genre_id  =  "genres"."id" 
  WHERE "movies"."id" = $1;`;


  pool.query(genreQuery, [sqlParams])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});


module.exports = router;