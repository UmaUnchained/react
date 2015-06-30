'use strict';

describe('Foo', function () {
  var React = require('react/addons');
  var Foo, component;

  beforeEach(function () {
    Foo = require('components/Foo.jsx');
    component = React.createElement(Foo);
  });

  it('should create a new instance of Foo', function () {
    expect(component).toBeDefined();
  });
});
