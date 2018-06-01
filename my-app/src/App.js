import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search'


const API_KEY='AIzaSyCfeMqiIgPQ-9-jVEjGeZkkg7wBYgbkBa8';
class App extends Component {

  constructor(props){
    super(props);
    YTSearch({key:API_KEY, term:'term'},(videos) => {
       
     });
  }

  render() {
    return (
      <div className="App">
      lol
      </div>
    );
  }
}

export default App;
