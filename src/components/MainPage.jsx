import { useState } from "react";
import MenuMobile from "./MenuMobile";
import { Link } from "react-router-dom";
import ChatGpt from "./ChatGpt";
export default function MainPage() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <div className="Container_Page">
      <div  className="menu-toggle-btn">
        <button className="btn_menu" onClick={toggleMenu}>
          <img className="img_menu_toggle" src="/public/icons8-menü.svg" alt="Toggle Menu" />
        </button>
      </div>
      <MenuMobile isVisible={isMenuVisible} closeMenu={closeMenu} />
      <div className="container_welcomeText">
        <h1 className="Text_welcome">Hi welcome to <b className="btak">FizentYar</b></h1>
        <p className="Text_description">FizentYar for easy life and for answer best question we help to us</p>
      </div>

      <div>
        <h2 className="Text_welcome">Please Choise Service</h2>
        <div className="Container_Box_Service">
          <div className="Box_Service">
            <Link to='/ChatAi'>
              <img className="Width_image_box" src="/public/AiChat21.png" alt="" />
              <h3 className="title_box">Chat Ai</h3>
            </Link>
          </div>
          <div className="Box_Service">
            <Link to="/WeatherForecast">
              <img className="Width_image_box" src="/public/Online-Weather-Forecast.jpg" alt="" />
              <h3 className="title_box">WeatherForecast</h3>
            </Link>
          </div>
          <div className="Box_Service">
            <Link to="/TextToAudio">
              <img className="Width_image_box" src="/public/Audio.png" alt="" />
              <h3 className="title_box">Audio To Text</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
