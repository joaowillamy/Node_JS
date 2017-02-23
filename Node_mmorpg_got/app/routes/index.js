module.exports = function(application){
	application.get('/', function(req, res){
		res.send("oi");
	});

	application.post('/autenticar', function(req, res){
		
	});
}