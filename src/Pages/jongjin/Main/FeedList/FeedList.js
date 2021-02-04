import React, { Component } from 'react';
import './FeedList.scss'

class FeedList extends Component {
  
  render() {
    const { key, storyImg, user } = this.props
    return (
      <div className="story">
          <li key={key}><img alt="친구" src={storyImg}/><p>{user}</p></li>
      </div>
    );
  }
}

export default FeedList;