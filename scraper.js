var Q = require("q");
var http = require("http");
var db = require("./dbmodel.js");
var Scraper = Scraper || {}; ( function(Scraper) {

		Scraper.RequestPage = ( function() {

				function requester(url) {

					this.url = url;

				}


				requester.prototype = {

					get : function() {

						var deferred = Q.defer();

						console.log("get:");
						http.get(this.url, function(res) {
							console.log("Got response: " + res.statusCode);
							var body = "";
							res.on("data", function(chunk) {
								body += chunk;

							});
							res.on("end", function() {
								deferred.resolve(body);
							});
						}).on('error', function(e) {
							deferred.reject(e);
						});

						return deferred.promise;

					},
				};

				return requester;
			}());

		Scraper.Parser = ( function() {

				function parser() {

				}


				parser.prototype = {

					parse : function(page) {
						var re1 = '(So)';
						// Word 1
						var re2 = '( )';
						// Non-greedy match on filler
						var re3 = '(far)';
						// Word 2
						var re4 = '( )';
						// Non-greedy match on filler
						var re5 = '(\\d+)';
						// Integer Number 1

						var p = new RegExp(re1 + re2 + re3 + re4 + re5, ["i"]);
						var m = p.exec(page);

						return m[5];
					}
				};

				return parser;
			}());

		Scraper.FactorioScraper = function() {
			var req = new Scraper.RequestPage("http://www.factorio.com");
			var parser = new Scraper.Parser();
			req.get().then(function(page) {

				var number = parser.parse(page);
				console.log(number);

				var m = new db.Model();
				m.main().then(function() {

					console.log("connected...");

					var e = m.makeEntry(number).then(function(entry) {
						console.log(entry);
					});
				});
			});
		};
		return Scraper;
	}(Scraper || {}));

exports.Scraper = Scraper;
