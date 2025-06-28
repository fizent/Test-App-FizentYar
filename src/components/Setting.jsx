import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Back_Btn from "./Back";
import { Typography, FormControlLabel, Switch } from "@mui/material";

export default function Setting() {
  const [privacy, setPrivacy] = useState(false);
  const [notifications, setNotifications] = useState(false);

  useEffect(() => {
    const savePrivacy = localStorage.getItem("privacy");
    const saveNotification = localStorage.getItem("notifications");
    if (savePrivacy !== null) setPrivacy(JSON.parse(savePrivacy));
    if (saveNotification !== null) setNotifications(JSON.parse(saveNotification));
  }, []);

  const handlePrivacyChange = (e) => {
    const check = e.target.checked;
    setPrivacy(check);
    localStorage.setItem("privacy", JSON.stringify(check));
  };

  const handleNotificationsChange = (e) => {
    const check = e.target.checked;
    setNotifications(check);
    localStorage.setItem("notifications", JSON.stringify(check));
  };

  return (
    <div className="container_card_box">
      <Back_Btn />
      <Typography className="Fiz title_page" variant="h3">FizentYar</Typography>

      <Typography className="sub_page_title" variant="subtitle1">
        این برنامه وب به گونه‌ای طراحی شده است که کاملاً از طریق آنلاین مدیریت و
        به‌روزرسانی می‌شود تا کاربران همیشه به جدیدترین ویژگی‌ها و بهبودها دسترسی
        داشته باشند. هدف ما این است که تجربه شما را با هر به‌روزرسانی روان‌تر و
        هوشمندتر کنیم.
      </Typography>

      <Typography variant="h5" className="type_mg sub_page_title">
        تنظیمات موجود
      </Typography>

      <div className="sub_page_title" style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
        <FormControlLabel
          control={
            <Switch color="primary" checked={privacy} onChange={handlePrivacyChange} />
          }
          label="حریم خصوصی"
        />
        <FormControlLabel
          control={
            <Switch color="primary" checked={notifications} onChange={handleNotificationsChange} />
          }
          label="مدیریت اعلان‌ها"
        />
        <Typography variant="body1">
          <Link to="/InformationApp" style={{ color: "#3f51b5", textDecoration: "none", fontWeight: "bold" }}>
            اطلاعات برنامه
          </Link>
        </Typography>
      </div>
    </div>
  );
}
