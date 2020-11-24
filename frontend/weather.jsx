import React from 'react'

class Weather extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            weather: null,
            city: "San Francisco"
        }
    }

    componentDidMount(){
        // navigator.geolocation.getCurrentPosition(this.getWeather);
        this.getWeather(this.state.city)
    }

    getWeather(city){

        const apiKey = "62b48d1e226ae257624ef20e594f933f"
        return $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?id=1689973&appid=${apiKey}`,
            method: "GET"
        }).then((res) => this.setState({weather: res.main.temp}))
    }

    // "id": 1689973,
    //     "name": "San Francisco",
    //     "state": "",
    //     "country": "PH",
    //     "coord": {
    //         "lon": 120.832703,
    //         "lat": 15.3525
    //     }
    
    render(){
        // this.getW
        //this.state.weather.main.temp
        //this.state.weather.name < city name
        let temp_f = (this.state.weather - 273.15) * 9/5 + 32;

        return (
            <>
                <h1>Weather</h1>
                <div className="weather" >
                    
                    <p>⛅ San Francisco:</p>
                        <p>{temp_f}F°</p>
            
                </div>
            </>
        )
    }
}

export default Weather;