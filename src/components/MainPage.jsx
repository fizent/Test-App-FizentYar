import { useState,useEffect } from "react";  
import MenuMobile from "./MenuMobile";  
import { Link } from "react-router-dom";  
import ChatGpt from "./NewsToday";  

export default function MainPage() {  
  const [isMenuVisible, setIsMenuVisible] = useState(false);  
  const [notif, setNotif] = useState(true)

  useEffect(()=> {
    const setTimer = setTimeout(() => {
      setNotif(false);
    }, 3000);
    return () => clearTimeout(setTimer);
  }, [])

  const toggleMenu = () => {  
    setIsMenuVisible(prev => !prev);  
  };  

  const closeMenu = () => {  
    setIsMenuVisible(false);  
  };  

  return (  
    <div className="Container_Page">
      <div className="notif">
        {notif && (
          <div className="show_notif">
            <h2>اینترنتت روشن باشه پسر!</h2>
          </div>
        )}
      </div>
      <div className="menu-toggle-btn">  
        <div className="back_header">
          <button className="btn_menu" onClick={toggleMenu}>
            <img className="img_menu_toggle" src="/icons8-menü.svg" alt="Toggle Menu" />
          </button>
        </div>
      </div>  
      <MenuMobile isVisible={isMenuVisible} closeMenu={closeMenu} />  
      <div className="container_welcomeText">  
        <h1 className="Text_welcome Padding_bottom_10_Welcom">سلام، به <b className="btak">FizentYar</b> خوش آمدید</h1>  
        <p className="Text_description">FizentYar برای زندگی آسان و پاسخ به بهترین سوالات به ما کمک می‌کند</p>  
      </div>  

      <div>  
        <h2 className="Text_welcome">لطفاً خدمات ما را انتخاب کنید</h2>  
        <div className="Container_Box_Service">  
          <div className="Box_Service">  
            <Link to='/NewsToday'>  
              <img className="Width_image_box" src="/AiChat21.png" alt="" />  
              <h3 className="title_box">اخبار هوش مصنوعی</h3>  
            </Link>  
          </div>  
          <div className="Box_Service">  
            <Link to="/WeatherForecast">  
              <img className="Width_image_box" src="/Online-Weather-Forecast.jpg" alt="" />  
              <h3 className="title_box">پیش‌بینی آب‌وهوا</h3>  
            </Link>  
          </div>  
          <div className="Box_Service">  
            <Link to="/TextToAudio">  
              <img className="Width_image_box" src="/Audio.png" alt="" />  
              <h3 className="title_box">تبدیل متن به صدا</h3>  
            </Link>  
          </div>  
        </div>
      </div>  
      <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">FizentYar</h2>
        <p className="footer-description">دوست هوشمند شما برای انجام کارهای روزمره با قدرت هوش مصنوعی</p>
        
        <div className="footer-links">
          <div>
            <h4>لینک‌ها</h4>
            <ul>
              <li><a href="/About">درباره ما</a></li>
              <li><a href="/Setting">تنظیمات</a></li>
              <li><a href="https://myket.ir/app/app.vercel.test_app_fizent_yar.twa">دانلود از مایکت</a></li>
            </ul>
          </div>
          <div>
            <h4>ارتباط با ما</h4>
            <ul>
              <li>
                <a href="https://fazelzare.liara.run/">مراجه به سایت</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-bottom">© {new Date().getFullYear()} FizentYar - تمامی حقوق محفوظ است.</p>
      </div>
    </footer>

    </div>  
  );  
}  