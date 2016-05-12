var mongoose = require('mongoose');
var Item = mongoose.model('Item');

module.exports = {
	index: function(req, res){
		Item.find({}, function(err, items){
			if(err){
				console.log('Idk why but you didn"t get that item info');
			}
			else{
				console.log('Good job, you got that info');
				res.json(items);
			}
		});
	},
	create: function(req, res){
		var newItem = new Item(req.body);
		newItem.save(function(err, results){
			if(err){
				console.log('Did not save');
			}
			else {
				console.log('Saved');
				res.redirect('/');
			}
		});
	},
	findOne: function(req, res, name){
		Item.findOne({name:name}, function(err, results){
			if(err){
				console.log('Did not get that one item');
			}
			else {
				console.log('Got it');
				res.json(results);
			}
		});
	}
};