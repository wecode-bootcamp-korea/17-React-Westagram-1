import React, { Component } from 'react';
import Nav from './Nav/Nav'
import FeedList from './FeedList/FeedList'
import Feed from './Feed/Feed'
import MainAside from'./MainAside/MainAside'
import jongjin from '../../../images/jongjin/종진.jpg'
import './Main.scss'

class MainJJ extends Component {

    constructor() {
        super();
        this.state = {
        feed : [],
        feedList: [],
        recommendList: []
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

        fetch('data/recommendData.json', {
            method: 'GET'
          })
          .then(res => res.json())
          .then(data => {
            this.setState({
                recommendList: data,     
            });
        });
    } 

    render() {
        const { feed , feedList, recommendList } = this.state
        return (
        <>
        <Nav />
        <section className="main">
            <div className="mainLeft">
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
                <div className="mainAside">
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
                    <ul className="recommendList">
                        {recommendList.map( recommend => {
                            return(
                                <MainAside key = {recommend.id}
                                    friendImg = {recommend.img}
                                    user = {recommend.userName}
                                    follow = {recommend.follow}
                                />
                            )
                        })}
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
            </div>
        </section>
        </>
        );
      }
    }

export default MainJJ;