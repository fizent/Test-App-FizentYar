import { Link } from 'react-router-dom'; // فرض بر این است که نیاز دارید  
import Back_Btn from './Back';
export default function Notification() {  
  return (  
    <div className="about-container">  
      <Back_Btn />
      <div className="about-box">  
        <h1 className="about-title">نوتیف های شما</h1>  
        <p className="about-text">هنوز نوتیفی نداری!</p>  
      </div>  
      
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