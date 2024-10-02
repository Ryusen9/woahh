const url = 'https://whoa.onrender.com/whoas/random'

function fetchUrl(){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const poster = data[0].poster;
    const movieName = data[0].movie;
    const audio = data[0].audio;
    const character = data[0].character;
    const video1080p = data[0].video["1080p"];
    const dialogLine = data[0].full_line;

    const MoviePoster = document.getElementById('movie-poster');
    MoviePoster.src = poster;
    const movieNameOf = document.getElementById('movie-name');
    movieNameOf.innerText = movieName;
    const characterName = document.getElementById('character-name');
    characterName.innerHTML = `Character Name : ${character}`
    const videoContainer = document.getElementById('video-content');
    videoContainer.src = video1080p;
    const audioElement = document.getElementById('audio-content');
    audioElement.src = audio;
    const dialogElement = document.getElementById('dialogue');
    dialogElement.innerText = `"${dialogLine}"`
  }) 
}
