'use strict';

var ReApp = require('./ReApp');
var Foo = require('./Foo');
var Poster = require('./Poster');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ReApp}>
    <Route name="/" handler={ReApp}/>
  </Route>
);
Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
