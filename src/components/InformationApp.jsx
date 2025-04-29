import { Link } from 'react-router-dom';  
import BackButton from "./BackButton";

export default function InfoApp() {  
  return (  
    <div className="about-container">  
      <BackButton /> 
      <div className="about-box">  
        <h1 className="about-title">اطلاعات برنامه</h1>  
        <p className="about-text">در ورژن 1.0.4 هستید</p>  
      </div>  
      
      <div className="absolut">  
        <footer className="footer">  
          <div className="footer-container"> 
             
            <div className="div-cursor">  
              <Link to="/">  
                <img className="icon-profile" src="/icons8-home.svg" alt="خانه" />  
              </Link>  
            </div>  
            <div className="div-cursor">  
              <Link to="/Setting">  
                <img className="icon-profile" src="/icons8-setting.svg" alt="تنظیمات" />  
              </Link>  
            </div>  
            <div className="div-cursor">  
              <Link to="/About">  
                <img className="icon-profile" src="/icons8-about.svg" alt="در باره" />  
              </Link>  
            </div>  
          </div>  
        </footer>  
      </div>  
    </div>  
  );  
}  