var mongoose = require("mongoose");

describe('basic connect', function() {
		it('should connect and disconnect', function(done) {
			
			mongoose.connect('mongodb://localhost/test');
			var db = mongoose.connection;
			db.on('error', function() {assert.fail(); done();});
			db.once('open', function callback() {
				// yay!

				console.log("success");

				db.close(function() {
					console.log("successfully disconnected");
					done();
				});

			});
		});
	});