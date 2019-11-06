const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');

app.use('/todos', postsRoute)

///Route

app.get('/', (req, res) => {
  res.send('kör')
})

// conect to db

mongoose.connect( process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('db running') )

app.listen(4000)