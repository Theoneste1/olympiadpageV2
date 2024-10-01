// videos


  document.addEventListener('play', function(e){
    var videos = document.getElementsByTagName('video');
   
    for(var i = 0; i < videos.length; i++){
       
      if(videos[i] != e.target){
        videos[i].pause();
      }
    }
  }, true);



