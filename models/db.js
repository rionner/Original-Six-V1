var mongoose = require('mongoose');

var connectionString = "mongodb://localhost/teams_database";
mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log("[MongoDB] Connected");
});

mongoose.connection.on('disconnected', function(){
  console.log("[MongoDB] Disconnected!");
});

mongoose.connection.on('error', function(error){
  console.log("[MongoDB] Error! See below:");
  console.log(error);
});
