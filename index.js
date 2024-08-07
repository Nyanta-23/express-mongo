const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1/shop_db')
  .then((res) => {
    console.log('Connnect to mongodb');

  }).catch((err) => {
    console.log(err);

  })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  res.send('Hello World')
});


app.listen(PORT, () => {
  console.log(`Shop app listening on http://127.0.0.1:${PORT}`);

});