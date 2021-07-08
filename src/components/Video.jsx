import React from "react";
import ReactPlayer from "react-player";
import "./video.css";
import moment from "moment";

export default function Video({ item }) {


  return (
    <div className="video">
      <ReactPlayer
        controls
        width="auto"
        height="auto"
        key={item.id.videoId}
        url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
      />
      <div>
        <p className="video-title">{item.snippet.title}</p>
        <p className="video-channel">{item.snippet.channelTitle}</p>
        <p className="video-time">{moment(`${item.snippet.publishTime}`, "YYYYMMDD").fromNow()}</p>
      </div>
    </div>
  );
}
