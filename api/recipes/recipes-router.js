const express = require('express');
const router = express.Router();
const Recipe = require('./recipes-model');


router.get('/:recipe_id', (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
  .then(resource => {
    res.status(200).json(resource)
  })
  .catch(next)
})


router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: 'Something went wrong in recipes router',
    err: err.message,
    stack: err.stack
  })
})

module.exports = router;