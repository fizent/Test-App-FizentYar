import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import FooterCom from "./FooterC";
import Back_Btn from "./Back";

export default function WeatherForecast() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lat, setLat] = useState(35.6892);
  const [lon, setLon] = useState(51.389);

  const api_key = "fafcba43f3b1b1681918474e5aa6eabe";

  const weatherIcons = {
    Clear: "https://openweathermap.org/img/wn/01d.png",
    Clouds: "https://openweathermap.org/img/wn/03d.png",
    Rain: "https://openweathermap.org/img/wn/10d.png",
    Thunderstorm: "https://openweathermap.org/img/wn/11d.png",
    Snow: "https://openweathermap.org/img/wn/13d.png",
    Mist: "https://openweathermap.org/img/wn/50d.png",
  };

  const detectLanguage = (city) => /[آ-ی]/.test(city) ? "fa" : "en";

  const FlyToLocation = ({ lat, lon }) => {
    const map = useMap();
    map.flyTo([lat, lon], 10, { duration: 2 });
    return null;
  };

  const WeatherNew = async () => {
    const lang = detectLanguage(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${api_key}&units=metric&lang=${lang}`;
    try {
      setLoading(true);
      const response = await axios.get(url);
      if (response.status === 200) {
        const data = response.data;
        setTemp(data.main.temp);
        setWeather(data.weather[0].main);
        setDescription(data.weather[0].description);
        setLat(data.coord.lat);
        setLon(data.coord.lon);
        setError("");
      }
    } catch {
      setError("خطا در دریافت اطلاعات هوا.");
      setTemp(""); setWeather(""); setDescription("");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.trim()) await WeatherNew();
    else setError("نام شهر را وارد کنید.");
  };

  return (
    <Box sx={{ px: 2, py: 3, maxWidth: 600, mx: "auto", marginTop: "150px"}}>
      <Back_Btn />
      <Typography variant="h4" textAlign="center" fontWeight={600} mb={2}>
        پیش‌بینی هوا
      </Typography>

      <Card sx={{ p: 2, borderRadius: 3, backgroundColor: "#1e1e1e", color: "#fff" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="نام شهر"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{
              mb: 2,
              input: { color: "#fff" },
              label: { color: "#bbb" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#444" },
                "&:hover fieldset": { borderColor: "#888" },
              },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            disabled={loading}
            sx={{ py: 1.5, borderRadius: 2, backgroundColor: "#2979ff", "&:hover": { backgroundColor: "#1565c0" } }}
          >
            {loading ? <CircularProgress size={22} color="inherit" /> : "جستجو"}
          </Button>
        </form>

        {error && <Typography color="error" mt={2}>{error}</Typography>}

        {temp && (
          <Box mt={3}>
            <Typography variant="h5">دما: {temp}°C</Typography>
            <Typography variant="h6">
              وضعیت: <img src={weatherIcons[weather] || weatherIcons.Clear} alt={weather} width={20} /> {weather}
            </Typography>
            <Typography>توضیحات: {description}</Typography>
          </Box>
        )}
      </Card>

      <Box mt={3} sx={{ height: 300, borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
        <MapContainer
          center={[lat, lon]}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <TileLayer
            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${api_key}`}
            opacity={0.6}
          />
          <FlyToLocation lat={lat} lon={lon} />
        </MapContainer>
      </Box>

      {/* <FooterCom /> */}
    </Box>
  );
}
