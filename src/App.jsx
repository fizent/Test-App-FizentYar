import { Routes, Route } from 'react-router-dom';  
import MainPage from './components/MainPage';
import ChatGpt from './components/ChatGpt';
import WeatherForecast from './components/WeatherForecast';
import ChangeTextToAudio from './components/Change text to audio';
import About from './components/About';
import Setting from './components/Setting';
import './App.css'
function App() {  
  return (  
    <div>  
      <Routes>  
        <Route path="/" element={<MainPage />} />  
        <Route path='/ChatAi' element={<ChatGpt />}></Route>
        <Route path='/TextToAudio' element={<ChangeTextToAudio />}></Route>
        <Route path="/WeatherForecast" element={<WeatherForecast />}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Setting' element={<Setting/>}></Route>

      </Routes>  
    </div>  
  );  
}  

export default App;  