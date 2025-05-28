import { Link } from "react-router-dom";  
import Back_Btn from "./Back";
import FooterCom from "./FooterC";

export default function About() {  
  return (  
    <div className="about-container">  
      <Back_Btn />
      {/* بخش محتوای اصلی */}  
      <div className="about-box">  
        <h1 className="about-title">درباره من</h1>  
        <p className="about-text">  
          من فاضل زارع، یک توسعه‌دهنده وب و اپلیکیشن با اشتیاق و محصل در رشته برق و اتوماسیون صنعتی هستم.  
          هدف من ایجاد راه‌حل‌های دیجیتال مدرن، هوشمند و ساده است که زندگی را برای همه آسان‌تر کند.  
          <br />  
          با ترکیب دانش خود در فن‌آوری و سیستم‌های الکتریکی، سعی می‌کنم اپلیکیشن‌ها و وب‌سایت‌های قدرتمندی با طراحی زیبا و کارکرد هوشمند بسازم.  
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
      <FooterCom />
    </div>  
  );  
}  