var express = require('express'),
    path = require('path'),
    app = express(),
    port = 8090;


// Set up Routes handlers for the application
require(__dirname + '/../app/routes/routes.js')(app);

// Route not found -- Set 404
app.get('*', function(req, res) {
  res.json({
    "route": "Sorry this page does not exist!"
  });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
