import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // اگر می‌خوای از آیکون آماده استفاده کنی

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="BtnSend btn_Audio"
      id="btn_back"
      onClick={() => navigate(-1)}>
      <ArrowLeft size={18} />
    </button>
  );
}

export default BackButton;
