var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://sainttobs:H@rmankardon123@ds139614.mlab.com:39614/shopping-cart');

var connection = mongoose.connection;
connection.on('connected', function(){
    console.log('connected to db');
});

var products = [
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png',
		title: 'Grand_Theft_Auto_V',
		description: 'Very Awesome Game!!!!!!',
		price: 50
	}),
	new Product({
		imagePath: 'https://images-na.ssl-images-amazon.com/images/I/81USj-o7CvL._AC_SL1500_.jpg',
		title: 'Fortnite',
		description: 'Very Interesting Game!!!!!!',
		price: 70
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/The_Elder_Scrolls_V_Skyrim_cover.png/220px-The_Elder_Scrolls_V_Skyrim_cover.png',
		title: 'The_Elder_Scrolls_V_Skyrim',
		description: 'Incredible Game!!!!!!',
		price: 80
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Monster_Hunter_World_cover_art.jpg/220px-Monster_Hunter_World_cover_art.jpg',
		title: 'Monster_Hunter_World',
		description: 'Very Awesome Game!!!!!!',
		price: 100
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/FIFA18cover.png/220px-FIFA18cover.png',
		title: 'FIFA18',
		description: 'Very Awesome Game!!!!!!',
		price: 150
	})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function (err, result) {
		done++;
		if (done === products.length){
			exit();
		}
	});
}


function exit () {
	mongoose.disconnect();
}
