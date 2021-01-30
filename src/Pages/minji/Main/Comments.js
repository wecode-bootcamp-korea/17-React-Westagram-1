import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div className="comment" >
        {this.props.text}
      </div>
    );
  }
}

export default Comments;