// DEPENDENCIES
import { useEffect, useState } from 'react'
import axios from 'axios'
import secretKey from '../secret'

// COMPONENT => Display city weather
const Weather = ({ city }) =>{
  //  state: weather info
  const [weatherInfo, setWeatherInfo] = useState(null)

  // set the city for the axios get
  useEffect(() => {
    const axiosWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://weatherapi-com.p.rapidapi.com/current.json',
          {
            params: { q: city },
            headers: {
              'X-RapidAPI-Key': process.env.RAPID_API_KEY,
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            },
          }
        )
        setWeatherInfo(response.data)
        console.log(response.data)
      } catch (error) {
        console.error(error)
        console.log('NO API WORKING')
        setWeatherInfo(null)
      }
    }

    if (city) {
      axiosWeatherData()
    }
  }, [city]
  )
  let bg = ''
  if (weatherInfo){
    if(weatherInfo.current.is_day){
      bg= 'weather-display-day'
    }else{
      bg = 'weather-display-night'
    }

  }

  return(
    <div className={bg}>
    {weatherInfo ? (
      <>
      <h2>{weatherInfo.location.name}</h2>
      <p>
     Region:  {weatherInfo.location.region}<br/>  
       Country: {weatherInfo.location.country}<br/>
      Lat: {weatherInfo.location.lat} Lon: {weatherInfo.location.lon}
      <hr/><h4>Condition</h4>
      <img src={weatherInfo.current.condition.icon}/>{weatherInfo.current.condition.text} <br/>
      <hr/><h4>Temperature</h4>
      { weatherInfo.current.temp_f}°F - feels like { weatherInfo.current.feelslike_f}°F<br/>
      Humidity: {weatherInfo.current.humidity}%
      <hr/><h4>Precipitation</h4>
      Cloud: { weatherInfo.current.cloud}% - Precipitation: { weatherInfo.current.precip_in} in.
      <hr/><h4>Wind</h4>
      Wind: { weatherInfo.current.wind_mph} -{ weatherInfo.current.gust_mph}  mph  { weatherInfo.current.wind_dir} - <img src={require('../img/arrow.png')} style={{transform: `rotate(${weatherInfo.current.wind_degree}deg)`}}/>
      <hr/><h4>Air Quality</h4>
      UV index: {weatherInfo.current.uv} - Visibility: {weatherInfo.current.vis_miles} miles - Pressure: {weatherInfo.current.pressure_mb} mbar
      </p>
      </>
    ):(
      <>
      <h3>.1 Type the name of the city you are interested in <br/>
      .2 Push the 'Search' button <br/>
      .3 Check the weather of that city</h3>
      <p>It is that simple, really :)</p>
      </>
    )}
    </div>
  )
}

export default Weather