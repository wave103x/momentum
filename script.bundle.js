/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/deeds.css":
/*!***********************!*\
  !*** ./src/deeds.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style-player.css":
/*!******************************!*\
  !*** ./src/style-player.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/trans.js":
/*!**********************!*\
  !*** ./src/trans.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "langObj": () => (/* binding */ langObj)
/* harmony export */ });


const langObj = {
    "title": {
        "en": "momentum",
        "ru": "моментум"
    },
    "lng-wind": {
        "en": "Wind speed",
        "ru": "Скорость ветра",
    },
    "lng-humid": {
        "en": "Humidity",
        "ru": "Влажность",
    },
    "lng-wind-speed": {
        "en": "m/s",
        "ru": "м/с",
    },
    "links__btn": {
        "en": "Links",
        "ru": "Ссылки",
    },
    "deeds__btn": {
        "en": "To do",
        "ru": "Записки",
    },
    "settings__btn": {
        "en": "Settings",
        "ru": "Настройки",
    },
    "links__add-link-btn": {
        "en": "create",
        "ru": "добавить",
    },
    "window-link__btn-edit": {
        "en": "edit",
        "ru": "изменить",
    },
    "window-link__btn-del": {
        "en": "del",
        "ru": "удалить",
    },
    "deeds__add-task-btn": {
        "en": "add",
        "ru": "добавить",
    },
    "window-task__btn-edit": {
        "en": "edit",
        "ru": "изменить",
    },
    "window-task__btn-del": {
        "en": "del",
        "ru": "удалить",
    },
    "set-lang": {
        "en": "lang",
        "ru": "язык",
    },
    "set-img": {
        "en": "img src",
        "ru": "источник картинок",
    },
    "set-mood": {
        "en": "img mood",
        "ru": "тема картинок",
    },
    "set-hide": {
        "en": "hide widget",
        "ru": "скрыть элемент",
    },
    "enter-name": {
        "en": "[Enter name]",
        "ru": "[Введите имя]",
    },
    "enter-city": {
        "en": "[Enter city]",
        "ru": "[Введите город]",
    },
    "temperature": {
        "en": "[Invalid city]",
        "ru": "[Неверный город]",
    }
    ,
    "lng-time": {
        "en": "time",
        "ru": "время",
    }
    ,
    "lng-day": {
        "en": "date",
        "ru": "дата",
    }
    ,
    "lng-greet": {
        "en": "greetings",
        "ru": "приветствие",
    }
    ,
    "lng-quotes": {
        "en": "quote",
        "ru": "цитата",
    }
    ,
    "lng-weather": {
        "en": "weather",
        "ru": "погода",
    }
    ,
    "lng-audio": {
        "en": "audio",
        "ru": "аудио",
    }
    ,
    "lng-links": {
        "en": "links",
        "ru": "ссылки",
    }
    ,
    "lng-deeds": {
        "en": "to do",
        "ru": "список дел",
    }
}



/***/ }),

/***/ "./src/assets/githubLogo.svg":
/*!***********************************!*\
  !*** ./src/assets/githubLogo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/githubLogo.svg";

/***/ }),

/***/ "./src/assets/quotes.json":
/*!********************************!*\
  !*** ./src/assets/quotes.json ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/quotes.json";

/***/ }),

/***/ "./src/assets/rs_school_js.svg":
/*!*************************************!*\
  !*** ./src/assets/rs_school_js.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rs_school_js.svg";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_player_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-player.css */ "./src/style-player.css");
/* harmony import */ var _deeds_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deeds.css */ "./src/deeds.css");
/* harmony import */ var _trans_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trans.js */ "./src/trans.js");
/* harmony import */ var _assets_quotes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/quotes.json */ "./src/assets/quotes.json");
/* harmony import */ var _assets_githubLogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/githubLogo.svg */ "./src/assets/githubLogo.svg");
/* harmony import */ var _assets_rs_school_js_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/rs_school_js.svg */ "./src/assets/rs_school_js.svg");








const todayTime = document.querySelector('.time');
const sayHello = document.querySelector('.hello-to-name');
const weatherWordInput = document.querySelector('.input-weather-city');
let weatherSearchWord = '';

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const main = document.querySelector('.main');
const inputMood = document.querySelector('#input-mood');
const radiosLang = document.querySelectorAll('input[name="radio-lang"]');

console.log('API погоды находит подчас неожиданные города, выдавая ошибку далеко не сразу');

//settings
let settingsObj = {
    lang: 'en',
    bg: 'git',
    mood: '',
    hide: {
        time: 0,
        "center-date": 0,
        greetings: 0,
        quotes: 0,
        weather: 0,
        'audio-container': 0,
        links: 0,
        deeds: 0,
    },
    city: 'Minsk',
};

if (localStorage.getItem('settingsObj')) {
    settingsObj = JSON.parse(localStorage.getItem('settingsObj'));

    inputMood.value = settingsObj.mood;
    if (settingsObj.lang === 'ru') radiosLang[1].checked = true;
    else radiosLang[0].checked = true;
}
function applySettings(obj) {
    loadHides()
    changeLang(settingsObj.lang);
    weatherUpdate(obj.lang, obj.city);
    dateUpdate();
    getQuotes();
}

setInterval(dateUpdate, 1000);

applySettings(settingsObj);

//change lang on click
for (let i = 0; i < radiosLang.length; i++)
    radiosLang[i].addEventListener('click', e => {
        settingsObj.lang = radiosLang[i].value;
        localStorage.setItem('settingsObj', JSON.stringify(settingsObj));

        applySettings(settingsObj);
    });

switch (settingsObj.bg) {
    case 'git':
        setImgGit();
        break;
    case 'unsp':
        setImgUnsp(settingsObj.mood);
        break;
    case 'flickr':
        setImgFlickr(settingsObj.mood);
        break;
};

//change lang

function changeLang(lang) {
    if (lang === 'ru' && settingsObj.city.toLocaleLowerCase() === 'minsk') settingsObj.city = 'Минск';
    if (lang === 'en' && settingsObj.city.toLocaleLowerCase() === 'минск') settingsObj.city = 'Minsk';

    document.title = capitalFirstLetter(_trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj.title[lang]);
    document.querySelector('input[name="nameChoose"]').placeholder = _trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj["enter-name"][lang]
    document.querySelector('input[name="weatherCity"]').placeholder = _trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj["enter-city"][lang]
    for (let i in _trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj) {
        if (document.querySelector('.' + i)) {
            document.querySelector('.' + i).textContent = _trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj[i][lang];
        }
    }
}



/*      weather          */
weatherWordInput.addEventListener('keypress', e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        e.preventDefault();
        if (weatherWordInput.value === '' || weatherWordInput.value === null) {
            showInvalidWeather()
        } else {
            settingsObj.city = capitalFirstLetter(weatherWordInput.value);
            weatherUpdate(settingsObj.lang, settingsObj.city);
            localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
        }
    }

});

function weatherUpdate(lang, city = 'Minsk') {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&lang=${lang}&key=4BSGFC52XJ96N6F5WJFYM8M4P&contentType=json`, {
        "method": "GET",
        "headers": {
        }
    })
        .then(function (response) { return response.json() })
        .then(response => {
            document.querySelector('.temperature').innerHTML = response.currentConditions.feelslike + '&deg;';
            document.querySelector('.conditions').innerHTML = response.currentConditions.conditions;
            document.querySelector('.wind-speed').innerHTML = `<span class="opacity70">${_trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj["lng-wind"][lang]}</span> ${Math.round(response.currentConditions.windspeed)} ${_trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj["lng-wind-speed"][lang]}`;
            document.querySelector('.humidity').innerHTML = `<span class="opacity70">${_trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj["lng-humid"][lang]}</span> ${Math.round(response.currentConditions.humidity)} %`;
            document.querySelector('.weather-icon').innerHTML = `<img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Monochrome/${response.currentConditions.icon}.svg">`;
            weatherWordInput.value = settingsObj.city;
        })
        .catch(err => {
            showInvalidWeather();
            console.error(err);
        });
}

