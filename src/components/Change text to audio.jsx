import { useState } from "react"
import BackButton from "./BackButton";

export default function ChangeTextToAudio() {
  const [text, setText] = useState('هیچ متنی وجود ندارد. لطفاً روی شروع کلیک کنید و چیزی بگویید')
  const [isListening, setIsListening] = useState(false)
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  const [copy, setCopy] = useState(false)

  function HandleCopy() {
    navigator.clipboard.writeText(text);
    setCopy(true);
    setTimeout(() => setCopy(false), 1500); // بعد از 1.5 ثانیه برمی‌گرده به حالت قبلی
  }

  recognition.lang = 'fa-IR'; // زبان فارسی
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onresult = (event) => {
    const speechText = event.results[0][0].transcript
    setText(speechText)
    setIsListening(false)
  }

  const OpenListen = () => {
    setIsListening(true)
    recognition.start()
  }

  const CloseListen = () => {
    setIsListening(false)
    recognition.stop()
  }

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
    </div>
  )
}
