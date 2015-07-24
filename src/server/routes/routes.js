/*import React from 'react/addons';
var ReactApp = React.createFactory(require('../components/ReactApp'));*/

/*
module.exports = function(app) {

  app.get('/', function(req, res){
    // React.renderToString takes your component
    // and generates the markup
    var reactHtml = React.renderToString(ReactApp({}));
    // Output html rendered by react
    // console.log(reactHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
  });

};*/

var React = require('react');
var {DefaultRoute, NotFoundRoute, Route} = require('react-router');

module.exports = [
  <Route path="/" handler={require('../components/ReactApp')}>
  </Route>
];
