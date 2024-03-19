const API_KEY = 'de44bfb34de4fe805eaf19d3633f0b5b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

    console.log( url);
    return fetch(url)
        .then((res) => res.json());
};

const formatCurrentWeather = (data) => {
    const {
        coord: {
            lat,
            lon
        },
        main: {
            temp,
            feels_like,
            humidity,
            pressure,
            temp_max,
            temp_min
        },
        name,
        dt,
        weather,
        sys: {
            country,
            sunrise,
            sunset
        },
        wind: { speed }
    } = data;

    const { main: details, icon } = weather[0];

    return {
        lat,
        lon,
        temp,
        feels_like,
        humidity,
        pressure,
        temp_max,
        temp_min,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed
    }
}



const getFormattedWeatherData = async (searchParams) => {

    const formattedCurrentWeather = await getWeatherData('weather',
        searchParams).then(formatCurrentWeather);

    return { ...formattedCurrentWeather };
};



export default getFormattedWeatherData;