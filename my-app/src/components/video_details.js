import React from 'react'

const VideoDetails= ({video}) =>{
    if(!video){
      return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
  const url = 'https://www.youtube.com/embed/'+videoId;
    return (
    <div className="video-detail" >
    <div className='embed-responsive embed-responsive-16by9'>
    <iframe title='lol'  src = {url} className ='embed-resposive-item' allowFullScreen></iframe>
    </div>
    <div className="details">
    <div><h2>{video.snippet.title}</h2></div>
    <div>{video.snippet.description}</div>
    </div>
    </div>
    );
}

export default VideoDetails;