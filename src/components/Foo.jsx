'use strict';

var React = require('react/addons');
var Foo = require('./Foo');

require('styles/Foo.css');

var Foo = React.createClass({

  render: function () {
    return (
        <div className="Foo">
          <p>Content for Foo</p>
        </div>
      );
  }
});

module.exports = Foo; 

