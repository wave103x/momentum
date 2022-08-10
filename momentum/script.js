/*      weather          */
const weatherWordInput = document.querySelector('.input-weather-city');
let weatherSearchWord = '';

weatherWordInput.addEventListener('keyup', e => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        if (weatherSearchWord === '' || weatherSearchWord === null) {
            document.querySelector('.temperature').textContent = 'Invalid city';
            document.querySelector('.wind-speed').textContent = '';
            document.querySelector('.humidity').textContent = '';
        } else {
            localStorage.setItem('weatherCity', JSON.stringify(weatherSearchWord));
            weatherUpdate(weatherSearchWord);
        }
    }

})

function weatherUpdate(city='Minsk') {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&lang=en&key=4BSGFC52XJ96N6F5WJFYM8M4P&contentType=json`, {
        "method": "GET",
        "headers": {
        }
    })
        .then(function (response) { return response.json() })
        .then(response => {
            document.querySelector('.temperature').innerHTML = response.currentConditions.feelslike + '&deg; ' + response.currentConditions.conditions;
            document.querySelector('.wind-speed').textContent = 'Wind speed: ' + response.currentConditions.windspeed + 'm/s';
            document.querySelector('.humidity').textContent = 'Humidity: ' + response.currentConditions.humidity + '%';
            // document.querySelector('.weather-icon').innerHTML = `<img src="https://raw.githubusercontent.com/visualcrossing/WeatherIcons/73c8cc581d8d35076b47047088f3bc91cb1dd675/SVG/1st%20Set%20-%20Monochrome/${response.currentConditions.icon}.svg">`;
        })
        .catch(err => {
            console.error(err);
        });
}
if (localStorage.getItem('weatherCity')) {
    weatherWordInput.value = JSON.parse(localStorage.getItem('weatherCity'));
    weatherUpdate(JSON.parse(localStorage.getItem('weatherCity')));
} else weatherUpdate();


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
        console.log(response);

        let imgIndex = Math.trunc(Math.random() * 10);
        document.querySelector('.main').style.backgroundImage = `url(${response.results[imgIndex].urls.regular})`;

        document.querySelector('.arrow-left').addEventListener('click', () => {
            imgIndex > 8 ? imgIndex = 0 : imgIndex++;
            document.querySelector('.main').style.backgroundImage = `url(${response.results[imgIndex].urls.regular})`;
        })
        document.querySelector('.arrow-right').addEventListener('click', () => {
            imgIndex < 1 ? imgIndex = 9 : imgIndex--;
            document.querySelector('.main').style.backgroundImage = `url(${response.results[imgIndex].urls.regular})`;
        })
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
fetch(`https://favqs.com/api/qotd`, {
    "method": "GET",
    "headers": {}
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let quoteText = document.querySelector('.quote-text');
        let quoteAuthor = document.querySelector('.quote-author');
        quoteText.textContent = '" ' + response.quote.body + ' "';
        quoteAuthor.textContent = '" ' + response.quote.author + ' "';
    })
    .catch(err => {
        console.error(err);
    });
}
getQuote();

document.querySelector('.quote-refresh').addEventListener('click', () => getQuote());