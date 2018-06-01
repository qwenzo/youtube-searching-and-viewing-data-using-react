import React from 'react'

const VideosList = (props) =>{
 //  const videos= props.videos.map((video) => { return < /> });
    return (
        <ul className="col-md-4 list-group" >{props.videos.length}</ul>
    )
}

export default VideosList