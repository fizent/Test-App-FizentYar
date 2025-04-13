
import { useState } from "react"
import BackButton from "./BackButton";



export default function  ChangeTextToAudio() {
  const [text, setText] = useState('Noting Text Here Please Click Start And Say Something')
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
  recognition.onresult = (event)=> {
    const speechText = event.results[0][0].transcript
    setText(speechText)
    setIsListening(false)
  }


  const OpenListen = ()=> {
    setIsListening(true)
    recognition.start()
  }

  const CloseListen = ()=> {
    setIsListening(false)
    recognition.stop()
  }


  return(
    <div className="BodyChat form">
      <BackButton />
      <h1>Audio To Text</h1>
      <div className="Container_btnAudio">
        <button className="BtnSend btn_Audio" onClick={OpenListen} disabled={isListening}>start</button>
        <button className="BtnSend btn_Audio" onClick={CloseListen} disabled={!isListening}>stop</button>
      </div>
      <div className="chatItem">
        <h2 id="padding_Item"  className="Text_welcome">Your Text</h2>
        <p className="p_copy" onClick={HandleCopy}>
          {text}
          <span id="copy">{copy ? "Copied!" : "Click to copy!"}</span>
        </p>
      </div>
    </div>
  )
}