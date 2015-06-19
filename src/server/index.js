var express = require('express'),
    path = require('path'),
    app = express(),
    port = 8090;

// For React components
require('node-jsx').install({harmony: true});
require('babel/register');

// Include static assets.
app.use(express.static(path.join(__dirname, 'public')));
// Mount the view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// Set up Routes handlers for the application
require(path.join(__dirname, 'routes/routes.js'))(app);

// Route not found -- Set 404
app.get('*', function(req, res) {
  res.json({
    'route': 'Sorry this page does not exist!'
  });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
