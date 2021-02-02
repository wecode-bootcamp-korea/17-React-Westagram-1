import React, { Component } from 'react';
import './Main.scss'
import feedimg from '../../../images/minjoo/feedimg.jpeg'
import mj from '../../../images/minjoo/mj.jpeg'
import bookmark from '../../../images/minjoo/bookmark.svg'
import instagramlogo from '../../../images/minjoo/instagram-logo-1.png'
import send from '../../../images/minjoo/send.svg'
import like from '../../../images/minjoo/like.svg'
import dots from '../../../images/minjoo/fi-rr-menu-dots.svg'
import compass from '../../../images/minjoo/compass.svg'
import chat from '../../../images/minjoo/chat-bubble.svg'

class Main extends Component {
    render() {
        return (

<body style={{widht:'100vw',fontSize: '14px',textDecoration: 'none',listStyle: 'none',boxSizing: 'borderBox',
  margin: '0px', backgroundColor: '#fafafa'}}>
    <nav className="nav__bar">
        <img src= { instagramlogo } id="insta-logo" style={{ width : '103px' }} />
        <input placeholder="검색" type="text" className="search__bar container" />
        <div className="icons">
            <li><img className="icon" alt="home-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDcuNjA2LDI0NS4zOTRsLTMyLjExMS0zMi4xMTFjLTAuMDE1LTAuMDE1LTAuMDMxLTAuMDMxLTAuMDQ2LTAuMDQ2TDI2Ni42MDYsNC4zOTRDMjYzLjc5MywxLjU4MSwyNTkuOTc4LDAsMjU2LDANCgkJCWMtMy45NzksMC03Ljc5NCwxLjU4MS0xMC42MDYsNC4zOTRMMzYuNTUsMjEzLjIzN2MtMC4wMTUsMC4wMTUtMC4wMywwLjAzLTAuMDQ1LDAuMDQ1TDQuMzk0LDI0NS4zOTQNCgkJCWMtNS44NTgsNS44NTgtNS44NTgsMTUuMzU1LDAsMjEuMjEzYzUuODU4LDUuODU4LDE1LjM1NSw1Ljg1OCwyMS4yMTMsMGw2LjUyNi02LjUyNlY0OTdjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWgxNjAuNjY4aDk2LjM5OA0KCQkJaDE2MC42NjhjOC4yODQsMCwxNS02LjcxNiwxNS0xNVYyNjAuMDhsNi41MjYsNi41MjZjMi45MjksMi45Myw2Ljc2OCw0LjM5NCwxMC42MDcsNC4zOTRzNy42NzgtMS40NjQsMTAuNjA2LTQuMzk0DQoJCQlDNTEzLjQ2NCwyNjAuNzQ5LDUxMy40NjQsMjUxLjI1Miw1MDcuNjA2LDI0NS4zOTR6IE0yODkuMTk5LDQ4MmgtNjYuMzk4VjM1MS4zMzJoNjYuMzk4VjQ4MnogTTQ0OS44NjcsNDgySDMxOS4xOTlWMzM2LjMzMg0KCQkJYzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTk2LjM5OGMtOC4yODQsMC0xNSw2LjcxNi0xNSwxNVY0ODJINjIuMTMzVjIzMC4wOEwyNTYsMzYuMjEzTDQ0OS44NjcsMjMwLjA4VjQ4MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /></li>
            <li><img className="icon" alt="message-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjAwMSA1MTIuMDAxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA3LjYwOCw0LjM5NWMtNC4yNDMtNC4yNDQtMTAuNjA5LTUuNTQ5LTE2LjE3Ny0zLjMyMUw5LjQzLDE5My44NzJjLTUuNTE1LDIuMjA2LTkuMjA4LDcuNDU4LTkuNDIsMTMuMzk1DQoJCQljLTAuMjExLDUuOTM2LDMuMTAxLDExLjQzNyw4LjQ0NSwxNC4wMjlsMTkwLjA2OCw5Mi4xODFsOTIuMTgyLDE5MC4wNjhjMi41MTQsNS4xODQsNy43NjQsOC40NTUsMTMuNDkzLDguNDU1DQoJCQljMC4xNzgsMCwwLjM1Ny0wLjAwMywwLjUzNi0wLjAxYzUuOTM1LTAuMjExLDExLjE4OS0zLjkwNCwxMy4zOTQtOS40MTlsMTkyLjgtNDgxLjk5OA0KCQkJQzUxMy4xNTYsMTUuMDAxLDUxMS44NTEsOC42MzgsNTA3LjYwOCw0LjM5NXogTTUyLjA5NCwyMDkuMTE4TDQzNC43Miw1Ni4wNjlMMjA2LjY5MSwyODQuMDk2TDUyLjA5NCwyMDkuMTE4eiBNMzAyLjg4Myw0NTkuOTA3DQoJCQlsLTc0Ljk3OS0xNTQuNTk5bDIyOC4wMy0yMjguMDI3TDMwMi44ODMsNDU5LjkwN3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /></li>
            <li><img className="icon" alt="compass-icon " src={compass} /></li>
            <li><img className="icon" alt="heart-icon" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NjYuMzMyLDY2LjM4N2MtMjkuNTAxLTI5LjUwMi02OC43MjYtNDUuNzQ5LTExMC40NDktNDUuNzQ5Yy0zNi44OTksMC03MS44NDgsMTIuNzA5LTk5Ljg0MiwzNi4wNTUNCgkJCWMtMjcuOTk1LTIzLjM0Ni02Mi45NDMtMzYuMDU1LTk5Ljg0Mi0zNi4wNTVjLTQxLjcyMiwwLTgwLjk0NywxNi4yNDgtMTEwLjQ0OSw0NS43NDlDMTYuMjQ4LDk1Ljg4OCwwLDEzNS4xMTUsMCwxNzYuODM2DQoJCQlzMTYuMjQ4LDgwLjk0OCw0NS43NSwxMTAuNDVjMC4wMzQsMC4wMzUsMC4wNjksMC4wNjksMC4xMDQsMC4xMDNsMTk5LjU3OSwxOTkuNTc5YzIuODEzLDIuODEzLDYuNjI5LDQuMzk1LDEwLjYwOCw0LjM5NQ0KCQkJczcuNzk0LTEuNTgsMTAuNjA4LTQuMzk1bDE5OS41NDQtMTk5LjU0NGMwLjA0Ny0wLjA0NiwwLjA5NC0wLjA5MiwwLjE0MS0wLjEzOWMwLjA0OS0wLjA0OSwwLjA5OC0wLjA5OSwwLjE0Ny0wLjE0OA0KCQkJQzUyNy4yMjUsMjI2LjIyNSw1MjcuMTcsMTI3LjIyMiw0NjYuMzMyLDY2LjM4N3ogTTQ0NS4xNjUsMjY2LjAxOWMtMC4wMTYsMC4wMTYtMC4wMzMsMC4wMzMtMC4wNTEsMC4wNTINCgkJCWMtMC4wMDgsMC4wMDgtMC4wMTcsMC4wMTYtMC4wMjUsMC4wMjRMMjU2LjA0MSw0NTUuMTQ0TDY2Ljk5MywyNjYuMDk2Yy0wLjAyNC0wLjAyNC0wLjA1LTAuMDUtMC4wNzktMC4wNzgNCgkJCWMtMjMuODAyLTIzLjgyOS0zNi45MDktNTUuNDk4LTM2LjkwOS04OS4xODFjMC0zMy43MDgsMTMuMTI2LTY1LjM5OCwzNi45NjItODkuMjMzYzIzLjgzNS0yMy44MzUsNTUuNTI1LTM2Ljk2MSw4OS4yMzItMzYuOTYxDQoJCQljMzMuNzA4LDAsNjUuMzk4LDEzLjEyNiw4OS4yMzMsMzYuOTYxYzUuODU5LDUuODU4LDE1LjM1Nyw1Ljg1OCwyMS4yMTYsMGMyMy44MzYtMjMuODM1LDU1LjUyNi0zNi45NjEsODkuMjMzLTM2Ljk2MQ0KCQkJYzMzLjcwOCwwLDY1LjM5NywxMy4xMjYsODkuMjMyLDM2Ljk2MUM0OTQuMjkxLDEzNi43NzcsNDk0LjMxNCwyMTYuODE0LDQ0NS4xNjUsMjY2LjAxOXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /></li>
            <li><img className="icon" alt="me-icon xZ" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTYuMDAxLDBjLTYxLjQyNywwLTExMS40LDQ5Ljk3NC0xMTEuNCwxMTEuMzk5YzAsNjEuNDI3LDQ5Ljk3NCwxMTEuNDAxLDExMS40LDExMS40MDFzMTExLjM5OC00OS45NzQsMTExLjM5OC0xMTEuNA0KCQkJQzM2Ny40LDQ5Ljk3NCwzMTcuNDI3LDAsMjU2LjAwMSwweiBNMjU2LjAwMSwxOTIuNzk5Yy00NC44ODUsMC04MS40LTM2LjUxNi04MS40LTgxLjRjMC00NC44ODMsMzYuNTE2LTgxLjM5OSw4MS40LTgxLjM5OQ0KCQkJYzQ0Ljg4MywwLDgxLjM5OCwzNi41MTYsODEuMzk4LDgxLjM5OUMzMzcuMzk5LDE1Ni4yODMsMzAwLjg4MywxOTIuNzk5LDI1Ni4wMDEsMTkyLjc5OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI1Ni4wMDEsMjg5LjJDMTQxLjQxOSwyODkuMiw0OC4yLDM4Mi40MTksNDguMiw0OTdjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWgzODUuNmM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1DQoJCQlDNDYzLjgsMzgyLjQxOSwzNzAuNTgyLDI4OS4yLDI1Ni4wMDEsMjg5LjJ6IE03OC44MjcsNDgyYzcuNjQtOTEuMDQ4LDg0LjE4NS0xNjIuOCwxNzcuMTc1LTE2Mi44DQoJCQljOTIuOTg4LDAsMTY5LjUzMiw3MS43NTIsMTc3LjE3MiwxNjIuOEg3OC44Mjd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /></li>
        </div>
    </nav>

    <main>
        <div className="wrap-main">
            <div className="feeds">
                {/* <!-- 스토리 --> */}
                <div className="story container">
                    {/* <!-- 반복*10 --> */}
                    <div className="user-story">
                        <img className="profile-story" src="https://www.beautycolorcode.com/2352c6.png" alt="" />
                        <p className="username-story">username</p>
                   </div> 

                </div>

                {/* <!-- 피드 --> */}
                <article className="feed container">
                    <nav className="users">
                        <div className="user">
                            <button className="user-profile-small-btn"><img src="https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg" className="user-profile-small" /></button>
                            <button style={{padding: '16px 0px',fontSize: '14px',fontWeight: '700', display: 'inline'}}>todayhouse</button>
                        </div>

                        <div className="meatball">
                            <img src={dots} alt="more-icon" />
                        </div>
                    </nav>

                    {/* <!-- 사진 --> */}
                    <div className="photo-wrap">
                        <img src={feedimg} alt="" className="post" />
                    </div>
                    {/* <!-- content --> */}
                    <div>
                        <nav className="content__bar" style={{display : 'flex'}}>
                            <ul className="contentul" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <li><input type="image" style={{width: '24px'}} src={like} alt="" /></li>
                                <li><input type="image" style={{width: '24px'}} src={chat} alt="" /></li>
                                <li><input type="image" style={{width: '24px'}} src={send} alt="" /></li>
                            </ul>
                            <button className="bookmark" style={{width: '24px',borderStyle: 'none',boxSizing: 'content-box',backgroundColor: 'transparent',paddingRight:'16px'}}><img  src={bookmark} alt="" /></button>
                            
                        </nav>                    
                        
                        <div className="contents">
                            <button className="howManyLikes" style={{fontSize: "14px", fontWeight: "700", borderStyle: "none", backgroundColor: "transparent", display: "inline"}}>좋아요 312개</button>
                            <ul className="commentList">
                                <li>
                                    <button style={{fontSize: '14px',fontWeight: '700', display: 'block',borderStyle: 'none',backgroundColor: 'white'}}>todayhouse</button>
                                    <span>오트밀 컬러로 아늑한 느낌내기..</span>
                                </li>
                                <li>
                                <button className="more-btn">더보기
                                </button>
                                </li>
                                <li>
                                    <button className="more-btn">댓글 24개 모두 보기</button>
                                </li>
                                <li>
                                    <button style={{fontSize: '14px',fontWeight: '700', display: 'inline',borderStyle: 'none',backgroundColor: 'white'}}>Username1
                                    </button>
                                    <span>링고 오랜만!! 즐거워 보여요~</span>
                                </li>
                                <li>
                                    <button style={{fontSize: '14px',fontWeight: '700', display: 'inline',borderStyle: 'none',backgroundColor: 'white'}}>Username2
                                    </button>
                                    <span>헐 오디야 너무 예쁘다🤍</span>
                                </li>
                        </ul>
                            <span className="time">1일 전</span>
                        </div>
                        {/* <!-- comment --> */}
                        <div className="comment container">
                            <input placeholder="댓글달기" classNasme="startcomment" />
                            <span><button className="lets-post">게시</button></span>
                        </div>
                    </div>
                </article>
                


            </div>
            <div className="main-right" style={{display: "none"}}>
                {/* <!-- profile --> */}
                <div className="profile">
                    <button className= "profile-img-large"><img src={mj} style={{width : '56px'}} /></button>
                    <button className= "username-feed user-btn-large">canon_mj</button>
                    <button className="transform">전환</button>
                </div>
                {/* <!-- recommand --> */}
                <div className="recommand">
                    <span>회원님을 위한 추천</span>
                    <button className="all">모두 보기</button>
                </div>
                <div className="recommand-list">
                    <div>
                        <button className="user-profile-small-btn"><img src="https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg" className="user-profile-small" /></button>
                        <span className="username-feed">todayhouse</span>
                    </div>
                    <div>
                        <button className="user-profile-small-btn"><img src="https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg" className="user-profile-small" /></button>
                        <span className="username-feed">todayhouse</span>
                    </div>
                    <div>
                        <button className="user-profile-small-btn"><img src="https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg" className="user-profile-small" /></button>
                        <span className="username-feed">todayhouse</span>
                    </div>
                    <div><button className="user-profile-small-btn"><img src="https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg" className="user-profile-small" /></button>
                        <span className="username-feed">todayhouse</span>
                    </div>
                    <div><button className="user-profile-small-btn"><img src="https://htmlcolors.com/gradients-images/34-asana-color-gradient.jpg" className="user-profile-small" /></button>
                        <span className="username-feed">todayhouse</span>
                    </div>
                </div>
                {/* <!-- 푸터 --> */}
                <footer>
                    <ul className="foot">
                        <li><a href="">소개</a></li>
                        <li><a href="">도움말</a></li>
                        <li><a href="">홍보센터</a></li>
                        <li><a href="">API</a></li>
                        <li><a href="">채용정보</a></li>
                        <li><a href="">개인정보처리방침</a></li>
                        <li><a href="">약관</a></li>
                        <li><a href="">위치</a></li>
                        <li><a href="">인기 계정</a></li>
                        <li><a href="">해시태그</a></li>
                        <li><a href="">언어</a></li>
                    </ul>
                    <p className="rights">20201 INSTAGRAM FROM FACEBOOK</p>
                </footer>
            </div>
        </div>
    </main>
</body>

        );
    }
}

export default Main;