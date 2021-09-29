class Weather {
    constructor (city) {
        
        
        this.apiKey = '56342f0c48dc0abf2c66cb7df728af33';
        this.city = city;
        
    
    }

    async getWeather () {
        
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);
        
        const responseData = await response.json();



        return responseData;
    
    }

    changeLocation(city) {

        this.city = city;

    }
}