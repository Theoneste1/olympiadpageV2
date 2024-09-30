// videos

console.log("Videos are provided")
console.log("_______________--------------------")
  document.addEventListener('play', function(e){
    var videos = document.getElementsByTagName('video');
    console.log(videos)
    for(var i = 0; i < videos.length; i++){
       
      if(videos[i] != e.target){
        videos[i].pause();
      }
    }
  }, true);
