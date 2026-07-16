

import { getWeather } from "./weatherAPI.js";

const weatherSelect = document.querySelector(".weather-select");
const weatherBox = document.querySelector("#weather-box");

function getWeatherDescription(code) {
    const descriptions = {
        0: "맑음",
        1: "대체로 맑음",
        2: "부분적으로 흐림",
        3: "흐림",
        45: "안개",
        48: "서리 안개",
        51: "약한 이슬비",
        53: "이슬비",
        55: "강한 이슬비",
        61: "약한 비",
        63: "비",
        65: "강한 비",
        71: "약한 눈",
        73: "눈",
        75: "강한 눈",
        80: "약한 소나기",
        81: "소나기",
        82: "강한 소나기",
        95: "천둥번개"
    };

    return descriptions[code] ?? "알 수 없음";
}

async function showWeather(event) {

    const cityQuery = event.target.value;
    const cityName =
        event.target.selectedOptions[0].textContent.trim();

    weatherBox.innerHTML =
        "<p>날씨 정보를 불러오는 중...</p>";

    try {
        const weather = await getWeather(cityQuery);
        const current = weather.current;

        weatherBox.innerHTML = `
            <strong>${cityName} 현재 날씨</strong>
            <p>기온: ${current.temperature_2m}℃</p>
            <p>체감 온도: ${current.apparent_temperature}℃</p>
            <p>습도: ${current.relative_humidity_2m}%</p>
            <p>풍속: ${current.wind_speed_10m} km/h</p>
            <p>날씨: ${getWeatherDescription(current.weather_code)}</p>
        `;
    } catch (error) {
        weatherBox.innerHTML = `
            <p>${error.message}</p>
        `;
    }
}

weatherSelect.addEventListener("change", showWeather);