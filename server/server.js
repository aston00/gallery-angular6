const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));

app.route('/image/sections').get((req, res) => {
  res.send({
    sections: [
      'people',
      'women',
      'men',
      'love',
      'suits',
      'black',
      'rain',
      'streets',
      'forest',
      'nature',
      'sea',
      'water'
    ]
  })
});

app.listen(8000, () => {
  console.log('Server started!!!');
});
