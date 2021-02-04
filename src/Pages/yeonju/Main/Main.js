import React from "react";
import "./Main.scss";
import Logo from "../../../images/yeonju/a.png";
import yeonjuLogo from "../../../images/yeonju/mainphoto.jpg";
import AddComment from "../Main/AddComment";
import Stories from "./Stories";
import StorySub from "./StorySub";

class MainYj extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentInput: "",
      storyData: [],
      StorySub: [],
    };
  }

  componentDidMount() {
    fetch("/yeonju_data/StoryData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ storyData: res });
      });
    fetch("/yeonju_data/StorySub.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ StorySub: res });
      });
  }

  handleInputChange = (e) => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.addComment();
    }
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.commentInput),
      commentInput: "",
    });
  };

  render() {
    console.log(this.state.StorySub);
    return (
      <div className="Main">
        <div className="nav">
          <div className="nav-sub">
            <p className="nav-title">Westagram</p>
            <div className="search">
              <input className="search-bar" type="text" placeholder="검색" />
            </div>
            <div className="search-icon">
              <i className="fas fa-search fa-xs"></i>
            </div>
            <div className="nav-icons">
              <span>
                <i className="fas fa-home fa-2x"></i>
              </span>
              <span>
                <i className="fab fa-telegram-plane fa-2x"></i>
              </span>
              <span>
                <i className="far fa-compass fa-2x"></i>
              </span>
              <span>
                <i className="far fa-heart fa-2x"></i>
              </span>
              <div className="photo">
                <img className="profile" alt="photo1" src={Logo} />
              </div>
            </div>
          </div>
        </div>
        <div className="main-box">
          {this.state.storyData &&
            this.state.storyData.map((story) => (
              <Stories
                key={story.id}
                storyfeed={story}
                name={story.nameId}
                img={story.userImage}
              />
            ))}
        </div>
        <div className="main-lap">
          <div className="mainContainer">
            <div className="main-feed">
              <div className="main-top">
                <div className="photo2">
                  <img className="profile" alt="photo8" src={Logo} />
                </div>
                <p className="myname">i_am_Kozy</p>
                <p className="myposition">south.Korea</p>
                <i className="fas fa-ellipsis-h fa-sm"></i>
              </div>
              <div className="main-feed__photo">
                <img className="FeedPhoto" alt="photo9" src={yeonjuLogo} />
              </div>
              <div className="feed-icon">
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
                <i className="fab fa-telegram-plane fa-2x"></i>
              </div>

              <p className="comment-like"> 좋아요 50개</p>
              <div className="comment-plus">
                <div className="comment-line">
                  <p className="comment-text">i_am_kozy</p>
                  <p className="comment-text2">나는 아직도 배가고프다</p>
                </div>
                <div className="comment-line">
                  <p className="comment-text">hayanmaeum109</p>
                  <p className="comment-text2">요새 새로나온 개껌 맛있더라</p>
                </div>

                <div>
                  {this.state.commentList.map((comment) => (
                    <AddComment handleList={comment} />
                  ))}
                </div>
              </div>

              <div className="type-comment">
                <input
                  className="comment-input"
                  stype="text"
                  placeholder="댓글 달기..."
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                  value={this.state.commentInput}
                />
                <button
                  onClick={this.addComment}
                  className="button"
                  type="submit"
                >
                  게시
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="main-sub">
              <div className="main-sub2">
                <p className="main-sub2__title">회원님을 위한 추천</p>
                <p className="main-sub2__all">모두보기</p>
              </div>
              {this.state.StorySub.map((friend) => (
                <StorySub
                  key={friend.id}
                  // storyfeed={friend}
                  name={friend.nameId}
                  img={friend.userImage}
                  follow={friend.follow}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainYj;
