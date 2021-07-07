import { useState, useEffect } from "react";
import "./App.css";
import { getVideos } from "./services/getVideos";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getVideos(query).then((data) => setVideos(data));
  }, [query]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) { 
    e.preventDefault();
    setQuery(search);
  }

  const [mainVideo,...restVideos]= [videos[0], ...videos]

  //console.log(mainVideo)
  console.log(restVideos)
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleSearch}></input>
        <button className="btn-search"></button>
      </form>
      <VideoList list={videos}/>
    </div>
  );
}

export default App;
