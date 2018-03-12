var db = require('./db');
module.exports = {
	insert: function(user, callback){
		var sql = "INSERT INTO login (null, ?, ?, ?)";
		var param = [user.userName, user.password];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	}
};