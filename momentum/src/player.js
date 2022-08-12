const list = require.context('./', true, /\.mp3$/i);

const audioContainer = document.querySelector('.audio-container');
const audio = document.querySelector('.audio');
const audioControls = document.querySelector('.audio-controls');

const playpause = document.querySelector('.playpause');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const volumeBar = document.querySelector('.volume-bar');
const currentTrackName = document.querySelector('.track-name');
const timeDuration = document.querySelector('.time-duration');
const timePassed = document.querySelector('.time-passed');
const volumeIcon = document.querySelector('.volume-icon');
const prevTrackBtn = document.querySelector('.prev-track');
const nextTrackBtn = document.querySelector('.next-track');
const trackList = document.querySelectorAll('source');

function playBack() {
   if (audio.paused) {
      audio.play();
      playpause.firstElementChild.textContent = 'pause';
   }
   else {
      audio.pause();
      rowPlayBtn[currentTrack].firstElementChild.textContent = 'play_arrow';
      playpause.firstElementChild.textContent = 'play_arrow';
   }
}

playpause.addEventListener('click', () => {
   playBack();
   if (audio.paused) rowPlayBtn[currentTrack].firstElementChild.textContent = 'play_arrow';
   else rowPlayBtn[currentTrack].firstElementChild.textContent = 'pause';

});

volumeBar.addEventListener('input', (e) => {
   audio.volume = volumeBar.value / 10;
})

volumeIcon.addEventListener('click', () => {
   if (!audio.muted) {
      audio.muted = !audio.muted;
      volumeIcon.firstChild.textContent = 'volume_off';
      progress.style.color = 'red';
   } else {
      audio.muted = !audio.muted;
      volumeIcon.firstChild.textContent = 'volume_up';
   }
   volumeBar.classList.toggle('volume-color-muted');
})

audio.addEventListener('loadedmetadata', function () {
   progress.setAttribute('max', audio.duration);
});

audio.addEventListener('timeupdate', () => {
   progress.value = audio.currentTime;
   timePassed.textContent = toMMSS(audio.currentTime);
})

progress.addEventListener('click', (e) => {
   let elementRect = e.target.getBoundingClientRect();
   let position = (e.pageX - elementRect.left) / elementRect.width;
   audio.currentTime = position * audio.duration;
})

audio.addEventListener('loadedmetadata', () => {
   timeDuration.textContent = toMMSS(audio.duration);
   currentTrackName.textContent = getName();
   for (let i of rowPlayBtn) {
      i.classList.remove('track-playing');
   }
   rowPlayBtn[currentTrack].classList.add('track-playing');
   // rowPlayBtn[currentTrack].trackLength.textContent = '123';
})

function getName() {
   return trackList[currentTrack].getAttribute('data-track-name');
}

function toMMSS(num) {
   let sec = String(Math.trunc(num % 60)).padStart(2, '0');
   let mins = Math.trunc(num / 60);
   return `${mins}:${sec}`;
}


/*    playlist    */

let currentTrack = 0;

audio.addEventListener('ended', () => {
   currentTrack++;
   setTrack();
   playBack();
});



function setTrack() {
   if (currentTrack > trackList.length - 1) currentTrack = 0;
   if (currentTrack < 0) currentTrack = trackList.length - 1;
   let songURL = list.keys()[currentTrack];
   audio.setAttribute('src', songURL);
   audio.load();
}
setTrack();

nextTrackBtn.addEventListener('click', () => {
   rowPlayBtn[currentTrack].firstElementChild.textContent = 'play_arrow';
   currentTrack++;
   if (currentTrack < trackList.length) rowPlayBtn[currentTrack].firstElementChild.textContent = 'pause';
   if (currentTrack === trackList.length) rowPlayBtn[0].firstElementChild.textContent = 'pause';
   setTrack();
   playBack();
})

prevTrackBtn.addEventListener('click', () => {
   rowPlayBtn[currentTrack].firstElementChild.textContent = 'play_arrow';
   currentTrack--;
   if (currentTrack >= 0) rowPlayBtn[currentTrack].firstElementChild.textContent = 'pause';
   setTrack();
   playBack();
})


//display playlist
const playlist = document.querySelector('.playlist');

for (let i = 0; i < trackList.length; i++) {
   const newRow = document.createElement('div');
   newRow.classList.add('playlist-row');
   newRow.innerHTML = `<button type="button" class="row-play-btn">
   <span class="material-symbols-outlined">
   play_arrow
   </span>
   </button>
   <div class="track-title"></div>
   <div class="track-length"></div>`;
   newRow.children[1].textContent = trackList[i].getAttribute('data-track-name');
   playlist.appendChild(newRow);
}

const rowPlayBtn = document.querySelectorAll('.row-play-btn');
const trackName = document.querySelectorAll('.track-title');
const trackLength = document.querySelectorAll('.track-length');

for (let i = 0; i < rowPlayBtn.length; i++) {
   rowPlayBtn[i].addEventListener('click', () => {
      if (i === currentTrack) playBack();
      else {
         rowPlayBtn[currentTrack].firstElementChild.textContent = 'play_arrow';
         currentTrack = i;
         setTrack();
         playBack();
      };
      if (audio.paused) rowPlayBtn[i].firstElementChild.textContent = 'play_arrow';
      else rowPlayBtn[i].firstElementChild.textContent = 'pause';
   });

   trackName[i].addEventListener('click', () => {
      if (i === currentTrack) playBack();
      else {
         rowPlayBtn[currentTrack].firstElementChild.textContent = 'play_arrow';
         currentTrack = i;
         rowPlayBtn[currentTrack].firstElementChild.textContent = 'pause';
         setTrack();
         playBack();
      }
      if (audio.paused) rowPlayBtn[i].firstElementChild.textContent = 'play_arrow';
      else rowPlayBtn[i].firstElementChild.textContent = 'pause';
   });
};

for (let i = 0; i < trackList.length; i++) {
   trackLength[i].textContent = toMMSS(trackList[i].getAttribute('data-duration'));
}
