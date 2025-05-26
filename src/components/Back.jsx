import { useNavigate } from "react-router-dom";
import backArrow from "../assets/icons8-back-arrow-64.png"; // مسیر مناسب با توجه به ساختار پوشه‌ها

export default function Back_Btn() {
  const navigate = useNavigate();

  return (
    <div className="back_btn" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
        <img className="back_image" src={backArrow} alt="Back" />
    </div>
  );
}
