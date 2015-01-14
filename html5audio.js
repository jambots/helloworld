
var progressTimer;

var playButton;
var stopButton;
var activityIndicator;
var textPosition;

function onError(error) 
{
  console.log(error.message);
}

function onConfirmRetry(button) {
  if (button == 1) {
    html5audio.play();
  }
}

function pad2(number) {
  return (number < 10 ? '0' : '') + number
}

var isPlaying = false;
var readyStateInterval = null;


var myaudioURL;
var myaudio;

var html5audio = {
  play: function(){
    isPlaying = true;
    myaudio.play();
    readyStateInterval = setInterval(function(){
      if (myaudio.readyState <= 2) {
         //document.getElementById('page_listen_content_djDiv').innerHTML="Connecting...";
         //retrying=true;
         //buttonOn("listen", "playpause");
         //textPosition.innerHTML = 'loading...';
       }
    },1000);
    myaudio.addEventListener("error", function() {
       dbuga('myaudio ERROR');
    }, false);


    myaudio.addEventListener("playing", function() {
       dbuga('playing fired');
       isPlaying = true;
         buttonOn("listen", "playpause");
         retrying=false;
         updateNowPlaying();
       //playButton.style.display = 'none';
       //activityIndicator.style.display = 'none';
       //stopButton.style.display = 'block';
    }, false);


  },
  pause: function() {
    isPlaying = false;
    clearInterval(readyStateInterval);
    myaudio.pause();
    buttonOff("listen", "playpause");
    updateNowPlaying();
    //stopButton.style.display = 'none';
    //activityIndicator.style.display = 'none';
    //playButton.style.display = 'block';
  },
  stop: function() {
    isPlaying = false;
    clearInterval(readyStateInterval);
    myaudio.pause();
         buttonOff("listen", "playpause");
         updateNowPlaying();
    //stopButton.style.display = 'none';
    //activityIndicator.style.display = 'none';
    //playButton.style.display = 'block';
    myaudio = null;
    myaudio = new Audio(myaudioURL);
    //textPosition.innerHTML = '';
  }

/*
    myaudio.addEventListener("ended", function() {
       dbuga('myaudio ENDED');
       //html5audio.stop();
       // navigator.notification.alert('Streaming failed. Possibly due to a network error.', null, 'Stream error', 'OK');
       // navigator.notification.confirm(
       //  'Streaming failed. Possibly due to a network error.', // message
       //  onConfirmRetry,  // callback to invoke with index of button pressed
       //  'Stream error',  // title
       //  'Retry,OK'    // buttonLabels
       // );
       if (window.confirm('Streaming failed. Possibly due to a network error. Retry?')) {
         onConfirmRetry();
       }
    }, false);
    myaudio.addEventListener("timeupdate", function() {
       var s = parseInt(myaudio.currentTime % 60);
       var m = parseInt((myaudio.currentTime / 60) % 60);
       var h = parseInt(((myaudio.currentTime / 60) / 60) % 60);
       if (isPlaying && myaudio.currentTime > 0) {
         //textPosition.innerHTML = pad2(h) + ':' + pad2(m) + ':' + pad2(s);
       }
    }, false);

    myaudio.addEventListener("canplay", function() {
       dbuga('myaudio CAN PLAY');
    }, false);

    myaudio.addEventListener("waiting", function() {// doesn't fire on android for a minute :(
       dbuga('myaudio WAITING');
       //isPlaying = true;
       //playButton.style.display = 'none';
       //stopButton.style.display = 'none';
       //activityIndicator.style.display = 'block';
    }, false);
*/
};
