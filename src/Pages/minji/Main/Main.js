// import React, { Component } from "react";
import React from "react";
// import Comments from "./Comments"; //
import instalogo from "../../../image/kangminji/instagram.png";
import compass from "../../../image/kangminji/compass.png";
import heart from "../../../image/kangminji/heart.png";
import user from "../../../image/kangminji/user.png";
import Feeds from "./Feeds";
import "./Main.scss";
import StoryRecommend from "./StoryRecommend";

class MainMinji extends React.Component {
  constructor() {
    super();
    this.state = {
      btncolor: "white",
      // value: "",
      FeedData: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/FeedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          // commentData: commentData,
          FeedData: data,
        });
      });
  }
  render() {
    const { FeedData } = this.state;
    return (
      <div className="Main">
        <div className="navigation">
          <div className="navCenter">
            <div className="navTitle">
              <img alt="instamark" src={instalogo} className="l instalogo" />
              <span className="instahead">westagram</span>
            </div>

            <div className="center">
              <input type="text" className="search" placeholder="검색" />
            </div>

            <div className="naviconBox">
              <img alt="compass" src={compass} className="right headmark" />
              <img alt="heart" src={heart} className="right headmark" />
              <img alt="user" src={user} className="right headmark" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="feedsandside">
            <div className="feeds">
              {FeedData.map((feed) => {
                return (
                  <Feeds
                    key={feed.id}
                    username={feed.username}
                    photo={feed.photo}
                    likedpeople={feed.likedpeople}
                    comment={feed.comment}
                    time={feed.time}
                    btncolor={this.state.btncolor}
                    profile={feed.profile}
                    commentone={feed.commentone}
                  />
                );
              })}
            </div>
            <StoryRecommend />
          </div>
        </div>
      </div>
    );
  }
}

export default MainMinji;
