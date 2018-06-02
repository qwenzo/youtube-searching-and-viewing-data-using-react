import React from 'react'
import VideoItem from './video_item'
const VideosList = (props) =>{
   const videos= props.videos.map((video) => { return <VideoItem onVideoSelect = {props.onVideoSelect} key ={video.etag} video={video} />});
    return (
        <div ><ul className="list-group" >{videos}</ul></div>
    )
}

export default VideosList