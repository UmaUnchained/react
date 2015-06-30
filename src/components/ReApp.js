'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
// CSS
require('normalize.css');
require('../styles/main.css');

var ReApp = React.createClass({
        getInitialState: function() {
          return {
            pImage: []
          };
        },

        componentDidMount: function() {
          var self = this;
          $.get(this.props.source, function(result) {
            var collection = result.data.children;
            if (this.isMounted()) {
              this.setState({
                pImage: collection
              });
            }
          }.bind(this));
        },

        render: function() {
          var image;
        var images = this.state.pImage || [];
          return (
            <div>
              Images: 
              {images.map(function(image){
                  return <img src={image.data.thumbnail} height="500px" width="500px" />
              })}
            </div>
          );
        }
      });

    React.render(
    <ReApp source="https://www.reddit.com/r/pics/top/.json" />,
      document.getElementById('example')
    );