import React from 'react'
import ReactPlayer from "react-player";
import "./video.css"


export default function Video({item}) {
    return (
        <div className="video">
             <ReactPlayer
            controls
            width="150px"
            height="150px"
            key={item.id.videoId}
            url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
          />
        </div>
    )
}
