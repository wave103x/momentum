/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src sync recursive \\.mp3$/":
/*!***************************!*\
  !*** ./src/ sync \.mp3$/ ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./assets/pandora.mp3": "./src/assets/pandora.mp3",
	"./assets/track2.mp3": "./src/assets/track2.mp3",
	"./assets/track3.mp3": "./src/assets/track3.mp3",
	"./assets/track4.mp3": "./src/assets/track4.mp3",
	"./assets/track5.mp3": "./src/assets/track5.mp3"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive \\.mp3$/";

/***/ }),

/***/ "./src/assets/pandora.mp3":
/*!********************************!*\
  !*** ./src/assets/pandora.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/pandora.mp3";

/***/ }),

/***/ "./src/assets/track2.mp3":
/*!*******************************!*\
  !*** ./src/assets/track2.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/track2.mp3";

/***/ }),

/***/ "./src/assets/track3.mp3":
/*!*******************************!*\
  !*** ./src/assets/track3.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/track3.mp3";

/***/ }),

/***/ "./src/assets/track4.mp3":
/*!*******************************!*\
  !*** ./src/assets/track4.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/track4.mp3";

/***/ }),

/***/ "./src/assets/track5.mp3":
/*!*******************************!*\
  !*** ./src/assets/track5.mp3 ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/track5.mp3";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
const list = __webpack_require__("./src sync recursive \\.mp3$/");

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7O0FDZkEsYUFBYSxvREFBc0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSyxHQUFHLElBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21vbWVudHVtLy4vc3JjfHN5bmN8QTovLm1wMyQvaSIsIndlYnBhY2s6Ly9tb21lbnR1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb21lbnR1bS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21vbWVudHVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvcGxheWVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hc3NldHMvcGFuZG9yYS5tcDNcIjogXCIuL3NyYy9hc3NldHMvcGFuZG9yYS5tcDNcIixcblx0XCIuL2Fzc2V0cy90cmFjazIubXAzXCI6IFwiLi9zcmMvYXNzZXRzL3RyYWNrMi5tcDNcIixcblx0XCIuL2Fzc2V0cy90cmFjazMubXAzXCI6IFwiLi9zcmMvYXNzZXRzL3RyYWNrMy5tcDNcIixcblx0XCIuL2Fzc2V0cy90cmFjazQubXAzXCI6IFwiLi9zcmMvYXNzZXRzL3RyYWNrNC5tcDNcIixcblx0XCIuL2Fzc2V0cy90cmFjazUubXAzXCI6IFwiLi9zcmMvYXNzZXRzL3RyYWNrNS5tcDNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXFxcXC5tcDMkL1wiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImNvbnN0IGxpc3QgPSByZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL1xcLm1wMyQvaSk7XHJcblxyXG5jb25zdCBhdWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jb250YWluZXInKTtcclxuY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8nKTtcclxuY29uc3QgYXVkaW9Db250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jb250cm9scycpO1xyXG5cclxuY29uc3QgcGxheXBhdXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlwYXVzZScpO1xyXG5jb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcycpO1xyXG5jb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXInKTtcclxuY29uc3Qgdm9sdW1lQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZS1iYXInKTtcclxuY29uc3QgY3VycmVudFRyYWNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFjay1uYW1lJyk7XHJcbmNvbnN0IHRpbWVEdXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lLWR1cmF0aW9uJyk7XHJcbmNvbnN0IHRpbWVQYXNzZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZS1wYXNzZWQnKTtcclxuY29uc3Qgdm9sdW1lSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWUtaWNvbicpO1xyXG5jb25zdCBwcmV2VHJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldi10cmFjaycpO1xyXG5jb25zdCBuZXh0VHJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC10cmFjaycpO1xyXG5jb25zdCB0cmFja0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzb3VyY2UnKTtcclxuXHJcbmZ1bmN0aW9uIHBsYXlCYWNrKCkge1xyXG4gICBpZiAoYXVkaW8ucGF1c2VkKSB7XHJcbiAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgcGxheXBhdXNlLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ3BhdXNlJztcclxuICAgfVxyXG4gICBlbHNlIHtcclxuICAgICAgYXVkaW8ucGF1c2UoKTtcclxuICAgICAgcm93UGxheUJ0bltjdXJyZW50VHJhY2tdLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ3BsYXlfYXJyb3cnO1xyXG4gICAgICBwbGF5cGF1c2UuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAncGxheV9hcnJvdyc7XHJcbiAgIH1cclxufVxyXG5cclxucGxheXBhdXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICBwbGF5QmFjaygpO1xyXG4gICBpZiAoYXVkaW8ucGF1c2VkKSByb3dQbGF5QnRuW2N1cnJlbnRUcmFja10uZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAncGxheV9hcnJvdyc7XHJcbiAgIGVsc2Ugcm93UGxheUJ0bltjdXJyZW50VHJhY2tdLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ3BhdXNlJztcclxuXHJcbn0pO1xyXG5cclxudm9sdW1lQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgYXVkaW8udm9sdW1lID0gdm9sdW1lQmFyLnZhbHVlIC8gMTA7XHJcbn0pXHJcblxyXG52b2x1bWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICBpZiAoIWF1ZGlvLm11dGVkKSB7XHJcbiAgICAgIGF1ZGlvLm11dGVkID0gIWF1ZGlvLm11dGVkO1xyXG4gICAgICB2b2x1bWVJY29uLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSAndm9sdW1lX29mZic7XHJcbiAgICAgIHByb2dyZXNzLnN0eWxlLmNvbG9yID0gJ3JlZCc7XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgIGF1ZGlvLm11dGVkID0gIWF1ZGlvLm11dGVkO1xyXG4gICAgICB2b2x1bWVJY29uLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSAndm9sdW1lX3VwJztcclxuICAgfVxyXG4gICB2b2x1bWVCYXIuY2xhc3NMaXN0LnRvZ2dsZSgndm9sdW1lLWNvbG9yLW11dGVkJyk7XHJcbn0pXHJcblxyXG5hdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uICgpIHtcclxuICAgcHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCdtYXgnLCBhdWRpby5kdXJhdGlvbik7XHJcbn0pO1xyXG5cclxuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpID0+IHtcclxuICAgcHJvZ3Jlc3MudmFsdWUgPSBhdWRpby5jdXJyZW50VGltZTtcclxuICAgdGltZVBhc3NlZC50ZXh0Q29udGVudCA9IHRvTU1TUyhhdWRpby5jdXJyZW50VGltZSk7XHJcbn0pXHJcblxyXG5wcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgIGxldCBlbGVtZW50UmVjdCA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICBsZXQgcG9zaXRpb24gPSAoZS5wYWdlWCAtIGVsZW1lbnRSZWN0LmxlZnQpIC8gZWxlbWVudFJlY3Qud2lkdGg7XHJcbiAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gcG9zaXRpb24gKiBhdWRpby5kdXJhdGlvbjtcclxufSlcclxuXHJcbmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xyXG4gICB0aW1lRHVyYXRpb24udGV4dENvbnRlbnQgPSB0b01NU1MoYXVkaW8uZHVyYXRpb24pO1xyXG4gICBjdXJyZW50VHJhY2tOYW1lLnRleHRDb250ZW50ID0gZ2V0TmFtZSgpO1xyXG4gICBmb3IgKGxldCBpIG9mIHJvd1BsYXlCdG4pIHtcclxuICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCd0cmFjay1wbGF5aW5nJyk7XHJcbiAgIH1cclxuICAgcm93UGxheUJ0bltjdXJyZW50VHJhY2tdLmNsYXNzTGlzdC5hZGQoJ3RyYWNrLXBsYXlpbmcnKTtcclxuICAgLy8gcm93UGxheUJ0bltjdXJyZW50VHJhY2tdLnRyYWNrTGVuZ3RoLnRleHRDb250ZW50ID0gJzEyMyc7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBnZXROYW1lKCkge1xyXG4gICByZXR1cm4gdHJhY2tMaXN0W2N1cnJlbnRUcmFja10uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYWNrLW5hbWUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9NTVNTKG51bSkge1xyXG4gICBsZXQgc2VjID0gU3RyaW5nKE1hdGgudHJ1bmMobnVtICUgNjApKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICBsZXQgbWlucyA9IE1hdGgudHJ1bmMobnVtIC8gNjApO1xyXG4gICByZXR1cm4gYCR7bWluc306JHtzZWN9YDtcclxufVxyXG5cclxuXHJcbi8qICAgIHBsYXlsaXN0ICAgICovXHJcblxyXG5sZXQgY3VycmVudFRyYWNrID0gMDtcclxuXHJcbmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xyXG4gICBjdXJyZW50VHJhY2srKztcclxuICAgc2V0VHJhY2soKTtcclxuICAgcGxheUJhY2soKTtcclxufSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNldFRyYWNrKCkge1xyXG4gICBpZiAoY3VycmVudFRyYWNrID4gdHJhY2tMaXN0Lmxlbmd0aCAtIDEpIGN1cnJlbnRUcmFjayA9IDA7XHJcbiAgIGlmIChjdXJyZW50VHJhY2sgPCAwKSBjdXJyZW50VHJhY2sgPSB0cmFja0xpc3QubGVuZ3RoIC0gMTtcclxuICAgbGV0IHNvbmdVUkwgPSBsaXN0LmtleXMoKVtjdXJyZW50VHJhY2tdO1xyXG4gICBhdWRpby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvbmdVUkwpO1xyXG4gICBhdWRpby5sb2FkKCk7XHJcbn1cclxuc2V0VHJhY2soKTtcclxuXHJcbm5leHRUcmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgcm93UGxheUJ0bltjdXJyZW50VHJhY2tdLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ3BsYXlfYXJyb3cnO1xyXG4gICBjdXJyZW50VHJhY2srKztcclxuICAgaWYgKGN1cnJlbnRUcmFjayA8IHRyYWNrTGlzdC5sZW5ndGgpIHJvd1BsYXlCdG5bY3VycmVudFRyYWNrXS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdwYXVzZSc7XHJcbiAgIGlmIChjdXJyZW50VHJhY2sgPT09IHRyYWNrTGlzdC5sZW5ndGgpIHJvd1BsYXlCdG5bMF0uZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAncGF1c2UnO1xyXG4gICBzZXRUcmFjaygpO1xyXG4gICBwbGF5QmFjaygpO1xyXG59KVxyXG5cclxucHJldlRyYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICByb3dQbGF5QnRuW2N1cnJlbnRUcmFja10uZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAncGxheV9hcnJvdyc7XHJcbiAgIGN1cnJlbnRUcmFjay0tO1xyXG4gICBpZiAoY3VycmVudFRyYWNrID49IDApIHJvd1BsYXlCdG5bY3VycmVudFRyYWNrXS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdwYXVzZSc7XHJcbiAgIHNldFRyYWNrKCk7XHJcbiAgIHBsYXlCYWNrKCk7XHJcbn0pXHJcblxyXG5cclxuLy9kaXNwbGF5IHBsYXlsaXN0XHJcbmNvbnN0IHBsYXlsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlsaXN0Jyk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgbmV3Um93LmNsYXNzTGlzdC5hZGQoJ3BsYXlsaXN0LXJvdycpO1xyXG4gICBuZXdSb3cuaW5uZXJIVE1MID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicm93LXBsYXktYnRuXCI+XHJcbiAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxyXG4gICBwbGF5X2Fycm93XHJcbiAgIDwvc3Bhbj5cclxuICAgPC9idXR0b24+XHJcbiAgIDxkaXYgY2xhc3M9XCJ0cmFjay10aXRsZVwiPjwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwidHJhY2stbGVuZ3RoXCI+PC9kaXY+YDtcclxuICAgbmV3Um93LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdHJhY2tMaXN0W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFjay1uYW1lJyk7XHJcbiAgIHBsYXlsaXN0LmFwcGVuZENoaWxkKG5ld1Jvdyk7XHJcbn1cclxuXHJcbmNvbnN0IHJvd1BsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucm93LXBsYXktYnRuJyk7XHJcbmNvbnN0IHRyYWNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFjay10aXRsZScpO1xyXG5jb25zdCB0cmFja0xlbmd0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFjay1sZW5ndGgnKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcm93UGxheUJ0bi5sZW5ndGg7IGkrKykge1xyXG4gICByb3dQbGF5QnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAoaSA9PT0gY3VycmVudFRyYWNrKSBwbGF5QmFjaygpO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICAgcm93UGxheUJ0bltjdXJyZW50VHJhY2tdLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ3BsYXlfYXJyb3cnO1xyXG4gICAgICAgICBjdXJyZW50VHJhY2sgPSBpO1xyXG4gICAgICAgICBzZXRUcmFjaygpO1xyXG4gICAgICAgICBwbGF5QmFjaygpO1xyXG4gICAgICB9O1xyXG4gICAgICBpZiAoYXVkaW8ucGF1c2VkKSByb3dQbGF5QnRuW2ldLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ3BsYXlfYXJyb3cnO1xyXG4gICAgICBlbHNlIHJvd1BsYXlCdG5baV0uZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAncGF1c2UnO1xyXG4gICB9KTtcclxuXHJcbiAgIHRyYWNrTmFtZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgaWYgKGkgPT09IGN1cnJlbnRUcmFjaykgcGxheUJhY2soKTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgIHJvd1BsYXlCdG5bY3VycmVudFRyYWNrXS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9ICdwbGF5X2Fycm93JztcclxuICAgICAgICAgY3VycmVudFRyYWNrID0gaTtcclxuICAgICAgICAgcm93UGxheUJ0bltjdXJyZW50VHJhY2tdLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ3BhdXNlJztcclxuICAgICAgICAgc2V0VHJhY2soKTtcclxuICAgICAgICAgcGxheUJhY2soKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYXVkaW8ucGF1c2VkKSByb3dQbGF5QnRuW2ldLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gJ3BsYXlfYXJyb3cnO1xyXG4gICAgICBlbHNlIHJvd1BsYXlCdG5baV0uZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSAncGF1c2UnO1xyXG4gICB9KTtcclxufTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgIHRyYWNrTGVuZ3RoW2ldLnRleHRDb250ZW50ID0gdG9NTVNTKHRyYWNrTGlzdFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZHVyYXRpb24nKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9