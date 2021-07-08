import React from "react";
import ReactPlayer from "react-player";
import "./video.css";

export default function Video({ item }) {
  return (
    <div className="video">
      <ReactPlayer
        controls
        width="110px"
        height="110px"
        key={item.id.videoId}
        url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
      />
      <div>
        <p>{item.snippet.channelTitle}</p>
        <p>{item.snippet.title}</p>
        <p>{item.snippet.publishTime}</p>
      </div>
    </div>
  );
}
