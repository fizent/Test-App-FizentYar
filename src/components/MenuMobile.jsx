import { Link } from "react-router-dom";  

export default function MenuMobile({ isVisible, closeMenu }) {  
  return (  
    <div className={`sider ${isVisible ? "active" : "hidden"}`}>  
      <div className="menu-toggle-btn">  
        <button className="btn_menu back_size" onClick={closeMenu}>  
          <img className="wid-btn" src="/icons8-close.svg" alt="بستن منو" />  
        </button>  
      </div>  
      <div className="top_div_sider">
        <div className="image_profile_app">
          <img src="/FizentYar192.png" alt="" className="image_profile"/>
        </div>
        <div className="profile_text">
          <h1 className="profile_name">FizentYar</h1>
          <p className="">دوست هوشمند شما</p>
        </div>
      </div>
      <div className="text-dashbord"> 
        <ul>  
          <li className="color-text-dashbord Link">  
            <Link to="/About">درباره ما</Link>  
          </li>  
          <li className="color-text-dashbord Link">  
            <Link to="/Setting">تنظیمات</Link>  
          </li> 
          <li className="color-text-dashbord Link">  
            <Link to="/Notification">نوتیفیکیشن</Link>  
          </li> 
          <li className="color-text-dashbord Link">  
            <a href="https://fazelzare.liara.run/">اپلیکشن های سازنده</a>  
          </li> 

          <li className="color-text-dashbord Link">  
            <a href="https://fazelzare.liara.run/">سایت سازنده</a>
          </li>
          
 
          <li className="color-text-dashbord">  
            <a href="https://myket.ir/app/app.vercel.test_app_fizent_yar.twa">  
              <img src="/myket.png" alt="مایکت" id="myket" />  
            </a>  
          </li>  
        </ul>  
      </div> 
       
    </div>  
  );  
}  