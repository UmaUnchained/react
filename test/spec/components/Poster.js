'use strict';

describe('Poster', function () {
  var React = require('react/addons');
  var Poster, component;

  beforeEach(function () {
    Poster = require('components/Poster.jsx');
    component = React.createElement(Poster);
  });

  it('should create a new instance of Poster', function () {
    expect(component).toBeDefined();
  });
});
