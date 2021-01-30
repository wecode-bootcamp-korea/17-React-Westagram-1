// import React, { Component } from "react";
import "./Main.scss";
import React from "react";
import Comments from "./Comments";
import instalogo from "../../../image/kangminji/instagram.png";
import compass from "../../../image/kangminji/compass.png";
import heart from "../../../image/kangminji/heart.png";
import user from "../../../image/kangminji/user.png";
import me from "../../../image/kangminji/me.jpg";
import share from "../../../image/kangminji/share.png";
import sea from "../../../image/kangminji/sea.jpg";
import bubble from "../../../image/kangminji/bubble.png";
import redheart from "../../../image/kangminji/redheart.png";
import bookmark from "../../../image/kangminji/bookmark.png";

class MainMinji extends React.Component {
  constructor() {
    super();
    this.state = {
      btncolor: "white",
      comment: "",
      commentarray: [],
      id: 1,
      value: "",
    };
  }
  commentbtnchange = (e) => {
    this.setState({ [e.target.name]: e.target.value, value: e.target.value });
    if (e.target.value) {
      this.setState({ btncolor: "skyblue" });
    } else {
      this.setState({ btncolor: "white" });
    }
  };

  addcomment = () => {
    if (this.state.value) {
      this.setState({
        commentarray: this.state.commentarray.concat(this.state.value),
        value: "",
        btncolor: "white",
        id: this.state.id + 1,
      });
    }
  };

  addcommententer = (e) => {
    if (e.key === "Enter" && this.state.value) {
      this.addcomment();
    }
  };

  render() {
    const { value, commentarray, btncolor } = this.state;
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
              <div className="feed">
                <img
                  alt="profile"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ehYY5kNkoOEAX-bVJJK&tp=1&oh=a6656c95f28bc6413260ba52d32a22f3&oe=602CFE20"
                  className="profile"
                />
                <div className="head">
                  wecode_bootcamp
                  <br />
                  WeCode
                </div>

                <img alt="feedmain" src={sea} className="contentpicture" />

                <div className="icons">
                  <div className="three">
                    <img alt="heart" src={redheart} className="icon a" />
                    <img alt="speech-bubble" src={bubble} className="icon a" />
                    <img alt="export" src={share} className="icon" />
                  </div>
                  <img alt="bookmark" src={bookmark} className="icon b" />
                </div>
                <div className="like">
                  <img src={me} alt="likeuser" className="likeme" />
                  <h3>minji</h3>님 <h3>외 381명</h3>이 좋아합니다
                </div>

                <div className="chat">
                  <h3>arum</h3> 어디갔다 왔냐
                  <br />
                  <h3>dawn</h3> 우와 바다다다다다
                  <br />
                  <p>1분 전</p>
                  <div>
                    {commentarray.map((e, index) => {
                      return <Comments text={e} key={index} />;
                    })}
                  </div>
                </div>
                <div className="commentbody">
                  <input
                    type="form"
                    placeholder="댓글 달기..."
                    id="comment"
                    name="comment"
                    value={value}
                    onKeyUp={this.addcommententer}
                    onChange={this.commentbtnchange}
                  />
                  <button
                    className="commentbtn"
                    onClick={this.addcomment}
                    style={{ background: btncolor }}
                  >
                    게시
                  </button>
                </div>
              </div>
            </div>

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
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/131888290_402968921142894_5927515153186470506_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=XAejWSkjM44AX_XJHJC&tp=1&oh=a6fe3685a2b1f10175ae3eef24607bca&oe=6031928F"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      csswhyrano_
                      <br />
                      <p>20분전</p>
                    </span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/57004953_280758582852531_659857858866708480_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=DVlABqQMFksAX-r2X7T&tp=1&oh=2a6f35fd61f224b07fd8fe09f07cc6de&oe=603052E7"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      _crazyJs_
                      <br />
                      <p>1시간전</p>
                    </span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/23164742_1849081185336418_3574313432029069312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=-ToiqSXTFRoAX9EnWFs&tp=1&oh=8ac6423bdf3f091d030204cf74d71cf7&oe=602FE6A3"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      reactis_
                      <br />
                      <p>5시간전</p>
                    </span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100902306_2514661478634741_874968452618518528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=k62Mr6RoF1QAX-FDn-4&tp=1&oh=e978a806a431e9296bc63dfd96acbb68&oe=60319DC6"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      imhungry_77
                      <br />
                      <p>9시간전</p>
                    </span>
                  </li>

                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/131920720_132318761901333_5999390281084831449_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=C_ZIk6hNi0UAX-w4ymg&tp=1&oh=7e707aa34995602fa448387724347f72&oe=603012B8"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      rainoppa_
                      <br />
                      <p>9시간전</p>
                    </span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/135877813_232971505065575_4929725676389542980_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=XTPzJguFnrQAX-vOz4Q&tp=1&oh=133f9711ae965d763b192354f76343bd&oe=60301FA0"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      soonmoo_cat
                      <br />
                      <p>10시간전</p>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rightthree">
                <div className="storyhead">
                  <span className="storyheadleft">회원님을 위한 추천</span>
                  <span className="storyheadright">모두보기</span>
                </div>

                <ul>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/126218667_660074341267858_7735334730013554162_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=yae5SjwQE8IAX_WjLxM&tp=1&oh=20588fb1990739ef7546d1db57dfe2c8&oe=60322D17"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      csswhyrano_
                      <br />
                      <p>20분전</p>
                    </span>
                    <span className="follow">팔로우</span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/14730627_886972098069324_108783541558444032_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=C2EmUqEjcfQAX9Vxp-7&tp=1&oh=6f4cb263e376378f6d5707da441213a1&oe=60317DF1"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      run_darly
                      <br />
                      <p>1시간전</p>
                    </span>
                    <span className="follow">팔로우</span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/23164742_1849081185336418_3574313432029069312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=-ToiqSXTFRoAX9EnWFs&tp=1&oh=8ac6423bdf3f091d030204cf74d71cf7&oe=602FE6A3"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      WEARETHEONE
                      <br />
                      <p>5시간전</p>
                    </span>
                    <span className="follow">팔로우</span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100902306_2514661478634741_874968452618518528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=k62Mr6RoF1QAX-FDn-4&tp=1&oh=e978a806a431e9296bc63dfd96acbb68&oe=60319DC6"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      yesiam__77
                      <br />
                      <p>9시간전</p>
                    </span>
                    <span className="follow">팔로우</span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/14730627_886972098069324_108783541558444032_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=C2EmUqEjcfQAX9Vxp-7&tp=1&oh=6f4cb263e376378f6d5707da441213a1&oe=60317DF1"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      run_darly
                      <br />
                      <p>1시간전</p>
                    </span>
                    <span className="follow">팔로우</span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/23164742_1849081185336418_3574313432029069312_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=-ToiqSXTFRoAX9EnWFs&tp=1&oh=8ac6423bdf3f091d030204cf74d71cf7&oe=602FE6A3"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      WEARETHEONE
                      <br />
                      <p>5시간전</p>
                    </span>
                    <span className="follow">팔로우</span>
                  </li>
                  <li>
                    <img
                      alt="userpicture"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100902306_2514661478634741_874968452618518528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=k62Mr6RoF1QAX-FDn-4&tp=1&oh=e978a806a431e9296bc63dfd96acbb68&oe=60319DC6"
                      className="storyphoto"
                    />
                    <span className="storyid">
                      yesiam__77
                      <br />
                      <p>9시간전</p>
                    </span>
                    <span className="follow">팔로우</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMinji;
