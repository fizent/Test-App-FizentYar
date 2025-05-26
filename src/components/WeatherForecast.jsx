import axios from "axios";  
import { useState } from "react";  
import { MapContainer, TileLayer, useMap } from "react-leaflet";  
import { Link } from "react-router-dom"; // assuming you use react-router  
import Back_Btn from "./Back";
import "leaflet/dist/leaflet.css";  
export default function WeatherForecast() {  
  const [city, setCity] = useState("");  
  const [main, setMain] = useState("");  
  const [temp, setTemp] = useState("");  
  const [weather, setWeather] = useState("");  
  const [description, setDescription] = useState("");  
  const [error, setError] = useState("");  
  const [lat, setLat] = useState(35.6892); // تهران  
  const [lon, setLon] = useState(51.389);  

  const api_key = "fafcba43f3b1b1681918474e5aa6eabe";  

  // تشخیص زبان ورودی  
  function detectLanguage(city) {  
    const persianChars = /[آ-ی]/;  
    return persianChars.test(city) ? "fa" : "en";  
  }  

  // رفتن به مکان جدید روی نقشه  
  function FlyToLocation({ lat, lon }) {  
    const map = useMap();  
    map.flyTo([lat, lon], 10, { duration: 2 });  
    return null;  
  }  

  async function WeatherNew() {  
    const lang = detectLanguage(city);  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${api_key}&units=metric&lang=${lang}`;  
    try {  
      const response = await axios.get(url);  
      if (response.status === 200) {  
        const data = response.data;  
        setTemp(data.main.temp);  
        let weatherMain = data.weather[0].main;  
        let weatherDesc = data.weather[0].description;  

        // ترجمه به فارسی  
        if (lang === "fa") {  
          const weatherTranslations = {  
            "Clear": "صاف",  
            "Clouds": "ابری",  
            "Rain": "بارانی",  
            "Thunderstorm": "طوفان رعد و برق",  
            "Snow": "برف",  
            "Mist": "مه",  
          };  
          weatherMain = weatherTranslations[weatherMain] || weatherMain;  

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
          weatherDesc = descriptionTranslations[weatherDesc] || weatherDesc;  
        }  

        setWeather(weatherMain);  
        setDescription(weatherDesc);  
        setMain(weatherMain);  
        setError("");  

        return data.coord; // برمی‌گرداند مختصات  
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
      setError("لطفاً نام شهر یا کشور را وارد کنید.");  
    }  
  };  

  const weatherIcons = {  
    Clear: "https://openweathermap.org/img/wn/01d.png",  
    Clouds: "https://openweathermap.org/img/wn/03d.png",  
    Rain: "https://openweathermap.org/img/wn/10d.png",  
    Thunderstorm: "https://openweathermap.org/img/wn/11d.png",  
    Snow: "https://openweathermap.org/img/wn/13d.png",  
    Mist: "https://openweathermap.org/img/wn/50d.png",  
  };  

  return (  
    <div style={{ position: "relative", minHeight: "100vh" }}>  
      <Back_Btn />
      {/* قسمت اطلاعات وضعیت آب و هوا */}  
      <div className="Info_box_weather">  
        <h1 id="Text_info">پیش‌بینی وضعیت آب و هوا</h1>  
        <form className="form_weather" onSubmit={HandleSubmit}>  
          <input  
            className="input_weather"  
            type="text"  
            value={city}  
            onChange={(e) => setCity(e.target.value)}  
            placeholder="لطفاً نام شهر یا کشور را وارد کنید"  
          />  
          <button className="BtnSend btn_Audio" id="btn_color_weather" type="submit">  
            دریافت آب‌وهوا  
          </button>  
        </form>  
        {error && <p style={{ color: "red" }}>{error}</p>}  
        <div className="info_weather">  
          <h2 className="info_h2" id="temperature">  
            دما: {temp}°C  
          </h2>  
          <h2 className="info_h2" id="weather">  
            وضعیت:{" "}  
            <img  
              src={weatherIcons[weather] || weatherIcons.Clear}  
              alt={weather}  
              width="20"  
              height="20"  
            />{" "}  
            {weather}  
          </h2>  
          <h2 className="info_h2" id="description">  
            توضیحات: {description}  
          </h2>  
        </div>  
      </div>  

      {/* نقشه پس‌زمینه */}  
      <div  
        style={{  
          position: "absolute",  
          top: 0,  
          left: 0,  
          right: 0,  
          bottom: 0,  
          zIndex: -1,  
        }}  
      >  
        <MapContainer  
          center={[lat, lon]}  
          zoom={7}  
          style={{  
            height: "100%",  
            width: "100%",  
            position: "absolute",  
            top: 0,  
            left: 0,  
            zIndex: -1,  
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
          <FlyToLocation lat={lat} lon={lon} />  
        </MapContainer>  
      </div>  

      {/* فوتر */}  
      <div className="absolut">
        <footer className="footer">
            <div className="footer-container">
              <div className="div-cursor">
                <Link to="/">
                  <img className="icon-profile" src="/icons8-home.svg" alt="" />
                </Link>
                <p>خانه</p>
              </div>
              <div className="div-cursor">
                <Link to="/Setting">
                  <img className="icon-profile" src="/icons8-setting.svg" alt="" />
                </Link>
                <p>تنظیمات</p>
              </div>
              <div className="div-cursor">
                <Link to="/About">
                  <img className="icon-profile" src="/icons8-about.svg" alt="" />
                </Link>
                <p>درباره</p>
              </div>
            </div>
          </footer>
      </div>
    </div>  
  );  
}  