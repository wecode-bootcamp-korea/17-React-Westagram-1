import React from "react";
import "./Main.scss";
import Logo from "../../../images/yeonju/a.png";
import yeonjuLogo from "../../../images/yeonju/mainphoto.jpg";

class Main extends React.Component {
  render() {
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
          <div className="mainContainer">
            <div className="main-box">
              <div className="main-story">
                <div className="storyimg1">
                  <img
                    className="storyimg"
                    alt="photo2"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/141472399_745697789676447_8955197774435778004_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=LroUyPWFPlEAX8Hx4-n&tp=1&oh=fc93508fcb61faaea5e57404dcf7334c&oe=60391B28"
                  />
                </div>
                <div className="storyimg1">
                  <img
                    className="storyimg"
                    alt="photo3"
                    src="http://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/141745902_796879754504769_7264494482824597168_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=x5hTao_Db60AX-6H_6J&tp=1&oh=7795541cc513c3b8a4d6d1f43e1c7820&oe=60376E00"
                  />
                </div>
                <div className="storyimg1">
                  <img
                    className="storyimg"
                    alt="photo4"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/139591438_230626831950389_5399717909010610130_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=RWVlpxGsJeIAX_ZvHLt&tp=1&oh=4edda73e7a7c603dfe12cbff7a4fa937&oe=6035909F"
                  />
                </div>
                <div className="storyimg1">
                  <img
                    className="storyimg"
                    alt="photo5"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/140925110_1069515260189799_4691045693215301833_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=dT7J0bmHs-gAX-pnCbl&tp=1&oh=47d576b6093ce3479cf1270332eb695b&oe=60347FB1"
                  />
                </div>
                <div className="storyimg1">
                  <img
                    className="storyimg"
                    alt="photo6"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/140923138_3711748388902801_2178535207768717737_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=1LzAH9GPazEAX-vc-iK&tp=1&oh=7744199f2c8baeff3c1d58d08265b46c&oe=6033B9B0"
                  />
                </div>
                <div className="storyimg1">
                  <img
                    className="storyimg"
                    alt="photo7"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/141729422_215768656915393_5491930660906284862_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=AwS2CD7DKI4AX9XQyBS&tp=1&oh=e692ddf01bd6744798c2879e54c91a5c&oe=60364802"
                  />
                </div>
              </div>
              <div className="main-story__span">
                <span>whangwhang</span>&nbsp;&nbsp;&nbsp;
                <span>iLikefood</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>cafeimg</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>mengmeng</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>iamdog</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>iamdogtoo</span>
              </div>
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
                </div>

                <div id="type-comment">
                  <input
                    className="comment-input"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button className="button" type="submit">
                    게시
                  </button>
                </div>
              </div>
            </div>
            <div className="main-sub">
              <div className="main-sub2">
                <p className="main-sub2__title">회원님을 위한 추천</p>
                <p className="main-sub2__all">모두보기</p>
              </div>
              <div className="friendsRecomentdation">
                <img
                  className="friendImg"
                  alt="photo10"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/141859861_924354108103085_5444115609848068273_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=KxeqZa19OTAAX8c0xc2&tp=1&oh=aef349678ef5aa55326a712fc71246fd&oe=6037A1B8"
                />
                <img
                  className="friendImg"
                  alt="photo11"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/140267804_789293408334697_2406997781703437169_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=ybjSt5C-yK0AX_4TwhX&tp=1&oh=b847de0419b60c40891aa8faaf98b3ff&oe=60351C46"
                />
                <img
                  className="friendImg"
                  alt="photo12"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/142886585_1979045132235324_1411015758878696991_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=U3LNEEub7nsAX9YuPdm&tp=1&oh=2214e6645d30a9360399ba8725295e91&oe=6035FFE4"
                />
                <img
                  className="friendImg"
                  alt="photo13"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/141392647_707234806618773_2073467878881630459_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Mfy-vUsUZhIAX-DIOYy&tp=1&oh=555fafa6f6f9b83068908b5d40433e37&oe=6038107E"
                />
                <img
                  className="friendImg"
                  alt="photo14"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/140942655_723290875057320_8606693005831233969_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=aw-TTs3cN0oAX_ov0EF&tp=1&oh=932b2567bf7634a96f0c7f9f73e3a900&oe=603712BB"
                />
              </div>
              <div className="friends-list">
                <p className="friendsId">hiiammung</p>
                <p className="friendsId">gansikjoah</p>
                <p className="friendsId">109109</p>
                <p className="friendsId">whiteprince</p>
                <p className="friendsId">iamdog</p>
              </div>
              <div className="friendsFollow">
                <p className="follow">팔로우</p>
                <p className="follow">팔로우</p>
                <p className="follow">팔로우</p>
                <p className="follow">팔로우</p>
                <p className="follow">팔로우</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
