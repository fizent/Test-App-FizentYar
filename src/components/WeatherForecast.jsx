import axios from "axios";
import { useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import BackButton from "./BackButton";

import "leaflet/dist/leaflet.css";

export default function WeatherForecast() {
  const [city, setCity] = useState("");
  const [main, setMain] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [lat, setLat] = useState(35.6892); // Tehran
  const [lon, setLon] = useState(51.389);

  const api_key = "fafcba43f3b1b1681918474e5aa6eabe"; // کلید رایگان OpenWeather

  // تشخیص زبان ورودی (اگر ورودی فارسی باشد، زبان را به fa تنظیم می‌کند)
  function detectLanguage(city) {
    const persianChars = /[آ-ی]/;
    return persianChars.test(city) ? "fa" : "en";
  }

  function FlyToLocation({ lat, lon }) {
    const map = useMap();
    map.flyTo([lat, lon], 10, {
      duration: 2,
    });
    return null;
  }

  async function WeatherNew() {
    const lang = detectLanguage(city); // تشخیص زبان بر اساس ورودی شهر
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=${lang}`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      if (response.status === 200) {
        setTemp(data.main.temp);
        setMain(data.weather[0].main);
        setWeather(data.weather[0].main);

        // ترجمه وضعیت آب و هوا به فارسی
        if (lang === "fa") {
          const weatherTranslations = {
            "Clear": "صاف",
            "Clouds": "ابری",
            "Rain": "بارانی",
            "Thunderstorm": "طوفان رعد و برق",
            "Snow": "برف",
            "Mist": "مه",
          };

          const translatedWeather = weatherTranslations[data.weather[0].main] || data.weather[0].main;
          setWeather(translatedWeather);

          const descriptionTranslations = {
            "clear sky": "آسمان صاف",
            "few clouds": "ابری کمی",
            "scattered clouds": "ابری پراکنده",
            "broken clouds": "ابری نیمه‌پراکنده",
            "shower rain": "باران شل",
            "rain": "باران",
            "thunderstorm": "طوفان رعد و برق",
            "snow": "برف",
            "mist": "مه",
          };

          const translatedDescription = descriptionTranslations[data.weather[0].description] || data.weather[0].description;
          setDescription(translatedDescription);
        } else {
          setDescription(data.weather[0].description); // برای زبان انگلیسی
        }

        setError("");
        return data.coord; // ارسال مختصات موقعیت
      }
    } catch (error) {
      setError("مشکلی در دریافت اطلاعات پیش آمد.");
      setTemp("");
      setMain("");
      setWeather("");
      setDescription("");
    }
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (city.trim()) {
      const coord = await WeatherNew();
      if (coord) {
        setLat(coord.lat);
        setLon(coord.lon);
      }
    } else {
      setError("Please Enter City/Country");
    }
  };

  // آیکون‌های وضعیت آب و هوا
  const weatherIcons = {
    Clear: "https://openweathermap.org/img/wn/01d.png", // آیکون آسمان صاف
    Clouds: "https://openweathermap.org/img/wn/03d.png", // آیکون ابری
    Rain: "https://openweathermap.org/img/wn/10d.png", // آیکون باران
    Thunderstorm: "https://openweathermap.org/img/wn/11d.png", // آیکون طوفان رعد و برق
    Snow: "https://openweathermap.org/img/wn/13d.png", // آیکون برف
    Mist: "https://openweathermap.org/img/wn/50d.png", // آیکون مه
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <BackButton />
      <div className="Info_box_weather">
        <h1>Weather Forecast</h1>
        <form className="form_weather" onSubmit={HandleSubmit}>
          <input
            className="input_weather"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Please Enter City/Country"
          />
          <button className="BtnSend btn_Audio" id="btn_color_weather" type="submit">
            Get Weather
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="info_weather">
          <h2 className="info_h2" id="temperature">
            Temperature: {temp}°C
          </h2>
          <h2 className="info_h2" id="weather">
            Weather: <img src={weatherIcons[weather] || weatherIcons.Clear} alt={weather} width="20" height="20" /> {weather}
          </h2>
          <h2 className="info_h2" id="description">
            Description: {description}
          </h2>
        </div>
      </div>

      {/* اینجا به عنوان پس‌زمینه از نقشه استفاده می‌کنیم */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "-1",
        }}
      >
        <MapContainer
          center={[lat, lon]}
          zoom={7}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1", // نقشه به عنوان پس‌زمینه
          }}
        >
          {/* نقشه پایه */}
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* لایه آب و هوا */}
          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${api_key}`}
            opacity={0.6}
          />
          {/* رفتن به موقعیت جدید */}
          <FlyToLocation lat={lat} lon={lon} />
        </MapContainer>
      </div>
    </div>
  );
}
