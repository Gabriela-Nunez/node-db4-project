const express = require('express');
const recipesRouter = require('./recipes/recipes-router')
const server = express();

server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Hello from sprint 14 Module 4 Project!</h2>`);
});

module.exports = server;