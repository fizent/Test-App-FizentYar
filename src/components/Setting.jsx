import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Back_Btn from "./Back";
export default function Setting() {
  const [privacy, setPrivacy] = useState(false);  // وضعیت حریم خصوصی
  const [notifications, setNotifications] = useState(false);  // وضعیت اعلان‌ها

  
  useEffect(()=>{
    const savePrivacy = localStorage.getItem("privacy")
    const saveNotification = localStorage.getItem("notifications")
    if (savePrivacy !== null) setPrivacy(JSON.parse(savePrivacy));
    if (saveNotification !== null) setNotifications(JSON.parse(saveNotification));

  })
  const handlePrivacyChange = (e) => {
    const check = e.target.checked
    setPrivacy(check);  // تغییر وضعیت حریم خصوصی
    localStorage.setItem("privacy", JSON.stringify(check))
  };

  const handleNotificationsChange = (e) => {
    const check = e.target.checked
    setNotifications(check);  // تغییر وضعیت حریم خصوصی
    localStorage.setItem("notifications", JSON.stringify(check))

  };

  return (
    <div className="about-container">
      <Back_Btn />
      <div className="about-box">
        <h1 className="about-title">تنظیمات</h1>
        <p className="about-text">
          این برنامه وب به گونه‌ای طراحی شده است که کاملاً از طریق آنلاین مدیریت و به‌روزرسانی می‌شود تا کاربران همیشه به جدیدترین ویژگی‌ها و بهبودها دسترسی داشته باشند. هدف ما این است که تجربه شما را با هر به‌روزرسانی روان‌تر و هوشمندتر کنیم.
        </p>
        <div className="settings-list">
          <h3>تنظیمات موجود:</h3>
          <ul>
            <li className="about-text">
              <label>
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={handlePrivacyChange}
                />
                حریم خصوصی
              </label>
            </li>
            <li className="about-text">
              <label>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={handleNotificationsChange}
                />
                مدیریت اعلان‌ها
              </label>
            </li>
            <li>
              <Link to="/InformationApp">اطلاعات برنامه</Link>
            </li>
          </ul>
        </div>
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