function showInvalidWeather() {
    document.querySelector('.temperature').textContent = _trans_js__WEBPACK_IMPORTED_MODULE_3__.langObj.temperature[settingsObj.lang];
    document.querySelector('.weather-icon').textContent = '';
    document.querySelector('.weather-icon').style.width = '1px';
    document.querySelector('.wind-speed').textContent = '';
    document.querySelector('.humidity').textContent = '';
    document.querySelector('.conditions').textContent = '';
    settingsObj.city = '';
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
}


//show time

function dateUpdate() {
    let langInsert = '';
    let now = new Date();
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    if (settingsObj.lang === 'en') {
        langInsert = 'en-UK';
        if (+hours >= 6 && +hours < 12) sayHello.textContent = 'Good morning,';
        if (+hours >= 12 && +hours < 18) sayHello.textContent = 'Good afternoon,';
        if (+hours >= 18 && +hours < 24) sayHello.textContent = 'Good evening,';
        if (+hours >= 0 && +hours < 6) sayHello.textContent = 'Good night,';
    }
    if (settingsObj.lang === 'ru') {
        langInsert = 'ru-RU';
        if (+hours >= 6 && +hours < 12) sayHello.textContent = 'Доброе утречко,';
        if (+hours >= 12 && +hours < 18) sayHello.textContent = 'Добрый денёк,';
        if (+hours >= 18 && +hours < 24) sayHello.textContent = 'Добрый вечерок,';
        if (+hours >= 0 && +hours < 6) sayHello.textContent = 'Ночной привет,';
    }
    todayTime.textContent = `${hours} : ${minutes} : ${seconds}`;
    document.querySelector('.center-date').textContent = now.toLocaleDateString(langInsert, { weekday: 'long', month: 'long', day: 'numeric' });

}



//bg
inputMood.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        e.preventDefault();
        settingsObj.mood = inputMood.value;
        localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
        if (settingsObj.bg === 'unsp') setImgUnsp();
        if (settingsObj.bg === 'flickr') setImgFlickr();
    }
});

function setImgGit() {
    document.querySelector('#git').checked = true;
    let dayTime = whatDayTime();
    let bgNum = Math.trunc(Math.random() * (21 - 1) + 1) + '';
    bgNum = bgNum.padStart(2, '0');
    main.style.backgroundImage = `url(https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${bgNum}.jpg)`;
    if ((+bgNum + 1) < 21) preloadImg(`https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${String(+bgNum + 1).padStart(2, '0')}.jpg`);
    if ((+bgNum - 1) > 0) preloadImg(`https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${String(+bgNum - 1).padStart(2, '0')}.jpg`);

    leftArrow.addEventListener('click', () => {
        bgNum = +bgNum;
        bgNum === 1 ? bgNum = 20 : bgNum--;
        bgNum = String(bgNum).padStart(2, '0');
        main.style.backgroundImage = `url(https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${bgNum}.jpg)`;
        if ((+bgNum + 1) < 21) preloadImg(`https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${String(+bgNum + 1).padStart(2, '0')}.jpg`);
        if ((+bgNum - 1) > 0) preloadImg(`https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${String(+bgNum - 1).padStart(2, '0')}.jpg`);
    })

    rightArrow.addEventListener('click', () => {
        bgNum = +bgNum;
        bgNum === 20 ? bgNum = 1 : bgNum++;
        bgNum = String(bgNum).padStart(2, '0');
        main.style.backgroundImage = `url(https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${bgNum}.jpg)`;
        if ((+bgNum + 1) < 21) preloadImg(`https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${String(+bgNum + 1).padStart(2, '0')}.jpg`);
        if ((+bgNum - 1) > 0) preloadImg(`https://raw.githubusercontent.com/wave103x/stage1-tasks/assets/images/${dayTime}/${String(+bgNum - 1).padStart(2, '0')}.jpg`);
    })
}

function setImgUnsp() {
    document.querySelector('#unsplash').checked = true;
    let bgSearchWord = '';
    if (settingsObj.mood) bgSearchWord = settingsObj.mood;
    else bgSearchWord = whatDayTime();

    fetch(`https://api.unsplash.com/search/photos?query=${bgSearchWord}&client_id=uGY17bGixkwPCRtDhfelM4l79HtvEwHTnAaBOz6KMko`, {
        "method": "GET",
        "headers": {},
    })
        .then(response => response.json())
        .then(response => {
            let bgNum = Math.trunc(Math.random() * 10);
            main.style.backgroundImage = `url(${response.results[bgNum].urls.regular})`;
            if ((+bgNum + 1) < 10) preloadImg(response.results[+bgNum + 1].urls.regular);
            if ((+bgNum - 1) > 0) preloadImg(response.results[+bgNum - 1].urls.regular);

            leftArrow.addEventListener('click', () => {
                bgNum > 8 ? bgNum = 0 : bgNum++;
                main.style.backgroundImage = `url(${response.results[bgNum].urls.regular})`;
                if ((+bgNum + 1) < 10) preloadImg(response.results[+bgNum + 1].urls.regular);
                if ((+bgNum - 1) > 0) preloadImg(response.results[+bgNum - 1].urls.regular);

            })
            rightArrow.addEventListener('click', () => {
                bgNum < 1 ? bgNum = 9 : bgNum--;
                main.style.backgroundImage = `url(${response.results[bgNum].urls.regular})`;
                if ((+bgNum + 1) < 10) preloadImg(response.results[+bgNum + 1].urls.regular);
                if ((+bgNum - 1) > 0) preloadImg(response.results[+bgNum - 1].urls.regular);
            });
        })

        .catch(err => {
            console.error(err);
        });
}

function setImgFlickr() {
    document.querySelector('#flickr').checked = true;
    let bgSearchWord = '';
    if (settingsObj.mood) bgSearchWord = settingsObj.mood;
    else bgSearchWord = whatDayTime();

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b25de9c0d455992947676928317a4feb&tags=${bgSearchWord}&extras=url_h&format=json&nojsoncallback=1`, {
        "method": "GET",
        "headers": {},
    })
        .then(response => response.json())
        .then(response => {
            let bgNum = Math.trunc(Math.random() * 11);
            if (!response.photos.photo[bgNum].url_h) bgNum = randomForBg(0, 11, bgNum);
            main.style.backgroundImage = `url(${response.photos.photo[bgNum].url_h})`;
            preloadImg(response.photos.photo[+bgNum + 1].url_h);
            preloadImg(response.photos.photo[+bgNum - 1].url_h);

            leftArrow.addEventListener('click', () => {
                bgNum < 1 ? bgNum = 10 : bgNum -= 1;
                if (!response.photos.photo[bgNum].url_h) bgNum = randomForBg(0, 11, bgNum);
                main.style.backgroundImage = `url(${response.photos.photo[bgNum].url_h})`;
                preloadImg(response.photos.photo[+bgNum + 1].url_h);
                preloadImg(response.photos.photo[+bgNum - 1].url_h);
            });
            rightArrow.addEventListener('click', () => {
                bgNum > 9 ? bgNum = 0 : bgNum += 1;
                if (!response.photos.photo[bgNum].url_h) bgNum = randomForBg(0, 11, bgNum);
                main.style.backgroundImage = `url(${response.photos.photo[bgNum].url_h})`;
                preloadImg(response.photos.photo[+bgNum + 1].url_h);
                preloadImg(response.photos.photo[+bgNum - 1].url_h);
            });

        })
        .catch(err => console.error(err));
}

function randomForBg(min, max, exclude) {
    let rand = Math.trunc(Math.random() * (max - min) + min);
    if (exclude) {
        if (rand === exclude) {
            randomForBg(min, max, exclude);
        }
    }
    return rand
}

function whatDayTime() {
    let hours = new Date().getHours();
    if (+hours >= 6 && +hours < 12) return 'morning';
    if (+hours >= 12 && +hours < 18) return 'afternoon';
    if (+hours >= 18 && +hours < 24) return 'evening';
    if (+hours >= 0 && +hours < 6) return 'night';
}


//choose bg source
document.querySelector('#git').onclick = () => {
    settingsObj.bg = 'git';
    setImgGit();
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
}
document.querySelector('#unsplash').onclick = () => {
    settingsObj.bg = 'unsp';
    setImgUnsp(settingsObj.mood);
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
}
document.querySelector('#flickr').onclick = () => {
    settingsObj.bg = 'flickr';
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    setImgFlickr(settingsObj.mood);
}

function preloadImg(imgSrc) {
    if (imgSrc) {
        let img = new Image;
        img.src = imgSrc;
    }
}



/*     center view      */



//get unputed name and update input width
const inputName = document.querySelector('.inputName');
inputName.size = 9;
if (localStorage.getItem('myName')) {
    inputName.value = localStorage.getItem('myName');
    inputName.size = inputName.value.length;
}



/*      quoters     */

// function getQuote() {
//     fetch(`https://www.breakingbadapi.com/api/quotes`, {
//         "method": "GET",
//         "headers": {}
//     })
//         .then(response => response.json())
//         .then(response => {
//             let rand = Math.trunc(0 + Math.random() * (71 + 1 - 0));
//             document.querySelector('.quote-text').textContent = '"' + response[rand].quote + '"';
//             document.querySelector('.quote-author').textContent = response[rand].author;
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }
// getQuote();

