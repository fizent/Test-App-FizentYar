import { Link } from "react-router-dom";  
import BackButton from "./BackButton";  

export default function About() {  
  return (  
    <div className="about-container">  
      {/* بخش محتوای اصلی */}  
      <div className="about-box">  
        <BackButton />  
        <h1 className="about-title">درباره من</h1>  
        <p className="about-text">  
          من فاضل زارع، یک توسعه‌دهنده وب و اپلیکیشن با اشتیاق و تجربه‌ای در مهندسی برق و اتوماسیون صنعتی هستم.  
          هدف من ایجاد راه‌حل‌های دیجیتال مدرن، هوشمند و ساده است که زندگی را برای همه آسان‌تر کند.  
          <br />  
          با ترکیب دانش خود در فن‌آوری و سیستم‌های الکتریکی، سعی می‌کنم اپلیکیشن‌ها و وب‌سایت‌های قدرتمندی با طراحی زیبا و کارکرد هوشمند بسازم.  
          همیشه در حال یادگیری و بهبود هستم و در حال کار بر روی آینده‌ای متصل و نوآورانه هستم.  
        </p>  
        <p>  
          وب‌سایت من{" "}  
          <div id="site_link">  
            <a  
              href="https://fazelzare.liara.run/"  
              target="_blank"  
              rel="noopener noreferrer"  
            >  
              FazelZare  
            </a>  
          </div>  
        </p>  
      </div>  

      {/* فوتر با آیکون‌ها */}  
      <div className="absolut">  
        <footer className="footer">  
          <div className="footer-container">  
            <div className="div-cursor">  
              <Link to="/">  
                <img  
                  className="icon-profile"  
                  src="/icons8-home.svg"  
                  alt="خانه"  
                />  
              </Link>  
            </div>  
            <div className="div-cursor">  
              <Link to="/Setting">  
                <img  
                  className="icon-profile"  
                  src="/icons8-setting.svg"  
                  alt="تنظیمات"  
                />  
              </Link>  
            </div>  
            <div className="div-cursor">  
              <Link to="/About">  
                <img  
                  className="icon-profile"  
                  src="/icons8-about.svg"  
                  alt="درباره من"  
                />  
              </Link>  
            </div>  
          </div>  
        </footer>  
      </div>  
    </div>  
  );  
}  