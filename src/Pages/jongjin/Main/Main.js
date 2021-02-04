import React, { Component } from 'react';
import FeedList from './FeedList/FeedList'
import Feed from './Feed/Feed'
import jongjin from '../../../images/jongjin/종진.jpg'
import Thor from '../../../images/jongjin/토르.jpg'
import Hulk from '../../../images/jongjin/헐크.png'
import Widow from '../../../images/jongjin/블랙위도우.jpg'
import Thanos from '../../../images/jongjin/타노스.png'
import Captain from '../../../images/jongjin/캡틴아메리카.jpg'
import './Main.scss'

class MainJJ extends Component {

    constructor() {
        super();
        this.state = {
        feed : [],
        feedList: []
        }
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
        fetch('http://localhost:3000/data/feedData.json',{
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                feed: data,
            });
        })

        fetch('http://localhost:3000/data/feedListData.json', {
            method: 'GET'
          })
          .then(res => res.json())
          .then(data => {
            this.setState({
                feedList: data,     
            });
        });
    } 

    render() {
        const { feed ,feedList } = this.state
        return (
        <>
        <section className="main">
            <div>
                <div className="feedList">
                    {feedList.map(story => {
                        return(
                            <FeedList key = {story.id}
                                storyImg = {story.img}
                                user = {story.userName}
                            />
                        );
                    })}
                </div>
                <div className="feeds">
                    {feed.map(feed => {
                        return(
                            <Feed key={feed.id}
                            user={feed.user}
                            userImg={feed.userImg}
                            feedImg={feed.feedImg}
                            isLike={feed.isLike}
                            like={feed.like}
                            storyName={feed.storyName}
                            story={feed.story}
                            handleLikenumUp={this.handleLikenumUp}
                            />   
                        );
                    })}
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
                                <img alt="친구" src={Thor}/>
                                <div>
                                    <a>Thor</a>
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