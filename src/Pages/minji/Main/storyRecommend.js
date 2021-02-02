import React, { Component } from "react";
import me from "../../../image/kangminji/me.jpg";
import { StoryRight } from "./StoryRight";

class StoryRecommend extends Component {
  constructor() {
    super();
    this.state = { StoryData: [] };
  }

  componentDidMount() {
    this.setState({ StoryData: StoryRight });
  }

  render() {
    return (
      <>
        <div className="content-right">
          <div className="rightone">
            <img src={me} alt="profilephoto" className="me" />
            <span className="profileme"> FrontEnd_Kang</span>
          </div>

          <div className="righttwo">
            <div className="storyhead">
              <span className="storyheadleft">스토리</span>
              <span className="storyheadright">모두보기</span>
            </div>

            <ul>
              {this.state.StoryData.map((story) => {
                return (
                  <li>
                    <img
                      alt="userpicture"
                      src={story.img}
                      className="storyphoto"
                    />
                    <span className="storyid">
                      {story.storyid}
                      <br />
                      <p>{story.time}</p>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="rightthree">
            <div className="storyhead">
              <span className="storyheadleft">회원님을 위한 추천</span>
              <span className="storyheadright">모두보기</span>
            </div>

            <ul>
              {this.state.StoryData.map((story) => {
                return (
                  <li>
                    <img
                      alt="userpicture"
                      src={story.img}
                      className="storyphoto"
                    />
                    <span className="storyid">
                      {story.storyid}
                      <br />
                      <p>{story.time}</p>
                    </span>
                    <span className="follow">팔로우</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default StoryRecommend;
