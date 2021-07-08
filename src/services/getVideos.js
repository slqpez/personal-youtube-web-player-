
const API_KEY = process.env.REACT_APP_API_KEY



export function getVideos(item){
    const query = item?item: "lit"
    const API_URI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${query}&type=video&videoDefinition=high&key=${API_KEY}`
    console.log(API_URI)
   return  fetch(API_URI)
    .then(response => response.json())
    .then(data => data.items)
}
