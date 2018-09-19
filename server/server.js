/**
 * BASIC
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const sections = require('./sections/sections');

/**
 * MIDDLEWARES
 */
app.use(cors());
app.use(bodyParser.json());
app.use('/sections', sections);


app.route('/authorization').get((req, res) => {
  res.send(users);
}).post((req, res) => {
  res.send(users);
})


app.listen(8000, () => {
  console.log('Server started!!!');
});
