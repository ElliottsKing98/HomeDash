// updates time in sidebar
function updateTime1() {
            const date = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            const time = date.toLocaleTimeString();
            const day = date.toLocaleDateString(undefined, options);
            document.getElementById('time').innerHTML =
                `${day} at ${time}`;
        }

        setInterval(updateTime1, 1000);
        updateTime();
//updates weather in sidebar
        async function getWeather() {
            try {
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=45.5226732&lon=-122.6542858&appid=d92a6dfa33173ed676eb8b0f5c12a212&units=imperial`);
                const weatherData = await weatherResponse.json();
                displayCurrentWeather(weatherData);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to fetch weather data.');
            }
        }
        
        function displayCurrentWeather(data) {
            const weatherBody = document.getElementById('weatherBody');
            weatherBody.innerHTML = `Gay ${data.name} is ${data.main.temp}°F and feels like ${data.main.feels_like}°F`;
        }
        setInterval(getWeather, 300000);
        getWeather();
//M-F Time Functions
//Monday
    function updateTimeM() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 1);
        const day = date.toLocaleDateString();
        document.getElementById('Mondate').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeM, 1000);
    updateTime();

    function updateTimeM1() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 1);
        const day = date.toLocaleDateString(undefined, { weekday: "long" });
        document.getElementById('Monday').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeM1, 1000);
    updateTime();
// Tuesday
    function updateTimeT() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 2);
        const day = date.toLocaleDateString();
        document.getElementById('Tuesdate').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeT, 1000);
    updateTime();

    function updateTimeT1() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 2);
        const day = date.toLocaleDateString(undefined, { weekday: "long" });
        document.getElementById('Tuesday').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeT1, 1000);
    updateTime();

// Wednesday

    function updateTimeW() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 3);
        const day = date.toLocaleDateString();
        document.getElementById('Wedndate').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeW, 1000);
    updateTime();

function updateTimeW1() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 3);
        const day = date.toLocaleDateString(undefined, { weekday: "long" });
        document.getElementById('Wednesday').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeW1, 1000);
    updateTime();

//Thursday

function updateTimeTh() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 4);
        const day = date.toLocaleDateString();
        document.getElementById('Thurdate').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeTh, 1000);
    updateTime();

    function updateTimeTh1() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 4);
        const day = date.toLocaleDateString(undefined, { weekday: "long" });
        document.getElementById('Thursday').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeTh1, 1000);
    updateTime();

//Friday
    function updateTimeF() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 5);
        const day = date.toLocaleDateString();
        document.getElementById('Fridate').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeF, 1000);
    updateTime();

    function updateTimeF1() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 5);
        const day = date.toLocaleDateString(undefined, { weekday: "long" });
        document.getElementById('Friday').innerHTML =
            `${day}`;
    }
    setInterval(updateTimeF1, 1000);
    updateTime();
