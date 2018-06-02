import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search'
import VideosList from './components/videos_list'
import SearchBar from './components/search_bar'
import _ from 'lodash'
const API_KEY='AIzaSyCfeMqiIgPQ-9-jVEjGeZkkg7wBYgbkBa8';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {videos:[]};
   this.SearchBy('League of Legends');
  }

  SearchBy(term) {
    YTSearch({key:API_KEY, term:term},(videos) => {   
      this.setState({videos});
     });
  }
  render() {
    const videosdelayed = _.debounce((term)=> {this.SearchBy(term)},300);
    return (
      <div className="App container">
      <SearchBar onSearch={videosdelayed} />
      <VideosList videos = {this.state.videos}/>
      
      </div>
    );
  }
}

export default App;
