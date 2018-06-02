import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search'
import VideosList from './components/videos_list'
import SearchBar from './components/search_bar'
import VideoDetails from './components/video_details'
import _ from 'lodash'
const API_KEY='AIzaSyCfeMqiIgPQ-9-jVEjGeZkkg7wBYgbkBa8';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {videos:[],SelectedVideo:null};
   this.SearchBy('League of Legends');
  
  }

  SearchBy(term) {
    YTSearch({key:API_KEY, term:term},(videos) => {   
      this.setState({videos:videos,SelectedVideo:videos[0]});
     });
  }
  render() {
    const videosdelayed = _.debounce((term)=> {this.SearchBy(term)},300);
    return (
      <div className="App container">
      <SearchBar onSearch={videosdelayed} />
      <VideoDetails video={this.state.SelectedVideo}/>
      <VideosList videos = {this.state.videos} onVideoSelect = {(SelectedVideo) => this.setState({SelectedVideo}) }/>
      
      </div>
    );
  }
}

export default App;
