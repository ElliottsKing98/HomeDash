// updates time in sidebar
function updateTime() {
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

        setInterval(updateTime, 1000);
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

//Monday time functions
    function updateTime() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 1);
        const day = date.toLocaleDateString();
        document.getElementById('Mondate').innerHTML =
            `${day}`;
    }
    setInterval(updateTime, 1000);
    updateTime();

    function updateTime() {
        const now = new Date()
        const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 1);
        const day = date.toLocaleDateString(undefined, { weekday: "long" });
        document.getElementById('Monday').innerHTML =
            `${day}`;
    }
    setInterval(updateTime, 1000);
    updateTime();
