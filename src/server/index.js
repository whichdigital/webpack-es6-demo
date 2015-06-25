var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8095;
var React = require('react');
var Router = require('react-router');
var routes;

// For React components
require('node-jsx').install({
  harmony: true,
  extension: '.jsx'
});
require('babel/register');

routes = require(path.join(__dirname, 'routes/routes'));

// Include static assets.
app.use(express.static(path.join(__dirname, 'public')));
// Mount the view path
app.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// Set up Routes handlers for the application
/*require(path.join(__dirname, 'routes/routes.js'))(app);

// Route not found -- Set 404
app.get('*', function(req, res) {
  res.json({
    'route': 'Sorry this page does not exist!'
  });
});*/
app.use(function(req, res, next) {
  var router = Router.create({location: req.url, routes: routes});
  router.run(function(Handler, state) {
    var html = React.renderToString(Handler);

    return res.render('index.ejs', {html: html});
  })
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
