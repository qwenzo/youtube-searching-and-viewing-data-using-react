import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search'
import VideosList from './components/videos_list'

const API_KEY='AIzaSyCfeMqiIgPQ-9-jVEjGeZkkg7wBYgbkBa8';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {videos:[]};
    YTSearch({key:API_KEY, term:'LoL'},(videos) => {   
      this.setState({videos});
     });
  }

  render() {
    return (
      <div className="App">
      <VideosList videos = {this.state.videos}/>
      </div>
    );
  }
}

export default App;
