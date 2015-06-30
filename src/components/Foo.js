'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');
var Foo = React.createClass({
    getInitialState: function() {
        return {count: 1};
    },
    add:function(){
        this.setState({count: this.state.count + 1});
    },
    render: function() {
        var items = [];
        for (var i = 0; i < this.state.count; i++) {
            items.push(<li><input type="text" placeholder="change me!" /></li>);
        }
        return (
            <ul>
                {items}
                <input type="button" value="Add an item" onClick={this.add} />
            </ul>
        );
    }
});
 
React.renderComponent(
    <div>
        
        <Foo />
   </div>, document.getElementById('example1'));


module.exports = Foo;
