import { Link } from 'react-router-dom';  
import Back_Btn from './Back';
import FooterCom from './FooterC';
export default function InfoApp() {  
  return (  
    <div className="about-container">  
      <Back_Btn />

      <div className="about-box">  
        <h1 className="about-title">اطلاعات برنامه</h1>  
        <p className="about-text">در ورژن 3.0.0 هستید</p>  
      </div>  
      <FooterCom />
    </div>  
  );  
}  