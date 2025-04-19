import { useState } from "react";
import { Link } from "react-router-dom";
export default function Setting() {
  const [privacy, setPrivacy] = useState(false);  // وضعیت حریم خصوصی
  const [notifications, setNotifications] = useState(false);  // وضعیت اعلان‌ها

  const handlePrivacyChange = () => {
    setPrivacy(!privacy);  // تغییر وضعیت حریم خصوصی
  };

  const handleNotificationsChange = () => {
    setNotifications(!notifications);  // تغییر وضعیت اعلان‌ها
  };

  return (
    <div className="about-container">
      <div className="about-box">
        <h1 className="about-title">تنظیمات</h1>
        <p className="about-text">
          این برنامه وب به گونه‌ای طراحی شده است که کاملاً از طریق آنلاین مدیریت و به‌روزرسانی می‌شود تا کاربران همیشه به جدیدترین ویژگی‌ها و بهبودها دسترسی داشته باشند. هدف ما این است که تجربه شما را با هر به‌روزرسانی روان‌تر و هوشمندتر کنیم.
          <br /><br />
          در آینده، تنظیمات قدرتمند و هوشمندتری اضافه خواهد شد — از جمله تم‌های شخصی‌سازی‌شده، ابزارهای خودکارسازی و کنترل بیشتر روی داده‌ها و ترجیحات شما. منتظر تغییرات هیجان‌انگیزی باشید که تجربه شما را ارتقا خواهد داد!
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
    </div>
  );
}
