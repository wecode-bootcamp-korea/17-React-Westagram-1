import React, { Component } from 'react';
import Story from '../Story/Story'
import "./StoriesList.scss";

class StoriesList extends Component {
  constructor(){
    super();
    this.state = {
      storyData: []
    }
  }

  componentDidMount(){
    fetch("/data/stotierDate.json")
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        storyData: data,
      });
    }); 
  }
  horizontalScroll = e => {
    // e.preventDefalut()
    let containerScrollPosition = e.target.scrollLeft
    e.target.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: 'smooth' //if you want smooth scrolling
    })
    // console.log(containerScrollPosition)
  }

  render() {
    const {storyData} = this.state;
    const liStyle = {
      transform: `translateX(${storyData.length*88}px)`, 
      marginLeft:'10px'
    }
    return (
      <div className="StoriesList">
        <div onWheel={this.horizontalScroll} className="story_container">
          <ul className="story_list">
            <li style={{transform: 'translateX(0px)', marginLeft:'10px'}}></li>
            <li style={liStyle}></li>
            {storyData.map((story) => {
              return(
                <Story 
                  key = {story.id}
                  id = {story.id}
                  storyImgSrc = {story.storyImgSrc}
                  userId = {story.userId}
                />
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default StoriesList;