async function getQuotes() {
    const quotes = './assets/quotes.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let index = randomForBg(0, data[settingsObj.lang].length);
    document.querySelector('.quote-text').textContent = '"' + data[settingsObj.lang][index]['text'] + '"';
    document.querySelector('.quote-author').textContent = data[settingsObj.lang][index]['author'];

}
getQuotes();


document.querySelector('.quote-refresh').addEventListener('click', () => getQuotes());

document.querySelector('.quotes').addEventListener('mouseover', e => {
    document.querySelector('.quote-refresh').classList.add('quote-active');
})
document.querySelector('.quotes').addEventListener('mouseleave', e => {
    document.querySelector('.quote-refresh').classList.remove('quote-active');
})

document.querySelector('.quotes').addEventListener('mouseover', e => {
    document.querySelector('.quotes').classList.add('quotes-text-active');
})
document.querySelector('.quotes').addEventListener('mouseleave', e => {
    document.querySelector('.quotes').classList.remove('quotes-text-active');
});


//hide elements

document.querySelector('.time').classList.add('visible');
document.querySelector('.center-date').classList.add('visible');
document.querySelector('.greetings').classList.add('visible');
document.querySelector('.quotes').classList.add('visible');
document.querySelector('.weather').classList.add('visible');
document.querySelector('.audio-container').classList.add('visible');


const audio = document.querySelector('.audio');

function loadHides() {
    for (let key in settingsObj.hide) {
        if (settingsObj.hide[key] === 0) {
            document.querySelector('.' + key).classList.remove('hide');
            document.querySelector('#' + key).checked = false;
        } else {
            document.querySelector('#' + key).checked = true;
            document.querySelector('.' + key).classList.add('hide');
        }
    }
}


document.querySelector('#time').addEventListener('click', () => {
    document.querySelector('.time').classList.toggle('hide');
    settingsObj.hide.time = ~settingsObj.hide.time;
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));

});
document.querySelector('#center-date').addEventListener('click', () => {
    settingsObj.hide["center-date"] = ~settingsObj.hide["center-date"];
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    document.querySelector('.center-date').classList.toggle('hide');
});
document.querySelector('#greetings').addEventListener('click', () => {
    settingsObj.hide.greetings = ~settingsObj.hide.greetings;
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    document.querySelector('.greetings').classList.toggle('hide');
});
document.querySelector('#quotes').addEventListener('click', () => {
    settingsObj.hide.quotes = ~settingsObj.hide.quotes;
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    document.querySelector('.quotes').classList.toggle('hide');
});
document.querySelector('#weather').addEventListener('click', () => {
    settingsObj.hide.weather = ~settingsObj.hide.weather;
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    document.querySelector('.weather').classList.toggle('hide');
});
document.querySelector('#audio-container').addEventListener('click', () => {
    audio.pause();
    settingsObj.hide['audio-container'] = ~settingsObj.hide['audio-container'];
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    document.querySelector('.audio-container').classList.toggle('hide');
});
document.querySelector('#links').addEventListener('click', () => {
    settingsObj.hide.links = ~settingsObj.hide.links;
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    document.querySelector('.links').classList.toggle('hide');
});
document.querySelector('#deeds').addEventListener('click', () => {
    settingsObj.hide.deeds = ~settingsObj.hide.deeds;
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    document.querySelector('.deeds').classList.toggle('hide');
});


function capitalFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9kZWVkcy5jc3M/YTc2YyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9zdHlsZS1wbGF5ZXIuY3NzP2M0ZTgiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvdHJhbnMuanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vbWVudHVtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tb21lbnR1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vbWVudHVtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQge2xhbmdPYmp9O1xyXG5cclxuY29uc3QgbGFuZ09iaiA9IHtcclxuICAgIFwidGl0bGVcIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJtb21lbnR1bVwiLFxyXG4gICAgICAgIFwicnVcIjogXCLQvNC+0LzQtdC90YLRg9C8XCJcclxuICAgIH0sXHJcbiAgICBcImxuZy13aW5kXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwiV2luZCBzcGVlZFwiLFxyXG4gICAgICAgIFwicnVcIjogXCLQodC60L7RgNC+0YHRgtGMINCy0LXRgtGA0LBcIixcclxuICAgIH0sXHJcbiAgICBcImxuZy1odW1pZFwiOiB7XHJcbiAgICAgICAgXCJlblwiOiBcIkh1bWlkaXR5XCIsXHJcbiAgICAgICAgXCJydVwiOiBcItCS0LvQsNC20L3QvtGB0YLRjFwiLFxyXG4gICAgfSxcclxuICAgIFwibG5nLXdpbmQtc3BlZWRcIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJtL3NcIixcclxuICAgICAgICBcInJ1XCI6IFwi0Lwv0YFcIixcclxuICAgIH0sXHJcbiAgICBcImxpbmtzX19idG5cIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJMaW5rc1wiLFxyXG4gICAgICAgIFwicnVcIjogXCLQodGB0YvQu9C60LhcIixcclxuICAgIH0sXHJcbiAgICBcImRlZWRzX19idG5cIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJUbyBkb1wiLFxyXG4gICAgICAgIFwicnVcIjogXCLQl9Cw0L/QuNGB0LrQuFwiLFxyXG4gICAgfSxcclxuICAgIFwic2V0dGluZ3NfX2J0blwiOiB7XHJcbiAgICAgICAgXCJlblwiOiBcIlNldHRpbmdzXCIsXHJcbiAgICAgICAgXCJydVwiOiBcItCd0LDRgdGC0YDQvtC50LrQuFwiLFxyXG4gICAgfSxcclxuICAgIFwibGlua3NfX2FkZC1saW5rLWJ0blwiOiB7XHJcbiAgICAgICAgXCJlblwiOiBcImNyZWF0ZVwiLFxyXG4gICAgICAgIFwicnVcIjogXCLQtNC+0LHQsNCy0LjRgtGMXCIsXHJcbiAgICB9LFxyXG4gICAgXCJ3aW5kb3ctbGlua19fYnRuLWVkaXRcIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJlZGl0XCIsXHJcbiAgICAgICAgXCJydVwiOiBcItC40LfQvNC10L3QuNGC0YxcIixcclxuICAgIH0sXHJcbiAgICBcIndpbmRvdy1saW5rX19idG4tZGVsXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwiZGVsXCIsXHJcbiAgICAgICAgXCJydVwiOiBcItGD0LTQsNC70LjRgtGMXCIsXHJcbiAgICB9LFxyXG4gICAgXCJkZWVkc19fYWRkLXRhc2stYnRuXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwiYWRkXCIsXHJcbiAgICAgICAgXCJydVwiOiBcItC00L7QsdCw0LLQuNGC0YxcIixcclxuICAgIH0sXHJcbiAgICBcIndpbmRvdy10YXNrX19idG4tZWRpdFwiOiB7XHJcbiAgICAgICAgXCJlblwiOiBcImVkaXRcIixcclxuICAgICAgICBcInJ1XCI6IFwi0LjQt9C80LXQvdC40YLRjFwiLFxyXG4gICAgfSxcclxuICAgIFwid2luZG93LXRhc2tfX2J0bi1kZWxcIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJkZWxcIixcclxuICAgICAgICBcInJ1XCI6IFwi0YPQtNCw0LvQuNGC0YxcIixcclxuICAgIH0sXHJcbiAgICBcInNldC1sYW5nXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwibGFuZ1wiLFxyXG4gICAgICAgIFwicnVcIjogXCLRj9C30YvQulwiLFxyXG4gICAgfSxcclxuICAgIFwic2V0LWltZ1wiOiB7XHJcbiAgICAgICAgXCJlblwiOiBcImltZyBzcmNcIixcclxuICAgICAgICBcInJ1XCI6IFwi0LjRgdGC0L7Rh9C90LjQuiDQutCw0YDRgtC40L3QvtC6XCIsXHJcbiAgICB9LFxyXG4gICAgXCJzZXQtbW9vZFwiOiB7XHJcbiAgICAgICAgXCJlblwiOiBcImltZyBtb29kXCIsXHJcbiAgICAgICAgXCJydVwiOiBcItGC0LXQvNCwINC60LDRgNGC0LjQvdC+0LpcIixcclxuICAgIH0sXHJcbiAgICBcInNldC1oaWRlXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwiaGlkZSB3aWRnZXRcIixcclxuICAgICAgICBcInJ1XCI6IFwi0YHQutGA0YvRgtGMINGN0LvQtdC80LXQvdGCXCIsXHJcbiAgICB9LFxyXG4gICAgXCJlbnRlci1uYW1lXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwiW0VudGVyIG5hbWVdXCIsXHJcbiAgICAgICAgXCJydVwiOiBcIlvQktCy0LXQtNC40YLQtSDQuNC80Y9dXCIsXHJcbiAgICB9LFxyXG4gICAgXCJlbnRlci1jaXR5XCI6IHtcclxuICAgICAgICBcImVuXCI6IFwiW0VudGVyIGNpdHldXCIsXHJcbiAgICAgICAgXCJydVwiOiBcIlvQktCy0LXQtNC40YLQtSDQs9C+0YDQvtC0XVwiLFxyXG4gICAgfSxcclxuICAgIFwidGVtcGVyYXR1cmVcIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJbSW52YWxpZCBjaXR5XVwiLFxyXG4gICAgICAgIFwicnVcIjogXCJb0J3QtdCy0LXRgNC90YvQuSDQs9C+0YDQvtC0XVwiLFxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAgXCJsbmctdGltZVwiOiB7XHJcbiAgICAgICAgXCJlblwiOiBcInRpbWVcIixcclxuICAgICAgICBcInJ1XCI6IFwi0LLRgNC10LzRj1wiLFxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAgXCJsbmctZGF5XCI6IHtcclxuICAgICAgICBcImVuXCI6IFwiZGF0ZVwiLFxyXG4gICAgICAgIFwicnVcIjogXCLQtNCw0YLQsFwiLFxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAgXCJsbmctZ3JlZXRcIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJncmVldGluZ3NcIixcclxuICAgICAgICBcInJ1XCI6IFwi0L/RgNC40LLQtdGC0YHRgtCy0LjQtVwiLFxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAgXCJsbmctcXVvdGVzXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwicXVvdGVcIixcclxuICAgICAgICBcInJ1XCI6IFwi0YbQuNGC0LDRgtCwXCIsXHJcbiAgICB9XHJcbiAgICAsXHJcbiAgICBcImxuZy13ZWF0aGVyXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwid2VhdGhlclwiLFxyXG4gICAgICAgIFwicnVcIjogXCLQv9C+0LPQvtC00LBcIixcclxuICAgIH1cclxuICAgICxcclxuICAgIFwibG5nLWF1ZGlvXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwiYXVkaW9cIixcclxuICAgICAgICBcInJ1XCI6IFwi0LDRg9C00LjQvlwiLFxyXG4gICAgfVxyXG4gICAgLFxyXG4gICAgXCJsbmctbGlua3NcIjoge1xyXG4gICAgICAgIFwiZW5cIjogXCJsaW5rc1wiLFxyXG4gICAgICAgIFwicnVcIjogXCLRgdGB0YvQu9C60LhcIixcclxuICAgIH1cclxuICAgICxcclxuICAgIFwibG5nLWRlZWRzXCI6IHtcclxuICAgICAgICBcImVuXCI6IFwidG8gZG9cIixcclxuICAgICAgICBcInJ1XCI6IFwi0YHQv9C40YHQvtC6INC00LXQu1wiLFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLXBsYXllci5jc3MnO1xyXG5pbXBvcnQgJy4vZGVlZHMuY3NzJztcclxuaW1wb3J0ICcuL3RyYW5zLmpzJztcclxuaW1wb3J0IHsgbGFuZ09iaiB9IGZyb20gJy4vdHJhbnMuanMnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL3F1b3Rlcy5qc29uJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9hc3NldHMvZ2l0aHViTG9nby5zdmcnXHJcbmltcG9ydCBJY29uMiBmcm9tICcuL2Fzc2V0cy9yc19zY2hvb2xfanMuc3ZnJ1xyXG5jb25zdCB0b2RheVRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xyXG5jb25zdCBzYXlIZWxsbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxsby10by1uYW1lJyk7XHJcbmNvbnN0IHdlYXRoZXJXb3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtd2VhdGhlci1jaXR5Jyk7XHJcbmxldCB3ZWF0aGVyU2VhcmNoV29yZCA9ICcnO1xyXG5cclxuY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFycm93LWxlZnQnKTtcclxuY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdy1yaWdodCcpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuY29uc3QgaW5wdXRNb29kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW1vb2QnKTtcclxuY29uc3QgcmFkaW9zTGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJyYWRpby1sYW5nXCJdJyk7XHJcblxyXG5jb25zb2xlLmxvZygnQVBJINC/0L7Qs9C+0LTRiyDQvdCw0YXQvtC00LjRgiDQv9C+0LTRh9Cw0YEg0L3QtdC+0LbQuNC00LDQvdC90YvQtSDQs9C+0YDQvtC00LAsINCy0YvQtNCw0LLQsNGPINC+0YjQuNCx0LrRgyDQtNCw0LvQtdC60L4g0L3QtSDRgdGA0LDQt9GDJyk7XHJcblxyXG4vL3NldHRpbmdzXHJcbmxldCBzZXR0aW5nc09iaiA9IHtcclxuICAgIGxhbmc6ICdlbicsXHJcbiAgICBiZzogJ2dpdCcsXHJcbiAgICBtb29kOiAnJyxcclxuICAgIGhpZGU6IHtcclxuICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgIFwiY2VudGVyLWRhdGVcIjogMCxcclxuICAgICAgICBncmVldGluZ3M6IDAsXHJcbiAgICAgICAgcXVvdGVzOiAwLFxyXG4gICAgICAgIHdlYXRoZXI6IDAsXHJcbiAgICAgICAgJ2F1ZGlvLWNvbnRhaW5lcic6IDAsXHJcbiAgICAgICAgbGlua3M6IDAsXHJcbiAgICAgICAgZGVlZHM6IDAsXHJcbiAgICB9LFxyXG4gICAgY2l0eTogJ01pbnNrJyxcclxufTtcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2V0dGluZ3NPYmonKSkge1xyXG4gICAgc2V0dGluZ3NPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXR0aW5nc09iaicpKTtcclxuXHJcbiAgICBpbnB1dE1vb2QudmFsdWUgPSBzZXR0aW5nc09iai5tb29kO1xyXG4gICAgaWYgKHNldHRpbmdzT2JqLmxhbmcgPT09ICdydScpIHJhZGlvc0xhbmdbMV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICBlbHNlIHJhZGlvc0xhbmdbMF0uY2hlY2tlZCA9IHRydWU7XHJcbn1cclxuZnVuY3Rpb24gYXBwbHlTZXR0aW5ncyhvYmopIHtcclxuICAgIGxvYWRIaWRlcygpXHJcbiAgICBjaGFuZ2VMYW5nKHNldHRpbmdzT2JqLmxhbmcpO1xyXG4gICAgd2VhdGhlclVwZGF0ZShvYmoubGFuZywgb2JqLmNpdHkpO1xyXG4gICAgZGF0ZVVwZGF0ZSgpO1xyXG4gICAgZ2V0UXVvdGVzKCk7XHJcbn1cclxuXHJcbnNldEludGVydmFsKGRhdGVVcGRhdGUsIDEwMDApO1xyXG5cclxuYXBwbHlTZXR0aW5ncyhzZXR0aW5nc09iaik7XHJcblxyXG4vL2NoYW5nZSBsYW5nIG9uIGNsaWNrXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9zTGFuZy5sZW5ndGg7IGkrKylcclxuICAgIHJhZGlvc0xhbmdbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBzZXR0aW5nc09iai5sYW5nID0gcmFkaW9zTGFuZ1tpXS52YWx1ZTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3NPYmonLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nc09iaikpO1xyXG5cclxuICAgICAgICBhcHBseVNldHRpbmdzKHNldHRpbmdzT2JqKTtcclxuICAgIH0pO1xyXG5cclxuc3dpdGNoIChzZXR0aW5nc09iai5iZykge1xyXG4gICAgY2FzZSAnZ2l0JzpcclxuICAgICAgICBzZXRJbWdHaXQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UgJ3Vuc3AnOlxyXG4gICAgICAgIHNldEltZ1Vuc3Aoc2V0dGluZ3NPYmoubW9vZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdmbGlja3InOlxyXG4gICAgICAgIHNldEltZ0ZsaWNrcihzZXR0aW5nc09iai5tb29kKTtcclxuICAgICAgICBicmVhaztcclxufTtcclxuXHJcbi8vY2hhbmdlIGxhbmdcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUxhbmcobGFuZykge1xyXG4gICAgaWYgKGxhbmcgPT09ICdydScgJiYgc2V0dGluZ3NPYmouY2l0eS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnbWluc2snKSBzZXR0aW5nc09iai5jaXR5ID0gJ9Cc0LjQvdGB0LonO1xyXG4gICAgaWYgKGxhbmcgPT09ICdlbicgJiYgc2V0dGluZ3NPYmouY2l0eS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAn0LzQuNC90YHQuicpIHNldHRpbmdzT2JqLmNpdHkgPSAnTWluc2snO1xyXG5cclxuICAgIGRvY3VtZW50LnRpdGxlID0gY2FwaXRhbEZpcnN0TGV0dGVyKGxhbmdPYmpbJ3RpdGxlJ11bbGFuZ10pO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVDaG9vc2VcIl0nKS5wbGFjZWhvbGRlciA9IGxhbmdPYmpbJ2VudGVyLW5hbWUnXVtsYW5nXVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIndlYXRoZXJDaXR5XCJdJykucGxhY2Vob2xkZXIgPSBsYW5nT2JqWydlbnRlci1jaXR5J11bbGFuZ11cclxuICAgIGZvciAobGV0IGkgaW4gbGFuZ09iaikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGkpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgaSkudGV4dENvbnRlbnQgPSBsYW5nT2JqW2ldW2xhbmddO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiAgICAgIHdlYXRoZXIgICAgICAgICAgKi9cclxud2VhdGhlcldvcmRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHdlYXRoZXJXb3JkSW5wdXQudmFsdWUgPT09ICcnIHx8IHdlYXRoZXJXb3JkSW5wdXQudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2hvd0ludmFsaWRXZWF0aGVyKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXR0aW5nc09iai5jaXR5ID0gY2FwaXRhbEZpcnN0TGV0dGVyKHdlYXRoZXJXb3JkSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB3ZWF0aGVyVXBkYXRlKHNldHRpbmdzT2JqLmxhbmcsIHNldHRpbmdzT2JqLmNpdHkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3NPYmonLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nc09iaikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gd2VhdGhlclVwZGF0ZShsYW5nLCBjaXR5ID0gJ01pbnNrJykge1xyXG4gICAgZmV0Y2goYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7Y2l0eX0/dW5pdEdyb3VwPW1ldHJpYyZsYW5nPSR7bGFuZ30ma2V5PTRCU0dGQzUyWEo5Nk42RjVXSkZZTThNNFAmY29udGVudFR5cGU9anNvbmAsIHtcclxuICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxyXG4gICAgICAgIFwiaGVhZGVyc1wiOiB7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJykuaW5uZXJIVE1MID0gcmVzcG9uc2UuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlICsgJyZkZWc7JztcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbnMnKS5pbm5lckhUTUwgPSByZXNwb25zZS5jdXJyZW50Q29uZGl0aW9ucy5jb25kaXRpb25zO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZCcpLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm9wYWNpdHk3MFwiPiR7bGFuZ09ialsnbG5nLXdpbmQnXVtsYW5nXX08L3NwYW4+ICR7TWF0aC5yb3VuZChyZXNwb25zZS5jdXJyZW50Q29uZGl0aW9ucy53aW5kc3BlZWQpfSAke2xhbmdPYmpbJ2xuZy13aW5kLXNwZWVkJ11bbGFuZ119YDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JykuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwib3BhY2l0eTcwXCI+JHtsYW5nT2JqWydsbmctaHVtaWQnXVtsYW5nXX08L3NwYW4+ICR7TWF0aC5yb3VuZChyZXNwb25zZS5jdXJyZW50Q29uZGl0aW9ucy5odW1pZGl0eSl9ICVgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pY29uJykuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Zpc3VhbGNyb3NzaW5nL1dlYXRoZXJJY29ucy8yZGU1NjBkYTg5ZDg3ZGU0NGUzY2EyYTY1OTNhMTJjMTljODM0NmQzL1NWRy8xc3QlMjBTZXQlMjAtJTIwTW9ub2Nocm9tZS8ke3Jlc3BvbnNlLmN1cnJlbnRDb25kaXRpb25zLmljb259LnN2Z1wiPmA7XHJcbiAgICAgICAgICAgIHdlYXRoZXJXb3JkSW5wdXQudmFsdWUgPSBzZXR0aW5nc09iai5jaXR5O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHNob3dJbnZhbGlkV2VhdGhlcigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJbnZhbGlkV2VhdGhlcigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpLnRleHRDb250ZW50ID0gbGFuZ09ialsndGVtcGVyYXR1cmUnXVtzZXR0aW5nc09iai5sYW5nXTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWljb24nKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpLnN0eWxlLndpZHRoID0gJzFweCc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZCcpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbnMnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgc2V0dGluZ3NPYmouY2l0eSA9ICcnO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHRpbmdzT2JqJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3NPYmopKTtcclxufVxyXG5cclxuXHJcbi8vc2hvdyB0aW1lXHJcblxyXG5mdW5jdGlvbiBkYXRlVXBkYXRlKCkge1xyXG4gICAgbGV0IGxhbmdJbnNlcnQgPSAnJztcclxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBTdHJpbmcobm93LmdldFNlY29uZHMoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGxldCBob3VycyA9IFN0cmluZyhub3cuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgIGxldCBtaW51dGVzID0gU3RyaW5nKG5vdy5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBpZiAoc2V0dGluZ3NPYmoubGFuZyA9PT0gJ2VuJykge1xyXG4gICAgICAgIGxhbmdJbnNlcnQgPSAnZW4tVUsnO1xyXG4gICAgICAgIGlmICgraG91cnMgPj0gNiAmJiAraG91cnMgPCAxMikgc2F5SGVsbG8udGV4dENvbnRlbnQgPSAnR29vZCBtb3JuaW5nLCc7XHJcbiAgICAgICAgaWYgKCtob3VycyA+PSAxMiAmJiAraG91cnMgPCAxOCkgc2F5SGVsbG8udGV4dENvbnRlbnQgPSAnR29vZCBhZnRlcm5vb24sJztcclxuICAgICAgICBpZiAoK2hvdXJzID49IDE4ICYmICtob3VycyA8IDI0KSBzYXlIZWxsby50ZXh0Q29udGVudCA9ICdHb29kIGV2ZW5pbmcsJztcclxuICAgICAgICBpZiAoK2hvdXJzID49IDAgJiYgK2hvdXJzIDwgNikgc2F5SGVsbG8udGV4dENvbnRlbnQgPSAnR29vZCBuaWdodCwnO1xyXG4gICAgfVxyXG4gICAgaWYgKHNldHRpbmdzT2JqLmxhbmcgPT09ICdydScpIHtcclxuICAgICAgICBsYW5nSW5zZXJ0ID0gJ3J1LVJVJztcclxuICAgICAgICBpZiAoK2hvdXJzID49IDYgJiYgK2hvdXJzIDwgMTIpIHNheUhlbGxvLnRleHRDb250ZW50ID0gJ9CU0L7QsdGA0L7QtSDRg9GC0YDQtdGH0LrQviwnO1xyXG4gICAgICAgIGlmICgraG91cnMgPj0gMTIgJiYgK2hvdXJzIDwgMTgpIHNheUhlbGxvLnRleHRDb250ZW50ID0gJ9CU0L7QsdGA0YvQuSDQtNC10L3RkdC6LCc7XHJcbiAgICAgICAgaWYgKCtob3VycyA+PSAxOCAmJiAraG91cnMgPCAyNCkgc2F5SGVsbG8udGV4dENvbnRlbnQgPSAn0JTQvtCx0YDRi9C5INCy0LXRh9C10YDQvtC6LCc7XHJcbiAgICAgICAgaWYgKCtob3VycyA+PSAwICYmICtob3VycyA8IDYpIHNheUhlbGxvLnRleHRDb250ZW50ID0gJ9Cd0L7Rh9C90L7QuSDQv9GA0LjQstC10YIsJztcclxuICAgIH1cclxuICAgIHRvZGF5VGltZS50ZXh0Q29udGVudCA9IGAke2hvdXJzfSA6ICR7bWludXRlc30gOiAke3NlY29uZHN9YDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZW50ZXItZGF0ZScpLnRleHRDb250ZW50ID0gbm93LnRvTG9jYWxlRGF0ZVN0cmluZyhsYW5nSW5zZXJ0LCB7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8vYmdcclxuaW5wdXRNb29kLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXR0aW5nc09iai5tb29kID0gaW5wdXRNb29kLnZhbHVlO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5nc09iaicsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzT2JqKSk7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzT2JqLmJnID09PSAndW5zcCcpIHNldEltZ1Vuc3AoKTtcclxuICAgICAgICBpZiAoc2V0dGluZ3NPYmouYmcgPT09ICdmbGlja3InKSBzZXRJbWdGbGlja3IoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBzZXRJbWdHaXQoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2l0JykuY2hlY2tlZCA9IHRydWU7XHJcbiAgICBsZXQgZGF5VGltZSA9IHdoYXREYXlUaW1lKCk7XHJcbiAgICBsZXQgYmdOdW0gPSBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiAoMjEgLSAxKSArIDEpICsgJyc7XHJcbiAgICBiZ051bSA9IGJnTnVtLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgICBtYWluLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dhdmUxMDN4L3N0YWdlMS10YXNrcy9hc3NldHMvaW1hZ2VzLyR7ZGF5VGltZX0vJHtiZ051bX0uanBnKWA7XHJcbiAgICBpZiAoKCtiZ051bSArIDEpIDwgMjEpIHByZWxvYWRJbWcoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93YXZlMTAzeC9zdGFnZTEtdGFza3MvYXNzZXRzL2ltYWdlcy8ke2RheVRpbWV9LyR7U3RyaW5nKCtiZ051bSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9LmpwZ2ApO1xyXG4gICAgaWYgKCgrYmdOdW0gLSAxKSA+IDApIHByZWxvYWRJbWcoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93YXZlMTAzeC9zdGFnZTEtdGFza3MvYXNzZXRzL2ltYWdlcy8ke2RheVRpbWV9LyR7U3RyaW5nKCtiZ051bSAtIDEpLnBhZFN0YXJ0KDIsICcwJyl9LmpwZ2ApO1xyXG5cclxuICAgIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBiZ051bSA9ICtiZ051bTtcclxuICAgICAgICBiZ051bSA9PT0gMSA/IGJnTnVtID0gMjAgOiBiZ051bS0tO1xyXG4gICAgICAgIGJnTnVtID0gU3RyaW5nKGJnTnVtKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vd2F2ZTEwM3gvc3RhZ2UxLXRhc2tzL2Fzc2V0cy9pbWFnZXMvJHtkYXlUaW1lfS8ke2JnTnVtfS5qcGcpYDtcclxuICAgICAgICBpZiAoKCtiZ051bSArIDEpIDwgMjEpIHByZWxvYWRJbWcoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93YXZlMTAzeC9zdGFnZTEtdGFza3MvYXNzZXRzL2ltYWdlcy8ke2RheVRpbWV9LyR7U3RyaW5nKCtiZ051bSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9LmpwZ2ApO1xyXG4gICAgICAgIGlmICgoK2JnTnVtIC0gMSkgPiAwKSBwcmVsb2FkSW1nKGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vd2F2ZTEwM3gvc3RhZ2UxLXRhc2tzL2Fzc2V0cy9pbWFnZXMvJHtkYXlUaW1lfS8ke1N0cmluZygrYmdOdW0gLSAxKS5wYWRTdGFydCgyLCAnMCcpfS5qcGdgKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBiZ051bSA9ICtiZ051bTtcclxuICAgICAgICBiZ051bSA9PT0gMjAgPyBiZ051bSA9IDEgOiBiZ051bSsrO1xyXG4gICAgICAgIGJnTnVtID0gU3RyaW5nKGJnTnVtKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vd2F2ZTEwM3gvc3RhZ2UxLXRhc2tzL2Fzc2V0cy9pbWFnZXMvJHtkYXlUaW1lfS8ke2JnTnVtfS5qcGcpYDtcclxuICAgICAgICBpZiAoKCtiZ051bSArIDEpIDwgMjEpIHByZWxvYWRJbWcoYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93YXZlMTAzeC9zdGFnZTEtdGFza3MvYXNzZXRzL2ltYWdlcy8ke2RheVRpbWV9LyR7U3RyaW5nKCtiZ051bSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9LmpwZ2ApO1xyXG4gICAgICAgIGlmICgoK2JnTnVtIC0gMSkgPiAwKSBwcmVsb2FkSW1nKGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vd2F2ZTEwM3gvc3RhZ2UxLXRhc2tzL2Fzc2V0cy9pbWFnZXMvJHtkYXlUaW1lfS8ke1N0cmluZygrYmdOdW0gLSAxKS5wYWRTdGFydCgyLCAnMCcpfS5qcGdgKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEltZ1Vuc3AoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5zcGxhc2gnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIGxldCBiZ1NlYXJjaFdvcmQgPSAnJztcclxuICAgIGlmIChzZXR0aW5nc09iai5tb29kKSBiZ1NlYXJjaFdvcmQgPSBzZXR0aW5nc09iai5tb29kO1xyXG4gICAgZWxzZSBiZ1NlYXJjaFdvcmQgPSB3aGF0RGF5VGltZSgpO1xyXG5cclxuICAgIGZldGNoKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vc2VhcmNoL3Bob3Rvcz9xdWVyeT0ke2JnU2VhcmNoV29yZH0mY2xpZW50X2lkPXVHWTE3YkdpeGt3UENSdERoZmVsTTRsNzlIdHZFd0hUbkFhQk96NktNa29gLCB7XHJcbiAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcclxuICAgICAgICBcImhlYWRlcnNcIjoge30sXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiZ051bSA9IE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICAgICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVzcG9uc2UucmVzdWx0c1tiZ051bV0udXJscy5yZWd1bGFyfSlgO1xyXG4gICAgICAgICAgICBpZiAoKCtiZ051bSArIDEpIDwgMTApIHByZWxvYWRJbWcocmVzcG9uc2UucmVzdWx0c1srYmdOdW0gKyAxXS51cmxzLnJlZ3VsYXIpO1xyXG4gICAgICAgICAgICBpZiAoKCtiZ051bSAtIDEpID4gMCkgcHJlbG9hZEltZyhyZXNwb25zZS5yZXN1bHRzWytiZ051bSAtIDFdLnVybHMucmVndWxhcik7XHJcblxyXG4gICAgICAgICAgICBsZWZ0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiZ051bSA+IDggPyBiZ051bSA9IDAgOiBiZ051bSsrO1xyXG4gICAgICAgICAgICAgICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVzcG9uc2UucmVzdWx0c1tiZ051bV0udXJscy5yZWd1bGFyfSlgO1xyXG4gICAgICAgICAgICAgICAgaWYgKCgrYmdOdW0gKyAxKSA8IDEwKSBwcmVsb2FkSW1nKHJlc3BvbnNlLnJlc3VsdHNbK2JnTnVtICsgMV0udXJscy5yZWd1bGFyKTtcclxuICAgICAgICAgICAgICAgIGlmICgoK2JnTnVtIC0gMSkgPiAwKSBwcmVsb2FkSW1nKHJlc3BvbnNlLnJlc3VsdHNbK2JnTnVtIC0gMV0udXJscy5yZWd1bGFyKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJpZ2h0QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBiZ051bSA8IDEgPyBiZ051bSA9IDkgOiBiZ051bS0tO1xyXG4gICAgICAgICAgICAgICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVzcG9uc2UucmVzdWx0c1tiZ051bV0udXJscy5yZWd1bGFyfSlgO1xyXG4gICAgICAgICAgICAgICAgaWYgKCgrYmdOdW0gKyAxKSA8IDEwKSBwcmVsb2FkSW1nKHJlc3BvbnNlLnJlc3VsdHNbK2JnTnVtICsgMV0udXJscy5yZWd1bGFyKTtcclxuICAgICAgICAgICAgICAgIGlmICgoK2JnTnVtIC0gMSkgPiAwKSBwcmVsb2FkSW1nKHJlc3BvbnNlLnJlc3VsdHNbK2JnTnVtIC0gMV0udXJscy5yZWd1bGFyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0SW1nRmxpY2tyKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZsaWNrcicpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgbGV0IGJnU2VhcmNoV29yZCA9ICcnO1xyXG4gICAgaWYgKHNldHRpbmdzT2JqLm1vb2QpIGJnU2VhcmNoV29yZCA9IHNldHRpbmdzT2JqLm1vb2Q7XHJcbiAgICBlbHNlIGJnU2VhcmNoV29yZCA9IHdoYXREYXlUaW1lKCk7XHJcblxyXG4gICAgZmV0Y2goYGh0dHBzOi8vd3d3LmZsaWNrci5jb20vc2VydmljZXMvcmVzdC8/bWV0aG9kPWZsaWNrci5waG90b3Muc2VhcmNoJmFwaV9rZXk9YjI1ZGU5YzBkNDU1OTkyOTQ3Njc2OTI4MzE3YTRmZWImdGFncz0ke2JnU2VhcmNoV29yZH0mZXh0cmFzPXVybF9oJmZvcm1hdD1qc29uJm5vanNvbmNhbGxiYWNrPTFgLCB7XHJcbiAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcclxuICAgICAgICBcImhlYWRlcnNcIjoge30sXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiZ051bSA9IE1hdGgudHJ1bmMoTWF0aC5yYW5kb20oKSAqIDExKTtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5waG90b3MucGhvdG9bYmdOdW1dLnVybF9oKSBiZ051bSA9IHJhbmRvbUZvckJnKDAsIDExLCBiZ051bSk7XHJcbiAgICAgICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Jlc3BvbnNlLnBob3Rvcy5waG90b1tiZ051bV0udXJsX2h9KWA7XHJcbiAgICAgICAgICAgIHByZWxvYWRJbWcocmVzcG9uc2UucGhvdG9zLnBob3RvWytiZ051bSArIDFdLnVybF9oKTtcclxuICAgICAgICAgICAgcHJlbG9hZEltZyhyZXNwb25zZS5waG90b3MucGhvdG9bK2JnTnVtIC0gMV0udXJsX2gpO1xyXG5cclxuICAgICAgICAgICAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmdOdW0gPCAxID8gYmdOdW0gPSAxMCA6IGJnTnVtIC09IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLnBob3Rvcy5waG90b1tiZ051bV0udXJsX2gpIGJnTnVtID0gcmFuZG9tRm9yQmcoMCwgMTEsIGJnTnVtKTtcclxuICAgICAgICAgICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Jlc3BvbnNlLnBob3Rvcy5waG90b1tiZ051bV0udXJsX2h9KWA7XHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkSW1nKHJlc3BvbnNlLnBob3Rvcy5waG90b1srYmdOdW0gKyAxXS51cmxfaCk7XHJcbiAgICAgICAgICAgICAgICBwcmVsb2FkSW1nKHJlc3BvbnNlLnBob3Rvcy5waG90b1srYmdOdW0gLSAxXS51cmxfaCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmdOdW0gPiA5ID8gYmdOdW0gPSAwIDogYmdOdW0gKz0gMTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UucGhvdG9zLnBob3RvW2JnTnVtXS51cmxfaCkgYmdOdW0gPSByYW5kb21Gb3JCZygwLCAxMSwgYmdOdW0pO1xyXG4gICAgICAgICAgICAgICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVzcG9uc2UucGhvdG9zLnBob3RvW2JnTnVtXS51cmxfaH0pYDtcclxuICAgICAgICAgICAgICAgIHByZWxvYWRJbWcocmVzcG9uc2UucGhvdG9zLnBob3RvWytiZ051bSArIDFdLnVybF9oKTtcclxuICAgICAgICAgICAgICAgIHByZWxvYWRJbWcocmVzcG9uc2UucGhvdG9zLnBob3RvWytiZ051bSAtIDFdLnVybF9oKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Gb3JCZyhtaW4sIG1heCwgZXhjbHVkZSkge1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLnRydW5jKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICBpZiAoZXhjbHVkZSkge1xyXG4gICAgICAgIGlmIChyYW5kID09PSBleGNsdWRlKSB7XHJcbiAgICAgICAgICAgIHJhbmRvbUZvckJnKG1pbiwgbWF4LCBleGNsdWRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmFuZFxyXG59XHJcblxyXG5mdW5jdGlvbiB3aGF0RGF5VGltZSgpIHtcclxuICAgIGxldCBob3VycyA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgIGlmICgraG91cnMgPj0gNiAmJiAraG91cnMgPCAxMikgcmV0dXJuICdtb3JuaW5nJztcclxuICAgIGlmICgraG91cnMgPj0gMTIgJiYgK2hvdXJzIDwgMTgpIHJldHVybiAnYWZ0ZXJub29uJztcclxuICAgIGlmICgraG91cnMgPj0gMTggJiYgK2hvdXJzIDwgMjQpIHJldHVybiAnZXZlbmluZyc7XHJcbiAgICBpZiAoK2hvdXJzID49IDAgJiYgK2hvdXJzIDwgNikgcmV0dXJuICduaWdodCc7XHJcbn1cclxuXHJcblxyXG4vL2Nob29zZSBiZyBzb3VyY2VcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdCcpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXR0aW5nc09iai5iZyA9ICdnaXQnO1xyXG4gICAgc2V0SW1nR2l0KCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3NPYmonLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nc09iaikpO1xyXG59XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bnNwbGFzaCcpLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXR0aW5nc09iai5iZyA9ICd1bnNwJztcclxuICAgIHNldEltZ1Vuc3Aoc2V0dGluZ3NPYmoubW9vZCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3NPYmonLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nc09iaikpO1xyXG59XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmbGlja3InKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0dGluZ3NPYmouYmcgPSAnZmxpY2tyJztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5nc09iaicsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzT2JqKSk7XHJcbiAgICBzZXRJbWdGbGlja3Ioc2V0dGluZ3NPYmoubW9vZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZWxvYWRJbWcoaW1nU3JjKSB7XHJcbiAgICBpZiAoaW1nU3JjKSB7XHJcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZTtcclxuICAgICAgICBpbWcuc3JjID0gaW1nU3JjO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qICAgICBjZW50ZXIgdmlldyAgICAgICovXHJcblxyXG5cclxuXHJcbi8vZ2V0IHVucHV0ZWQgbmFtZSBhbmQgdXBkYXRlIGlucHV0IHdpZHRoXHJcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dE5hbWUnKTtcclxuaW5wdXROYW1lLnNpemUgPSA5O1xyXG5pZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TmFtZScpKSB7XHJcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlOYW1lJyk7XHJcbiAgICBpbnB1dE5hbWUuc2l6ZSA9IGlucHV0TmFtZS52YWx1ZS5sZW5ndGg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogICAgICBxdW90ZXJzICAgICAqL1xyXG5cclxuLy8gZnVuY3Rpb24gZ2V0UXVvdGUoKSB7XHJcbi8vICAgICBmZXRjaChgaHR0cHM6Ly93d3cuYnJlYWtpbmdiYWRhcGkuY29tL2FwaS9xdW90ZXNgLCB7XHJcbi8vICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcclxuLy8gICAgICAgICBcImhlYWRlcnNcIjoge31cclxuLy8gICAgIH0pXHJcbi8vICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4vLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuLy8gICAgICAgICAgICAgbGV0IHJhbmQgPSBNYXRoLnRydW5jKDAgKyBNYXRoLnJhbmRvbSgpICogKDcxICsgMSAtIDApKTtcclxuLy8gICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RlLXRleHQnKS50ZXh0Q29udGVudCA9ICdcIicgKyByZXNwb25zZVtyYW5kXS5xdW90ZSArICdcIic7XHJcbi8vICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdW90ZS1hdXRob3InKS50ZXh0Q29udGVudCA9IHJlc3BvbnNlW3JhbmRdLmF1dGhvcjtcclxuLy8gICAgICAgICB9KVxyXG4vLyAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vIH1cclxuLy8gZ2V0UXVvdGUoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFF1b3RlcygpIHtcclxuICAgIGNvbnN0IHF1b3RlcyA9ICcuL2Fzc2V0cy9xdW90ZXMuanNvbic7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChxdW90ZXMpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBsZXQgaW5kZXggPSByYW5kb21Gb3JCZygwLCBkYXRhW3NldHRpbmdzT2JqLmxhbmddLmxlbmd0aCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVvdGUtdGV4dCcpLnRleHRDb250ZW50ID0gJ1wiJyArIGRhdGFbc2V0dGluZ3NPYmoubGFuZ11baW5kZXhdWyd0ZXh0J10gKyAnXCInO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RlLWF1dGhvcicpLnRleHRDb250ZW50ID0gZGF0YVtzZXR0aW5nc09iai5sYW5nXVtpbmRleF1bJ2F1dGhvciddO1xyXG5cclxufVxyXG5nZXRRdW90ZXMoKTtcclxuXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVvdGUtcmVmcmVzaCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2V0UXVvdGVzKCkpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGUgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RlLXJlZnJlc2gnKS5jbGFzc0xpc3QuYWRkKCdxdW90ZS1hY3RpdmUnKTtcclxufSlcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RlcycpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdW90ZS1yZWZyZXNoJykuY2xhc3NMaXN0LnJlbW92ZSgncXVvdGUtYWN0aXZlJyk7XHJcbn0pXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVvdGVzJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVvdGVzJykuY2xhc3NMaXN0LmFkZCgncXVvdGVzLXRleHQtYWN0aXZlJyk7XHJcbn0pXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdW90ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVvdGVzJykuY2xhc3NMaXN0LnJlbW92ZSgncXVvdGVzLXRleHQtYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuXHJcbi8vaGlkZSBlbGVtZW50c1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZW50ZXItZGF0ZScpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5ncycpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RlcycpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdWRpby1jb250YWluZXInKS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcblxyXG5cclxuY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8nKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRIaWRlcygpIHtcclxuICAgIGZvciAobGV0IGtleSBpbiBzZXR0aW5nc09iai5oaWRlKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzT2JqLmhpZGVba2V5XSA9PT0gMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGtleSkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGtleSkuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsga2V5KS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBrZXkpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICBzZXR0aW5nc09iai5oaWRlLnRpbWUgPSB+c2V0dGluZ3NPYmouaGlkZS50aW1lO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHRpbmdzT2JqJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3NPYmopKTtcclxuXHJcbn0pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2VudGVyLWRhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNldHRpbmdzT2JqLmhpZGVbXCJjZW50ZXItZGF0ZVwiXSA9IH5zZXR0aW5nc09iai5oaWRlW1wiY2VudGVyLWRhdGVcIl07XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3NPYmonLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nc09iaikpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNlbnRlci1kYXRlJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyZWV0aW5ncycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2V0dGluZ3NPYmouaGlkZS5ncmVldGluZ3MgPSB+c2V0dGluZ3NPYmouaGlkZS5ncmVldGluZ3M7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3NPYmonLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nc09iaikpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWV0aW5ncycpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxufSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdW90ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNldHRpbmdzT2JqLmhpZGUucXVvdGVzID0gfnNldHRpbmdzT2JqLmhpZGUucXVvdGVzO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHRpbmdzT2JqJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3NPYmopKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdW90ZXMnKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbn0pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2V0dGluZ3NPYmouaGlkZS53ZWF0aGVyID0gfnNldHRpbmdzT2JqLmhpZGUud2VhdGhlcjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5nc09iaicsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzT2JqKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxufSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdWRpby1jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICBzZXR0aW5nc09iai5oaWRlWydhdWRpby1jb250YWluZXInXSA9IH5zZXR0aW5nc09iai5oaWRlWydhdWRpby1jb250YWluZXInXTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR0aW5nc09iaicsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzT2JqKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXVkaW8tY29udGFpbmVyJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpbmtzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzZXR0aW5nc09iai5oaWRlLmxpbmtzID0gfnNldHRpbmdzT2JqLmhpZGUubGlua3M7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3NPYmonLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nc09iaikpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpbmtzJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59KTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlZWRzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzZXR0aW5nc09iai5oaWRlLmRlZWRzID0gfnNldHRpbmdzT2JqLmhpZGUuZGVlZHM7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2V0dGluZ3NPYmonLCBKU09OLnN0cmluZ2lmeShzZXR0aW5nc09iaikpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZWRzJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59KTtcclxuXHJcblxyXG5mdW5jdGlvbiBjYXBpdGFsRmlyc3RMZXR0ZXIoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9