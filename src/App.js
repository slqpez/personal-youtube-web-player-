import { useState, useEffect } from "react";
import "./App.css";
import { getVideos } from "./services/getVideos";
import VideoList from "./components/VideoList";
import Video from "./components/Video";

function App() {
  const [videos, setVideos] = useState([]);
  const [mainVideo, setMainVideo] = useState({});
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
  
    getVideos(query)
      .then((videos) => {
        console.log(videos)
        setVideos(videos.slice(1, videos.length));
        setMainVideo(videos[0]);
      })
      .catch((error) => console.log(error));
  }, [query]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <div className="mainSection">
        <form onSubmit={handleSubmit}>
          <input value={search} onChange={handleSearch}></input>
          <button className="btn-search"></button>
        </form>

        {Object.keys(mainVideo).length === 0 ? null : (
          <div className="mainVideo">
            <Video item={mainVideo}></Video>
          </div>
        )}
      </div>
      <div className="listSection">
        <VideoList list={videos} />
      </div>
    </div>
  );
}

export default App;
