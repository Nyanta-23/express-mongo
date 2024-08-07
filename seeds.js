const mongoose = require('mongoose');

const Product = require('./models/product');


mongoose.connect('mongodb://127.0.0.1/shop_db')
  .then((res) => {
    console.log('Connnect to mongodb');

  })
  .catch((err) => {
    console.log(err);

  });

const seedProducts = [
  {
    "name": "Kemeja Flanel",
		"brand": "Hollister",
		"price": 750000,
		"color": "biru muda",
		"category": "Baju",
  },
  {
    "name": "ASD",
		"brand": "Holligan",
		"price": 712350000,
		"color": "hijo muda",
		"category": "Celana",
  },
  {
    "name": "DSA",
		"brand": "ZXC",
		"price": 7520000,
		"color": "kuning muda",
		"category": "Jaket",
  },
  {
    "name": "JKL",
		"brand": "ZXC",
		"price": 520000,
		"color": "hitam muda",
		"category": "Aksesoris",
  },
]

Product.insertMany(seedProducts)
.then((res) => {
  console.log(res);
  
})
.catch((err) => {
  console.log(err);
  
});