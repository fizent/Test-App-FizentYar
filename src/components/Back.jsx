import { useNavigate } from "react-router-dom";

export default function Back_Btn() {
  const navigate = useNavigate();

  return (
    <div className="back_btn" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
      <img className="back_image" src="../assets/icons8-back-arrow-64.png" alt="Back" />
    </div>
  );
}
