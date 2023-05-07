//your JS code here. If required.
var audio = null;

function playSound(filename) {
  if (audio !== null) {
    stopSound();
  }
  audio = new Audio("sounds/" + filename);
  audio.play();
}

function stopSound() {
  if (audio !== null) {
    audio.pause();
    audio.currentTime = 0;
    audio = null;
  }
}
