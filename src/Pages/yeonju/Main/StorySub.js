import React, { Component } from "react";
import "./StorySub.scss";

class StorySub extends Component {
  render() {
    return (
      <div className="friendsRecomentdation">
        <div className="dog-friends">
          <img className="friendImg" alt="photo10" src={this.props.img} />
        </div>
        <div className="friendsText">
          <p className="friendsId">{this.props.name}</p>
        </div>
        <p className="follow">{this.props.follow}</p>
      </div>
    );
  }
}

export default StorySub;
