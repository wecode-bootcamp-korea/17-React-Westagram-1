import React, { Component } from "react";

class AddComment extends Component {
  render() {
    return (
      <div>
        <li className="idName">
          <span className="yourName">yeonju</span>
          {this.props.handleList}
        </li>
      </div>
    );
  }
}

export default AddComment;
