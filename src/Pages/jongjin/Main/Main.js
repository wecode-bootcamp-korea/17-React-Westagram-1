import React, { Component } from 'react';
import FeedList from './FeedList/FeedList'
import Comment from './Comment/Comment'
import jongjin from '../../../images/jongjin/종진.jpg'
import Ironman from '../../../images/jongjin/아이언맨.jpg'
import Thor from '../../../images/jongjin/토르.jpg'
import Wanda from '../../../images/jongjin/스칼렛위치.jpg'
import Hulk from '../../../images/jongjin/헐크.png'
import Widow from '../../../images/jongjin/블랙위도우.jpg'
import Thanos from '../../../images/jongjin/타노스.png'
import Spider from '../../../images/jongjin/스파이더.jpg'
import Antman from '../../../images/jongjin/앤트맨.jpg'
import Captain from '../../../images/jongjin/캡틴아메리카.jpg'
import Doctor from '../../../images/jongjin/닥터스트레인지.png'
import BlackPanther from '../../../images/jongjin/블랙팬서.jpg'
import Marble from '../../../images/jongjin/마블.png'
import SpiderManpid from '../../../images/jongjin/스파이더맨.jpg'
import './Main.scss'

class MainJJ extends Component {

    state = {
        text: "",
        user: "Ironman ",
        deleteBtn: <i class="fas fa-trash-alt"></i>,
        commentList: [],
        isLike: true,
        like: 99
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

    // handleRemove = (num) => {
    //     const nextComments = this.state.commentList.filter((commnet) => {
    //         return comment.num !== num;
    //     })
    //     this.setState({
    //         commentList: nextComments
    //     })
    // }
    
    handleLike = () => {
        this.setState({
            isLike: !this.state.isLike
        })
        this.handleLikenumUp();
    }

    handleLikenumUp = () => {
        if(this.state.isLike){
            this.setState({
                like: this.state.like + 1
            })
        } else {
            this.setState({
                like: this.state.like - 1
            })   
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/commentData.json', {
          method: 'GET'
        })
          .then(res => res.json())
          .then(data => {
            this.setState({
              commentList: data,     
            });
          });
      }

    render() {
        console.log(this.state.commentList)
        const {text, user, commentList, isLike, like, deleteBtn} = this.state
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
                    <FeedList />
                    {/* <ul>
                        <li><img alt="친구" src={jongjin}/><p>My stroy</p></li>
                        <li><img alt="친구" src={Ironman}/><p>Iron Man</p></li>
                        <li><img alt="친구" src={Widow}/><p>widow</p></li>
                        <li><img alt="친구" src={Captain}/><p>Captain</p></li>
                        <li><img alt="친구" src={BlackPanther}/><p>BlackPanther</p></li>
                        <li><img alt="친구" src={Hulk}/><p>Hulk</p></li>
                        <li><img alt="친구" src={Spider}/><p>Spider</p></li>
                        <li><img alt="친구" src={Antman}/><p>Antman</p></li>
                        <li><img alt="친구" src={Wanda}/><p>Wanda</p></li>
                        <li><img alt="친구" src={Thor}/><p>Thor</p></li>
                        <li><img alt="친구" src={Thanos}/><p>Thanos</p></li>
                    </ul> */}
                <div className="pid">
                    <div className="pidHead">
                        <div>
                            <img alt="user" src={Marble}/>
                            <span>Marble studio</span>
                        </div>
                        <div>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="pidBody">
                        <div className="pidImage">
                            <img alt="사진" src={SpiderManpid} onDoubleClick={this.handleLike}/>
                        </div>
                        <section className="pidFunc">
                            <ul>
                                <li><button className={isLike === true ? "emptyHeart" : "emptyHeartHide" }
                                onClick={this.handleLike}><i className="far fa-heart"></i></button></li>
                                <li><button className={isLike === true ? "fullHeartHide" : "fullHeart"}
                                onClick={this.handleLike}><i className="fas fa-heart"></i></button></li>
                                <li><i className="far fa-comment"></i></li>
                                <li><i className="far fa-paper-plane"></i></li>
                            </ul>
                            <div>
                                <i className="far fa-bookmark"></i>
                            </div>
                        </section>
                        <section className="likeInfo">
                            <p>좋아요 <span>{like}</span>개</p>
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
                            <ul>
                                {commentList.map(comment => {
                                    return(
                                    < Comment key= {comment.id}
                                    content= {comment.content}
                                    userName= {comment.userName} 
                                    deleteBtn = {deleteBtn}
                                    commentList= {commentList}
                                    /> 
                                    );                       
                                })}
                            </ul>
                        <section className="commentWrite">
                            <input  onChange= {this.handleInputChange} onKeyDown = {this.handleKeyPress}
                                    className= "commentInput" type="text" placeholder="댓글 달기..."
                                    value= {text} name="text"/>
                            <button onClick={this.commentAdd}>게시</button>
                        </section>
                        </section>
                    </div>
                </div>
            </div>
            <div className="mainRight">
                <section className="myInfo">
                    <div>
                        <img alt="친구" src={jongjin}/>
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
                                <img alt="친구" src={Captain}/>
                                <div>
                                    <a>Captain</a>
                                    <p>회원님을 위한 추천</p>
                                </div>
                            </div>
                            <a href="#" className="follow">팔로우</a>
                        </li>
                        <li>
                            <div>
                                <img alt="친구" src={Thanos}/>
                                <div>
                                    <a>Thanos</a>
                                    <p>Thanos님이 대결을 요청합니다</p>
                                </div>
                            </div>
                            <a href="#"  className="follow">파이트</a>
                        </li>
                        <li>
                            <div>
                                <img alt="친구" src={Hulk}/>
                                <div>
                                    <a>Hulk</a>
                                    <p>인스타 할줄 모릅니다.</p>
                                </div>
                            </div>
                            <a href="#" className="follow">팔로우</a>
                        </li>
                        <li>
                            <div>
                                <img alt="친구" src={Doctor}/>
                                <div>
                                    <a>Doctor Strange</a>
                                    <p>회원님을 위한 추천</p>
                                </div>
                            </div>
                            <a href="#" className="follow">팔로우</a>
                        </li>
                        <li>
                            <div>
                                <img alt="친구" src={Widow}/>
                                <div>
                                    <a>Black Widow</a>
                                    <p>회원님을 위한 추천</p>
                                </div>
                            </div>
                            <a href="#" className="follow">팔로우</a>
                        </li>
                    </ul>
                    <div className="companyInfo">
                        <ul>
                            <li>소개 ∙</li>
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