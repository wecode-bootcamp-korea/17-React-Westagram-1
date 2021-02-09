import React, { Component } from 'react';
import "./Story.scss";

class Story extends Component {
  constructor(){
    super();
    this.state = {
      storyData: []
    }
  }

  componentDidMount(){
    fetch("/data/MOCK_DATA.json")
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        storyData: data,
      });
    }); 
  }
  horizontalScroll = (e) => {
    // e.preventDefalut()
    let containerScrollPosition = e.target.scrollLeft
    e.target.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: 'smooth' //if you want smooth scrolling
    })
    console.log(containerScrollPosition)
  }

  render() {
    const {storyData} = this.state;
    const liStyle = {
      transform: 'translateX({10}px)', 
      marginLeft:'10px'}
    return (
      <div className="Story">
        <div onWheel={this.horizontalScroll} className="story_container">
          <ul className="story_list">
            <li style={{transform: 'translateX(0px)', marginLeft:'10px'}}></li>
            <li style={liStyle}></li>
            <li className="story_list_item">
              <div className="story_img">
                <img className="story_user_img" alt="story_user_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p750x750/76800637_2011835388920141_7172388227145785216_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=PuKQPinQuD8AX8cpdmb&tp=1&oh=57a8fa03771162ead047cdcec7f27b99&oe=604B1102" />
              </div>
              <div className="story_user_id">run_dog</div>
            </li>
            {storyData.map((story) => {
              return(
                <li className="story_list_item">
                  <div className="story_img">
                    <img className="story_user_img" alt="story_user_img" src={story.storyImgSrc} />
                  </div>
                  <div className="story_user_id">{story.userId}</div>
                </li>
              )
            })}
            
          </ul>
        </div>

      </div>
    );
  }
}

export default Story;