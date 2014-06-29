var Q = require("q");
var db = require("./../dbmodel.js");

describe('dbmodel', function() {
	it('should create an entry and find', function(done) {
		try
			{
		 this.timeout(3500);
		var end = function() {
			console.log("end");
			m.exit().then(function() {
				done();
			});
		};
		
		var m = new db.Model();
		m.main().then(function() {

			console.log("connected...");
			
			var e = m.makeEntry(200).then(function (entry){
				
				console.log("entry created..."+ e);
			
				entry.findSimilarTypes(function(err, entries) {
					if (err) {
						assert.fail();
						end();
					}
					console.log(entries);
					
					entries.forEach(function (item){
						m.Entry.remove({_id: item._id}).exec();
					});
					
					end();
				});
				
			}, function (err){
				console.log(err);
				end();
			});

			

		}, function (error){
			console.log(error);
			console.log("failed to main");
			end();
		});
		}
		catch(e)
		{
			console.log(e);
			assert.fail();
			done();
		}
	});
}); 