var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'curso_node_1'
	});
}



module.exports = function () {
	return connMySQL;
}