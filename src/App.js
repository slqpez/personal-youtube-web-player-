import {useState, useEffect} from 'react'
import ReactPlayer from "react-player"
import "./App.css";

function App() {
const [videos, setVideos] = useState([])
const [search, setSearch] = useState("")
const [query, setQuery] = useState("")

useEffect(()=>{
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${query}&type=video&videoDefinition=high&key=AIzaSyD1_1C9R6BoMrFDVuDX4PTz0sJrVjqFhEA`)
  .then(res=>res.json())
  .then(data=> setVideos(data.items))
},[query])
  

function handleSearch(e){
  setSearch(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setQuery(search)
}

  return <div className="App">
    <form onSubmit={handleSubmit}>
    <input value={search} onChange={handleSearch}></input>
  <button className="btn-search"></button>
    </form>

    {videos.map(item=> <div className="video"><ReactPlayer  controls width="400px" height="300px" key={item.id.videoId} url={`https://www.youtube.com/watch?v=${item.id.videoId}`} /></div>)}
  </div>;
}

export default App;
