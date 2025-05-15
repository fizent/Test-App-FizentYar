import { Routes, Route } from 'react-router-dom';  
import MainPage from './components/MainPage';
import NewsToday from './components/NewsToday';
import WeatherForecast from './components/WeatherForecast';
import ChangeTextToAudio from './components/Change text to audio';
import About from './components/About';
import Setting from './components/Setting';
import Notification from './components/Notification';
import InfoApp from './components/InformationApp';
import './App.css'
import { useEffect, useState } from 'react';
function App() {  

  const [load, setLoad] = useState(true)

  useEffect(()=> {
    const timeOut = setTimeout(() => {
      setLoad(false)
    }, 5000);
    return ()=> clearTimeout(timeOut)
  },[])

  if(load) {
    return(
      <div className='Loading'>
        <img src="/Loading.svg" alt="" />
        <h2>FizentYar</h2>
        <p>اینترنتت روشن باشه !</p>
      </div>
    )
  }
  return (  
    <div>  
      <Routes>  
        <Route path="/" element={<MainPage />} />  
        <Route path='/NewsToday' element={<NewsToday />}></Route>
        <Route path='/TextToAudio' element={<ChangeTextToAudio />}></Route>
        <Route path="/WeatherForecast" element={<WeatherForecast />}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Setting' element={<Setting/>}></Route>
        <Route path='/Notification' element={<Notification/>}></Route>
        <Route path='/InformationApp' element={<InfoApp/>}></Route>


      </Routes>  
    </div>  
  );  
}  

export default App;  