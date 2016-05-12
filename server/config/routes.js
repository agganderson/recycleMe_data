var items = require("../controllers/items.js");
module.exports= function(app){
	//routes here
	app.get("/", function (req, res){
		items.index(req, res);
	});

	app.get("/:name", function (req, res){
		items.findOne(req,res, req.params.name);
	});
}