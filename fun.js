function mostrarMensaje(){
    alert("Te has registrado!")
}
function redirigirAYouTube() {
  var videoId = "eDbekl4cs7Y";
  
  var youtubeURL = "https://www.youtube.com/watch?v=" + videoId;
  window.location.href = youtubeURL;
}

var verVideoBtn = document.getElementById('ver-video-btn');
verVideoBtn.addEventListener('click', redirigirAYouTube);
