class UI {
    constructor() {

        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
        

    }

    paint(weather) {

        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1);
        this.string.textContent = `${weather.main.temp}°c`;
        this.iconProperty = weather.weather[0].icon;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${this.iconProperty}@2x.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}°c`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}mb`;
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;

    }

    showAlert(message, className) {

        this.clearAlert();

        const div = document.createElement('div');

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');

        const row = document.querySelector('.row');

        container.insertBefore(div, row);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    clearAlert() {

        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
}