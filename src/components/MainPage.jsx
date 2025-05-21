import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import DescriptionService from "./DescriptionService";
import TextImage from "./TextByImage";
export default function MainPage() {
  /* ================= منوی موبایل ================= */
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => setIsMenuVisible((prev) => !prev);
  const closeMenu = () => setIsMenuVisible(false);

  /* ================= Modal مربوط به اینترنت ================= */


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
      <h2 className="Text_welcome H2_font">لطفاً خدمات ما را انتخاب کنید</h2>
      <div className="Container_Box_Service">
        <div className="Box_Service">
          <Link to="/NewsToday">
            <img className="Width_image_box" src="/AiChat21.png" alt="news ai" />
            <h3 className="title_box">اخبار هوش مصنوعی</h3>
          </Link>
        </div>

        <div className="Box_Service">
          <Link to="/WeatherForecast">
            <img
              className="Width_image_box"
              src="/Online-Weather-Forecast.jpg"
              alt="weather forecasting"
            />
            <h3 className="title_box">پیش‌بینی آب‌وهوا</h3>
          </Link>
        </div>

        <div className="Box_Service">
          <Link to="/TextToAudio">
            <img className="Width_image_box" src="/Audio.png" alt="audio to text" />
            <h3 className="title_box">تبدیل متن به صدا</h3>
          </Link>
        </div>
      </div>

      {/* نمایش تصاویر و توضیحات فانتزی */}


      {/* توضیح سرویس‌ها */}
      <div className="container_discription">
        <h2 className="h2_dis h2_padding H2_font">خدمات ما رو بهتر بشناس</h2>

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
            <Link to="/">
              <img className="icon-profile" src="/icons8-home.svg" alt="home" />
            </Link>
            <p>خانه</p>
          </div>
          <div className="div-cursor">
            <Link to="/Setting">
              <img className="icon-profile" src="/icons8-setting.svg" alt="setting" />
            </Link>
            <p>تنظیمات</p>
          </div>
          <div className="div-cursor">
            <button
            
              onClick={toggleMenu}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", alignSelf: "start"}}
            >
              <img className="icon-profile" src="/icon-user.svg" alt="profile" />
            </button>
            <p>منو</p>

          </div>
          <div className="div-cursor">
            <Link to="/About">
              <img className="icon-profile" src="/icons8-about.svg" alt="about" />
            </Link>
            <p>درباره</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

