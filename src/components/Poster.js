// var PostList = React.createClass({
//   getInitialState: function() {
//     return {
//       posts: []
//     };
//   },

//   _handleSubmitSuccess: function(httpStatus, createdPost) {
//     var that = this;
//     that.setState({posts: (that.state.posts << createdPost)});
//   },

//   posts: function() {
//     this.state.posts.map(function(post) {
//       return (
//         <div>
//         ...
//         </div>
//       );
//     });
//   },

//   render: function() {
//     return (
//       <div>
//         {this.posts()}

//         <br />

//         <PostForm onSubmitSuccess={this._handleSubmitSuccess} />
//       </div>
//     );
//   }
// });


// var PostForm = React.createClass({
//   componentDidMount: function() {
//     var that = this;

//     $('#upload').ajaxForm({
//       success: that.props.onSubmitSuccess
//     });
//   },

//   render: function() {
//     return (
//       <form id="#upload">
//       ...
//       </form>
//     );
//   }
// });