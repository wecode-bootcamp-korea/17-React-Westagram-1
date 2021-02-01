import React, { Component } from 'react';

class FeedList extends Component {

  state = {
    feedList: [
      {
        id: 1,
        img: '../../../images/jongjin/종진.jpg',
        userName: 'playck'
      }
    ]
  }

  render() {
    const { feedList } = this.state
    return (
      <div className="friendList">
        <ul>
          { feedList.map( story => {
            return(
              <li key={story.id}><img alt="친구" src={story.img}/><p>{story.userName}</p></li>
            )
          })
          }
        </ul>
      </div>
    );
  }
}

export default FeedList;