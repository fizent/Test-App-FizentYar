import { useState, useRef, useEffect } from "react";  
import { Link } from "react-router-dom";  
import BackButton from "./BackButton";  

export default function ChangeTextToAudio() {  
  const [text, setText] = useState('هیچ متنی وجود ندارد. لطفاً روی شروع کلیک کنید و چیزی بگویید');  
  const [isListening, setIsListening] = useState(false);  
  const [copy, setCopy] = useState(false);  

  const recognitionRef = useRef(null);  

  // مقدار Recognition را در یک useRef نگه می‌داریم  
  if (!recognitionRef.current && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {  
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;  
    recognitionRef.current = new SpeechRecognition();  
    recognitionRef.current.lang = 'fa-IR'; // زبان فارسی  
    recognitionRef.current.continuous = false;  
    recognitionRef.current.interimResults = false;  
  }  

  // استفاده از useEffect برای افزودن event listener  
  useEffect(() => {  
    const recognition = recognitionRef.current;  
    recognition.onresult = (event) => {  
      const speechText = event.results[0][0].transcript;  
      setText(speechText);  
      setIsListening(false);  
    };  
    // در صورت نیاز، می‌توانید دیگر رویدادها را هم اضافه کنید  

    // پاکسازی اگر نیاز باشد  
    return () => {  
      recognition.onresult = null;  
    };  
  }, []);  

  const HandleCopy = () => {  
    navigator.clipboard.writeText(text);  
    setCopy(true);  
    setTimeout(() => setCopy(false), 1500);  
  };  

  const OpenListen = () => {  
    if (recognitionRef.current) {  
      setIsListening(true);  
      recognitionRef.current.start();  
    }  
  };  

  const CloseListen = () => {  
    if (recognitionRef.current) {  
      setIsListening(false);  
      recognitionRef.current.stop();  
    }  
  };  

  return (  
    <div className="BodyChat form">  
      <BackButton />  
      <h1>تبدیل صدا به متن</h1>  
      <div className="Container_btnAudio">  
        <button className="BtnSend btn_Audio" onClick={OpenListen} disabled={isListening}>شروع</button>  
        <button className="BtnSend btn_Audio" onClick={CloseListen} disabled={!isListening}>توقف</button>  
      </div>  
      <div className="chatItem">  
        <h2 id="padding_Item" className="Text_welcome">متن شما</h2>  
        <p className="p_copy" onClick={HandleCopy}>  
          {text}  
          <span id="copy">{copy ? "کپی شد!" : "برای کپی کلیک کنید!"}</span>  
        </p>  
      </div>  
      <div className="absolut">
        <footer className="footer">
          <div className="footer-container">
            <div className="div-cursor">
              <Link to="/"><img className="icon-profile" src="/icons8-home.svg" alt="" /></Link>
            </div>
            <div className="div-cursor">
              <Link to="/Setting"><img className="icon-profile" src="/icons8-setting.svg" alt="" /></Link>
            </div>
            <div className="div-cursor">
              <Link to="/About"><img className="icon-profile" src="/icons8-about.svg" alt="" /></Link>
            </div>
          </div>
        </footer>
      </div>
    </div>  
  );  
}  