

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // yay!
  
  console.log("success");
  
  db.close(function () {
  	console.log("successfully disconnected");
  	process.exit();
  });
});