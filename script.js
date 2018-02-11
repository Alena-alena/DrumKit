function playSound(e) {
  var audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`)[0];
  var key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`)[0];
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  console.log(e);

  key.classList.add('playing');
}

function removeTransition(e) {
  this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');

keys.forEach(function(key) {
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
