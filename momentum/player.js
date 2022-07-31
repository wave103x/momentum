const audioContainer = document.querySelector('.audio-container');
const audio = document.querySelector('.audio');
const audioControls = document.querySelector('.audio-controls');

const playpause = document.querySelector('.playpause');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const volumeBar = document.querySelector('.volume-bar');
const audioName = document.querySelector('.audio-name');
const timeDuration = document.querySelector('.time-duration');
const timePassed = document.querySelector('.time-passed');
const volumeIcon = document.querySelector('.volume-icon');

playpause.addEventListener('click', () => {
   if (audio.paused) audio.play();
   else audio.pause();
});

audioName.addEventListener('click', () => {
   if (audio.paused) audio.play();
   else audio.pause();
});

volumeBar.addEventListener('input', (e) => {
   audio.volume = volumeBar.value / 10;
   console.log(audio.volume);
})

volumeIcon.addEventListener('click', () => {
   audio.muted = !audio.muted;
})

audio.addEventListener('timeupdate', () => {
   if (!progress.getAttribute('max')) progress.setAttribute('max', audio.duration);
   progress.value = audio.currentTime;
   timePassed.textContent = toMMSS(audio.currentTime);

})

progress.addEventListener('click', (e) => {
   let elementRect = e.target.getBoundingClientRect();
   let position = (e.pageX - elementRect.left) / elementRect.width;
   audio.currentTime = position * audio.duration;
})

function getName(audioUrl) {
   audioUrl = audioUrl.split(/(\\|\/)/g).pop().split('.').shift();
   return audioUrl.charAt(0).toUpperCase() + audioUrl.slice(1);
}

audioName.textContent = getName(audio.src);

audio.addEventListener('loadedmetadata', () => {
   timeDuration.textContent = toMMSS(audio.duration);
})

function toMMSS(num) {
   sec = String(Math.trunc(num % 60)).padStart(2, '0');
   mins = Math.trunc(num / 60);
   return `${mins}:${sec}`;
}

