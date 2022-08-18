import './style.css';
import './style-player.css';
import './deeds.css';
import Icon from './assets/githubLogo.svg'
import Icon2 from './assets/rs_school_js.svg'


/*      weather          */
const weatherWordInput = document.querySelector('.input-weather-city');
let weatherSearchWord = '';

if (localStorage.getItem('weatherCity')) {
    weatherWordInput.value = JSON.parse(localStorage.getItem('weatherCity'));
    weatherUpdate(JSON.parse(localStorage.getItem('weatherCity')));
} else {
    weatherUpdate('Minsk');
    weatherWordInput.value = 'Minsk';
}

weatherWordInput.addEventListener('keypress', e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        weatherSearchWord = weatherWordInput.value;
        if (weatherSearchWord === '' || weatherSearchWord === null) {
            showInvalidWeather()
        } else {
            weatherSearchWord = weatherSearchWord[0].toUpperCase() + weatherSearchWord.slice(1);
            weatherUpdate(weatherSearchWord);
            weatherWordInput.value = weatherSearchWord;
            localStorage.setItem('weatherCity', JSON.stringify(weatherSearchWord));
        }
    }

});

function weatherUpdate(city = 'Minsk') {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&lang=en&key=4BSGFC52XJ96N6F5WJFYM8M4P&contentType=json`, {
        "method": "GET",
        "headers": {
        }
    })
        .then(function (response) { return response.json() })
        .then(response => {
            document.querySelector('.temperature').innerHTML = response.currentConditions.feelslike + '&deg;';
            document.querySelector('.conditions').innerHTML = response.currentConditions.conditions;
            document.querySelector('.wind-speed').innerHTML = '<span class="opacity70">Wind speed:</span> ' + Math.round(response.currentConditions.windspeed) + 'm/s';
            document.querySelector('.humidity').innerHTML = '<span class="opacity70">Humidity:</span> ' + Math.round(response.currentConditions.humidity) + '%';
            document.querySelector('.weather-icon').innerHTML = `<img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/1st%20Set%20-%20Monochrome/${response.currentConditions.icon}.svg">`;
        })
        .catch(err => {
            showInvalidWeather();
            console.error(err);
        });
}

function showInvalidWeather() {
    document.querySelector('.temperature').textContent = 'Invalid city';
    document.querySelector('.weather-icon').textContent = '';
    document.querySelector('.weather-icon').style.width = '1px';
    document.querySelector('.wind-speed').textContent = '';
    document.querySelector('.humidity').textContent = '';
    document.querySelector('.conditions').textContent = '';
    localStorage.removeItem('weatherCity');
}

/*      backgorund       */
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const main = document.querySelector('.main');
const inputMood = document.querySelector('#input-mood');

let settingsObj = {
    lang: 'en',
    bg: 'git',
    mood: '',
    hide: {
        time: 0,
    },
};

if (localStorage.getItem('settingsObj')) {
    settingsObj = JSON.parse(localStorage.getItem('settingsObj'));
    inputMood.value = settingsObj.mood;
}
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
    localStorage.setItem('settingsObj', JSON.stringify(settingsObj));
    setImgGit();
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

//show time
const todayTime = document.querySelector('.time');
const sayHello = document.querySelector('.hello-to-name');

const dateUpdate = () => {
    let now = new Date();
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    todayTime.textContent = `${hours} : ${minutes} : ${seconds}`;
    document.querySelector('.center-date').textContent = now.toLocaleDateString('en-UK', { weekday: 'long', month: 'long', day: 'numeric' });

    if (+hours >= 6 && +hours < 12) sayHello.textContent = 'Good morning,';
    if (+hours >= 12 && +hours < 18) sayHello.textContent = 'Good afternoon,';
    if (+hours >= 18 && +hours < 24) sayHello.textContent = 'Good evening,';
    if (+hours >= 0 && +hours < 6) sayHello.textContent = 'Good night,';
}
dateUpdate();
setInterval(dateUpdate, 1000);

//get unputed name and update input width
const inputName = document.querySelector('.inputName');
inputName.size = 8;
if (localStorage.getItem('myName')) {
    inputName.value = localStorage.getItem('myName');
    inputName.size = inputName.value.length;
}



/*      quoters     */
function getQuote() {
    fetch(`https://www.breakingbadapi.com/api/quotes`, {
        "method": "GET",
        "headers": {}
    })
        .then(response => response.json())
        .then(response => {
            let rand = Math.trunc(0 + Math.random() * (71 + 1 - 0));
            document.querySelector('.quote-text').textContent = '"' + response[rand].quote + '"';
            document.querySelector('.quote-author').textContent = response[rand].author;
        })
        .catch(err => {
            console.error(err);
        });
}
getQuote();

document.querySelector('.quote-refresh').addEventListener('click', () => getQuote());

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
document.querySelector('.links').classList.add('visible');
document.querySelector('.deeds').classList.add('visible');


document.querySelector('#hide-time').addEventListener('click', () => {
    document.querySelector('.time').classList.toggle('hide');
});
document.querySelector('#day').addEventListener('click', () => {
    document.querySelector('.center-date').classList.toggle('hide');
});
document.querySelector('#greet').addEventListener('click', () => {
    document.querySelector('.greetings').classList.toggle('hide');
});
document.querySelector('#quote').addEventListener('click', () => {
    document.querySelector('.quotes').classList.toggle('hide');
});
document.querySelector('#weather').addEventListener('click', () => {
    document.querySelector('.weather').classList.toggle('hide');
});
document.querySelector('#audio').addEventListener('click', () => {
    document.querySelector('.audio-container').classList.toggle('hide');
});
document.querySelector('#links').addEventListener('click', () => {
    document.querySelector('.links').classList.toggle('hide');
});
document.querySelector('#todo').addEventListener('click', () => {
    document.querySelector('.deeds').classList.toggle('hide');
});
