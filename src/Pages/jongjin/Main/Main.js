import React, { Component } from 'react';
import Comment from './Comment/Comment'
import './Main.scss'

class MainJJ extends Component {

    state = {
        text: "",
        user: "Ironman ",
        commentList: []
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    handleClick = () => {
        this.setState({
            commentList: this.state.commentList.concat(this.state.text),
            text: ''
        })
    }
    

    render() {
        const {text, user, comment, commentList} = this.state
        return (
        <>
            <nav>
            <div className="navbar">
                <div className="navbarLeft">
                    <span>westargram</span>
                </div>
                <div className="navbarMid">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="검색"/>
                </div>
                <div className="navbarRight">
                    <img alt="탐색" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
                    <img alt="하트" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
                    <img className="profile" alt="마이페이지" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
                    <ul className="dropMenu">
                        <li><i className="far fa-user-circle"></i><div>프로필</div></li>
                        <li><i className="far fa-bookmark"></i><div>저장됨</div></li>   
                        <li><i className="fas fa-cog"></i><div>설정</div></li>
                        <li><i className="fas fa-sync-alt"></i><div>계정 전환</div></li>
                        <hr/>
                        <li><a href="login.html">로그아웃</a></li>
                    </ul>
                </div>
                </div>
        </nav>
        <section className="main">
            <div className="feeds">
                <div className="friendList">
                    <ul>
                        <li><img alt="친구" src={require('../../../images/jongjin/종진.jpg')}/><p>My stroy</p></li>
                        <li><img alt="친구" src="../../../images/jongjin/아이언맨.jpg"/><p>Iron Man</p></li>
                        <li><img alt="친구" src="/img/블랙위도우.jpg"/><p>widow</p></li>
                        <li><img alt="친구" src="/img/스칼렛위치.jpg"/><p>Wanda</p></li>
                        <li><img alt="친구" src="/img/토르.jpg"/><p>Thor</p></li>
                        <li><img alt="친구" src="/img/헐크.jpg"/><p> Hulk</p></li>
                        <li><img alt="친구" src="/img/마동석.jpg"/><p>마동석</p></li>
                        <li><img alt="친구" src="/img/루피.jpg"/><p>Ruppy</p></li>
                        <li><img alt="친구" src="/img/타노스.jpg"/><p>Thanos</p></li>
                        <li><img alt="친구" src="/img/루피.jpg"/><p>Ruppy</p></li>
                        <li><img alt="친구" src="/img/루피.jpg"/><p>Ruppy</p></li>
                    </ul>
                </div>
                <div className="pid">
                    <div className="pidHead">
                        <div>
                            <img alt="user" src="./img/마블.png"/>
                            <span>Marble studio</span>
                        </div>
                        <div>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="pidBody">
                        <div className="pidImage">
                            <img alt="사진" src="img/스파이더맨.jpg"/>
                        </div>
                        <section className="pidFunc">
                                <ul>
                                    <li><button className="emptyHeart"><i className="far fa-heart"></i></button></li>
                                    <li><button className="fullHeart"><i className="fas fa-heart"></i></button></li>
                                    <li><i className="far fa-comment"></i></li>
                                    <li><i className="far fa-paper-plane"></i></li>
                                </ul>
                                <div>
                                    <i className="far fa-bookmark"></i>
                                </div>
                        </section>
                        <section className="likeInfo">
                            <p>좋아요 100,000개</p>
                        </section>
                        <section className="pidInfo">
                            <span>
                                <a>MarvelStudio</a> "Spider Man"
                                <br/>
                                <br/>
                                ‘엔드게임’ 이후 변화된 세상, 스파이더맨 ‘피터 파커’는 학교 친구들과 유럽 여행을 떠나게 된다. 그런 그의 앞에 ‘닉 퓨리’가 등장해 도움을 요청하고 정체불명의 조력자 ‘미스테리오’까지 합류하게 되면서 전 세계를 위협하는 새로운 빌런 ‘엘리멘탈 크리쳐스’와 맞서야만 하는 상황에 놓이게 되는데…
                            </span>
                            <div className="commentInfo">
                                <p>댓글 1,000개 모두 보기</p>
                            </div>
                            < Comment comment= {comment}
                                      user= {user} 
                                      text= {text}
                                      commentList= {commentList}
                                      commentAdd= {this.handleClick}
                                      handleKeyPress= {this.handleKeyPress}
                                      handleInputChange= {this.handleInputChange}
                            />
                        </section>
                    </div>
                </div>
            </div>
            <div className="mainRight">
                <section className="myInfo">
                    <div>
                        <img alt="친구" src="./img/종진.jpg"/>
                        <div>
                            <a>kimgjongjin0920</a>
                            <p>김종진</p>
                        </div>
                    </div>
                    <div className="convert">
                        <a href="#">전환</a>
                    </div>
                </section>
                <section className="recommend">
                    <div className="listHead">
                        <p>회원님을 위한 추천</p>
                        <a href="#">모두 보기</a>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <img alt="친구" src="./img/종진.jpg"/>
                                <div>
                                    <a>playck</a>
                                    <p>회원님을 위한 추천</p>
                                </div>
                            </div>
                            <a href="#" className="follow">팔로우</a>
                        </li>
                        <li>
                            <div>
                                <img alt="친구" src="./img/타노스.jpg"/>
                                <div>
                                    <a>Thanos</a>
                                    <p>Thanos님이 대결을 요청합니다</p>
                                </div>
                            </div>
                            <a href="#"  className="follow">파이트</a>
                        </li>
                        <li>
                            <div>
                                <img alt="친구" src="./img/헐크.jpg"/>
                                <div>
                                    <a>Hulk</a>
                                    <p>인스타 할줄 모름</p>
                                </div>
                            </div>
                            <a href="#" className="follow">팔로우</a>
                        </li>
                        <li>
                            <div>
                                <img alt="친구" src="./img/토르.jpg"/>
                                <div>
                                    <a>Thor</a>
                                    <p>회원님을 위한 추천</p>
                                </div>
                            </div>
                            <a href="#" className="follow">팔로우</a>
                        </li>
                        <li>
                            <div>
                                <img alt="친구" src="./img/마동석.jpg"/>
                                <div>
                                    <a>마동석</a>
                                    <p>회원님을 위한 추천</p>
                                </div>
                            </div>
                            <a href="#" className="follow">팔로우</a>
                        </li>
                    </ul>
                    <div className="companyInfo">
                        <ul>
                            <li>소개 ∙ </li>
                            <li>도움말 ∙</li>
                            <li>홍보 센터 ∙</li>
                            <li>API ∙</li>
                            <li>채용 정보 ∙</li>
                            <li>개인정보처리방침 ∙</li>
                            <li>약관 ∙</li>
                            <li>위치 ∙</li>
                            <li>인기 계정 ∙</li>
                            <li>해시 태그</li>
                        </ul>
                        <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
                    </div>
                </section>
                </div>
        </section>  
    
        </>
        );
      }
    }

export default MainJJ;