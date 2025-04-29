import { Link } from 'react-router-dom'; // فرض بر این است که نیاز دارید  
import BackButton from "./BackButton";  

export default function Notification() {  
  return (  
    <div className="about-container">  
      <div className="about-box">  
        <BackButton />  
        <h1 className="about-title">نوتیف های شما</h1>  
        <p className="about-text">هنوز نوتیفی نداری!</p>  
      </div>  
      
      <div className="absolut">  
        <footer className="footer">  
          <div className="footer-container">  
            <div className="div-cursor">  
              <Link to="/">  
                <img className="icon-profile" src="/icons8-home.svg" alt="Home" />  
              </Link>  
            </div>  
            <div className="div-cursor">  
              <Link to="/Setting">  
                <img className="icon-profile" src="/icons8-setting.svg" alt="Settings" />  
              </Link>  
            </div>  
            <div className="div-cursor">  
              <Link to="/About">  
                <img className="icon-profile" src="/icons8-about.svg" alt="About" />  
              </Link>  
            </div>  
          </div>  
        </footer>  
      </div>  
    </div>  
  );  
}  