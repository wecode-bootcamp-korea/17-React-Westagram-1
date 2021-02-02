import React from "react";
import 

class AddComment extends React.Component {
  render() {
    const { userId, comment, idx, handleRemove } = this.props;
    return (
      <ul className="previous_comment">
        <li>
          <span>
            {userId}
            <span>{comment}</span>
          </span>
          <img
            className="comment_likebutton"
            alt=""
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            id={idx}
            className="comment_deletebutton"
            onClick={handleRemove}
            alt=""
            src="https://icons-for-free.com/iconfiles/png/512/cross+delete+icon-1320196393721642367.png"
          />
        </li>
      </ul>
    );
  }
}
