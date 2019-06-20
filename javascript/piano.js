// Selectors
const splash = document.getElementById('splashscreen')
const playButton = document.getElementById('play-button')
const piano = document.getElementById('piano-container')
const keys = document.querySelectorAll('.key')
const canvasContainer = document.getElementById('canvas-container')

// Splash screen function.
function splashscreen() {
  setTimeout(() => {
    splash.className = "hide"
    piano.className = "hide"
    canvasContainer.className = "hide"
  }, 000);

  setTimeout(() => {
    splash.className = "transition"
  }, 2000);

  setTimeout(() => {
   splash.className = "transition hide"
 }, 4000);

  setTimeout(() => {
    splash.remove()
    piano.className = "transition"
  }, 6000);
}

splashscreen()

// Play note
function playNote(e){
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
         key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

   if(!key) return

   key.classList.add('playing');
   audio.currentTime = 0
   audio.play();
}

function removeTransition(e){
   if(e.propertyName !== 'transform') return;
   this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playNote);

// Show canvas
playButton.addEventListener("click", () => {
   setTimeout(() => {
      piano.className = "transition hide"
    }, 000);

    setTimeout(() => {
      piano.remove()
      canvasContainer.className = "transition"
    }, 2000);
})