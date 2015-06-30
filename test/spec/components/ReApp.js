'use strict';

describe('ReApp', function () {
  var React = require('react/addons');
  var ReApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReApp = require('components/ReApp.js');
    component = React.createElement(ReApp);
  });

  it('should create a new instance of ReApp', function () {
    expect(component).toBeDefined();
  });
});
