import { Link } from 'react-router-dom'; // فرض بر این است که نیاز دارید  
import Back_Btn from './Back';
import FooterCom from './FooterC';
export default function Notification() {  
  return (  
    <div className="about-container">  
      <Back_Btn />
      <div className="about-box">  
        <h1 className="about-title">نوتیف های شما</h1>  
        <p className="about-text">هنوز نوتیفی نداری!</p>  
      </div>  
      <FooterCom />
    </div>  
  );  
}  