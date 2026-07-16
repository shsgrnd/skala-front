

export async function getWeather(cityQuery) {
    const geocodingUrl =
        "https://geocoding-api.open-meteo.com/v1/search?" +
        `name=${encodeURIComponent(cityQuery)}` +
        "&count=1&language=ko&countryCode=KR";

    const locationResponse = await fetch(geocodingUrl);

    if (!locationResponse.ok) {
        throw new Error("도시 정보 요청에 실패했습니다.");
    }

    const locationData = await locationResponse.json();
    const location = locationData.results?.[0];

    if (!location) {
        throw new Error("도시 좌표를 찾을 수 없습니다.");
    }

    const weatherUrl =
        "https://api.open-meteo.com/v1/forecast?" +
        `latitude=${location.latitude}` +
        `&longitude=${location.longitude}` +
        "&current=temperature_2m,relative_humidity_2m," +
        "apparent_temperature,weather_code,wind_speed_10m" +
        "&timezone=Asia%2FSeoul";

    const weatherResponse = await fetch(weatherUrl);

    if (!weatherResponse.ok) {
        throw new Error("날씨 정보 요청에 실패했습니다.");
    }

    const weatherData = await weatherResponse.json();

    return {
        latitude: location.latitude,
        longitude: location.longitude,
        current: weatherData.current
    };
}