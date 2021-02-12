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
        description: "안녕하세요 flap Bear 입니다.",
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
          .then((data) => {
            console.log(data);
            this.setState({
              feedData: data.result
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
                  <img onClick={this.posting} alt="user_img" className="user_img" src="https://media.vlpt.us/images/c_hyun403/profile/529bf962-09fe-440a-aeee-19a1d0ce4470/%E1%84%8B%E1%85%A1%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC%E1%84%8A%E1%85%B3%E1%86%AB%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%86%BA%E1%84%87%E1%85%A6%E1%84%8B%E1%85%A5.jpeg?w=240" />
                  <div className="user_text">
                    <p className="userAccount">bear</p>
                    <span className="userNickname">안경쓴 곰</span>
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
