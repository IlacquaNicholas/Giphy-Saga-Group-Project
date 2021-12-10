const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
const myApiKey = process.env.API_KEY;

// return all favorite images
router.get('/', (req, res) => {
  console.log('in GET /favorites');
  const queryText = `SELECT * FROM "favorites"`;
  pool.query(queryText)
  .then ((dbRes)=>{
    res.send(dbRes.rows);
  }).catch((dbErr)=>{
    console.log('in GET dbErr',dbErr);
    
    res.sendStatus(500)
  })
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('in favorites post');
  const newFavorite = req.body;
  const queryText = `
  INSERT INTO "favorites" ("category", "url")
  VALUES ($1, $2)`;
  const queryValues = [
    newFavorite.category,
    newFavorite.url
  ];
  pool.query(queryText, queryValues)
  .then(() => { res.sendStatus(201); })
  .catch((err) => {
    console.log('Error in favorites post:', err);
    res.sendStatus(500);
  });
});

//select by favorite category
router.get('/:id', (req, res) => {
  const favCategory = req.params.id
  console.log('req.params:', req.params.id);
  if(favCategory == 'all'){
    //Initialize query text outside of the if statements next time?
    const queryText = ` 
      SELECT *
      FROM "favorites";`
    pool.query(queryText)
    .then((dbRes) => {
     res.send(dbRes.rows);
    }).catch((err) => {
     console.log('Error in favorites category GET', err);
    });
  }else{
    const queryText = `
      SELECT * 
      FROM "favorites"
      WHERE category='${favCategory}';
        `
  pool.query(queryText)
  .then((dbRes) => {
   res.send(dbRes.rows);
  }).catch((err) => {
   console.log('Error in favorites category GET', err);
  });
  };
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const favToDelete = req.params.id;
  console.log('req.params.id:', req.params.id);
  const queryText = `
  DELETE FROM "favorites"
  WHERE id='${favToDelete}'`
  pool.query(queryText)
  .then((dbRes) =>{
    res.sendStatus(200);
  }).catch((dbErr) =>{
    res.sendStatus(500);
    console.log('favorites delete dbErr:', dbErr);
  });
});

module.exports = router;
