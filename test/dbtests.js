var assert = require("assert");
var _db = require("./../dbconnection.js");


describe('Db tests', function() {
	
	
	describe('dbconnection', function() {
		it('should connect and disconnect with dbconnection', function(done) {
			
			var dbconnection = new _db.ScaperDB.Connection("localhost/test");
			dbconnection.connect()
			.then(function (){
				console.log("connected");
				
				dbconnection.disconnect()
				.then(function (){
					console.log("success");
					done();
				},function (){
					
					console.log("fail disconnect");
					done();
				});
			}, function () {
				console.log("fail connect");
				
				done();
			});

		});
	});
	
	
	
}); 

