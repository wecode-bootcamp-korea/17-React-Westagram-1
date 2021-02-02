import React, { Component } from "react";
import heart from "../../../image/kangminji/heart.png";
import redheart from "../../../image/kangminji/redheart.png";
import "./Main.scss";

class Comments extends Component {
constructor(){
super()
this.state={
  value :"",
  comment:"",
commentData : []
}
}





  render() {
    // const { username, content } = this.props;
    return (
      // <li className="comment">
      //   <div>
      //     <span className="username">{username} : </span>
      //     <span className="commenttext"> {content}</span>
      //   </div>
      //   <span className="isLiked">
      //     {this.props.isLiked ? (
      //       <img alt="love" className="icon" src={redheart} />
      //     ) : (
      //       <img alt="heart" className="icon" src={heart} />
      //     )}
      //   </span>

      )  }}


export default Comments;
