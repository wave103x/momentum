import './style.css';
import './style-player.css';
import './deeds.css';


/*      weather          */
const weatherWordInput = document.querySelector('.input-weather-city');
let weatherSearchWord = '';

weatherWordInput.addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        weatherSearchWord = weatherWordInput.value;
        if (weatherSearchWord === '' || weatherSearchWord === null) {
            document.querySelector('.temperature').textContent = 'Invalid city';
            document.querySelector('.weather-icon').textContent = '';
            document.querySelector('.weather-icon').style.width = '1px';
            document.querySelector('.wind-speed').textContent = '';
            document.querySelector('.humidity').textContent = '';
            document.querySelector('.conditions').textContent = '';
            localStorage.removeItem('weatherCity');
        } else {
            weatherSearchWord = weatherSearchWord[0].toUpperCase() + weatherSearchWord.slice(1);
            weatherUpdate(weatherSearchWord);
            weatherWordInput.value = weatherSearchWord;
            localStorage.setItem('weatherCity', JSON.stringify(weatherSearchWord));
        }
    }

});

if (localStorage.getItem('weatherCity')) {
    weatherWordInput.value = JSON.parse(localStorage.getItem('weatherCity'));
    weatherUpdate(JSON.parse(localStorage.getItem('weatherCity')));
} else {
    weatherUpdate('Minsk');
    weatherWordInput.value = 'Minsk';
}

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
            document.querySelector('.wind-speed').innerHTML = '<span class="opacity70">Wind speed:</span> ' + response.currentConditions.windspeed + 'm/s';
            document.querySelector('.humidity').innerHTML = '<span class="opacity70">Humidity:</span> ' + response.currentConditions.humidity + '%';
            document.querySelector('.weather-icon').innerHTML = `<img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/73c8cc581d8d35076b47047088f3bc91cb1dd675/SVG/1st%20Set%20-%20Monochrome/${response.currentConditions.icon}.svg">`;
        })
        .catch(err => {
            console.error(err);
        });
}


/*      backgorund       */
let bgSearchWord = '';
let hours = new Date().getHours();
if (+hours >= 6 && +hours < 12) bgSearchWord = 'morning';
if (+hours >= 12 && +hours < 18) bgSearchWord = 'afternoon';
if (+hours >= 18 && +hours < 24) bgSearchWord = 'evening';
if (+hours >= 0 && +hours < 6) bgSearchWord = 'night';
fetch(`https://api.unsplash.com/search/photos?query=${bgSearchWord}&client_id=uGY17bGixkwPCRtDhfelM4l79HtvEwHTnAaBOz6KMko`, {
    "method": "GET",
    "headers": {},

})
    .then(response => response.json())
    .then(response => {
        let imgIndex = Math.trunc(Math.random() * 10);
        document.querySelector('.main').style.backgroundImage = `url(${response.results[imgIndex].urls.regular})`;

        document.querySelector('.arrow-left').addEventListener('click', () => {
            imgIndex > 8 ? imgIndex = 0 : imgIndex++;
            document.querySelector('.main').style.backgroundImage = `url(${response.results[imgIndex].urls.regular})`;
        })
        document.querySelector('.arrow-right').addEventListener('click', () => {
            imgIndex < 1 ? imgIndex = 9 : imgIndex--;
            document.querySelector('.main').style.backgroundImage = `url(${response.results[imgIndex].urls.regular})`;
        });
        let img;
        for (let i = 0; i < response.results.length; i++) {
            img = new Image();
            img.onload = function () { };
            img.src = response.results[i].urls.regular;
        }
    })

    .catch(err => {
        console.error(err);
    });



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
// setInterval(dateUpdate, 1000);

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
})