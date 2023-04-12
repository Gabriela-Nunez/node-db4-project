

const express = require('express');
const router = express.Router();

router.use('*', (req, res) => {
  res.json({ message: 'api is running 😊'})
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: 'Something went wrong in recipes router',
    err: err.message,
    stack: err.stack
  })
})

module.exports = router;