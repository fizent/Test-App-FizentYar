import { Link } from "react-router-dom";  
import Back_Btn from "./Back";
import FooterCom from "./FooterC";
import { Card, CardContent, Typography } from "@mui/material";

export default function About() {  
  return (  
    <div className="container_card_box">  
      <Back_Btn />
      {/* بخش محتوای اصلی */}  
      <Card className="margR margL"> 
        <CardContent>
        <Typography className="type_mg" variant="h3">درباره من</Typography>  
        <Typography variant="subtitle1">  
          من فاضل زارع، یک توسعه‌دهنده وب و اپلیکیشن با اشتیاق و محصل در رشته برق و اتوماسیون صنعتی هستم.  
          هدف من ایجاد راه‌حل‌های دیجیتال مدرن، هوشمند و ساده است که زندگی را برای همه آسان‌تر کند.  
          <br />  
          با ترکیب دانش خود در فن‌آوری و سیستم‌های الکتریکی، سعی می‌کنم اپلیکیشن‌ها و وب‌سایت‌های قدرتمندی با طراحی زیبا و کارکرد هوشمند بسازم.  
        </Typography>  
        <Typography>  
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
        </Typography>  
        </CardContent> 
      </Card>  

      {/* فوتر با آیکون‌ها */}  
      {/* <FooterCom /> */}
    </div>  
  );  
}  