'use strict';

var React = require('react');

var ReactApp = React.createClass({
  render: function() {
    return <h1>Hello World!</h1>;
  }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;