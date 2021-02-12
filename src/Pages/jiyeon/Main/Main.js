import React from "react";
import Nav from "./Components/Nav/Nav";
import StoriesList from "./Components/StoriesList/StoriesList";
import Feed from "./Components/Feed/Feed";
import "./Main.scss";

class MainJY extends React.Component {
  constructor() {
    super();
    this.state = {
      feedData: [],
    };
  }

  // componentDidMount() {
  //   fetch("/data/feedData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({
  //         feedData: data,
  //       });
  //     });
  // }
  
//   componentDidMount(){
//     fetch("http://192.168.43.198:8000/posting", {
//       method: 'get',
//       headers: {
//         Authorization: token
//       },
//     })
//     .then((res) => res.json())
//     .then((result) => {
//       console.log(result);
//       this.setState({
//         feedData: result.겟또
//       })
//   })
// }

  posting = (event) => {
      // const {feedData} = this.state
    event.preventDefault();

    let token = localStorage.getItem('token');
    fetch("http://192.168.43.198:8000/posting", {
      method: 'POST',
      headers: {
        Authorization: token
      },
      body: JSON.stringify({
        image_url: "https://media.vlpt.us/images/c_hyun403/profile/529bf962-09fe-440a-aeee-19a1d0ce4470/%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8A%E1%85%B3%E1%86%AB%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%BA%E1%84%87%E1%85%A6%E1%84%8B%E1%85%A5.jpeg?w=240",
        description: "드디어 성공!!",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === "SUCCESS") {
          fetch("http://192.168.43.198:8000/posting", {
            method: 'get',
            headers: {
              Authorization: token
            },
          })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            this.setState({
              feedData: result.겟또
            })
          alert("GET 성공")
        });
    } else {
      alert("GET 실패")
    }
  });
  }  




    render() {
    const {feedData} = this.state;
      
    return (
      <div className="Main">
        <Nav />
        <main>
          <div className="main_container">
            <div className="feeds">
              <button onClick={this.posting}>posting 하기</button>
              <StoriesList />
              {feedData.map((feed) => {
                return (
                <Feed
                  // key={feed.id}
                  // id={feed.id}
                  // accountImg={feed.accountImg}
                  // accountName={feed.accountName}
                  // userComment={feed.userComment}
                  // feedPlace={feed.feedPlace}
                  // feedImg={feed.feedImg}
                  // likeAccountImg={feed.likeAccountImg}
                  // likeAccountCount={feed.likeAccountCount}
                  key = {feed.id}
                  id = {feed.id}
                  accountName = {feed.name}
                  feedImg = {feed.image_url}
                  userComment = {feed.description}
                />
              );
        })}
            </div>
            <div className="main-right">
              <div className="right_container">
                <div className="userAcconut_container">
                  <div className="user_detail">
                  <img alt="user_img" className="user_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/94368627_630268440862734_1319761630933811200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=fFVUpWOvd-QAX-gXsKX&tp=1&oh=103e707a288d14bdda8d43029bfff699&oe=6033FE63" />
                  <div className="user_text">
                    <p className="userAccount">jamongs824</p>
                    <span className="userNickname">자몽누나</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default MainJY;
