// MainPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import DescriptionService from "./DescriptionService";

export default function MainPage() {
  /* ================= منوی موبایل ================= */
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => setIsMenuVisible((p) => !p);
  const closeMenu = () => setIsMenuVisible(false);

  /* ================= رندر ================= */
  return (
    <div className="Container_Page">
      {/* دکمهٔ منو */}
      <div className="menu-toggle-btn back_header">
        <button className="btn_menu" onClick={toggleMenu}>
          <img
            className="img_menu_toggle"
            src="/icons8-menü.svg"
            alt="Toggle Menu"
          />
        </button>
      </div>

      {/* منوی موبایل */}
      <MenuMobile isVisible={isMenuVisible} closeMenu={closeMenu} />

      {/* متن خوش‌آمد */}
      <div className="container_welcomeText">
        <h1 className="Text_welcome Padding_bottom_10_Welcom">
          سلام، به <b className="btak">FizentYar</b> خوش آمدید
        </h1>
        <p className="Text_description">
          FizentYar برای زندگی آسان و پاسخ به بهترین سوالات به ما کمک می‌کند
        </p>
      </div>

      {/* باکس سرویس‌ها */}
      <h2 className="Text_welcome">لطفاً خدمات ما را انتخاب کنید</h2>
      <div className="Container_Box_Service">
        <div className="Box_Service">
          <Link to="/NewsToday">
            <img className="Width_image_box" src="/AiChat21.png" alt="" />
            <h3 className="title_box">اخبار هوش مصنوعی</h3>
          </Link>
        </div>

        <div className="Box_Service">
          <Link to="/WeatherForecast">
            <img
              className="Width_image_box"
              src="/Online-Weather-Forecast.jpg"
              alt=""
            />
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

      {/* توضیح سرویس‌ها */}
      <div className="container_discription">
        <h2 className="h2_dis h2_padding">خدمات ما رو بهتر بشناس</h2>

        <DescriptionService
          Desh3="اخبار هوش مصنوعی"
          Desp="این ابزار به شما کمک می‌کند که با کمک هوش مصنوعی بتوانید به به‌روزترین و دقیق‌ترین اخبار دسترسی داشته باشید."
        />

        <DescriptionService
          Desh3="تبدیل صوت به متن"
          Desp="کافی است فایل صوتی یا صدای زنده را بدهید؛ سرویس در چند ثانیه آن را به متن دقیق فارسی یا هر زبان دلخواه تبدیل می‌کند."
        />

        <DescriptionService
          Desh3="پیش‌بینی وضعیت هوا"
          Desp="با استفاده از مدل‌های یادگیری ماشین و داده‌های به‌روز، این ابزار پیش‌بینی دقیق دما، بارش و کیفیت هوا را برای شهرهای مختلف ارائه می‌دهد."
        />
      </div>

      {/* فوتر */}
      <footer className="footer">
        <div className="footer-container">  
          <div className="div-cursor">  
            <Link to="/"><img className="icon-profile" src="/icons8-home.svg" alt="" /></Link>  
          </div>  
          <div className="div-cursor">  
            <Link to="/Setting"><img className="icon-profile" src="/icons8-setting.svg" alt="" /></Link>  
          </div>
          <div className="div-cursor">  
            <button onClick={toggleMenu} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>  
              <img className="icon-profile" src="/icon-user.svg" alt="Profile" />  
            </button>  
          </div>  
          <div className="div-cursor">  
            <Link to="/About"><img className="icon-profile" src="/icons8-about.svg" alt="" /></Link>  
          </div>  
        </div>  
      </footer>
    </div>
  );
}
