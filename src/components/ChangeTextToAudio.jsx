import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import Back_Btn from "./Back";
import FooterC from "./FooterC";
export default function ChangeTextToAudio() {
  const [text, setText] = useState("هیچ متنی وجود ندارد. لطفاً روی شروع کلیک کنید و چیزی بگویید");
  const [isListening, setIsListening] = useState(false);
  const [copy, setCopy] = useState(false);

  const recognitionRef = useRef(null);

  if (!recognitionRef.current && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.lang = "fa-IR";
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
  }

  useEffect(() => {
    const recognition = recognitionRef.current;
    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      setText(speechText);
      setIsListening(false);
    };
    return () => {
      recognition.onresult = null;
    };
  }, []);

  const HandleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopy(true);
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
    <Box sx={{ px: 2, py: 3, maxWidth: 600, mx: "auto", marginTop: "80px" }}>
      <Back_Btn />
      <Typography variant="h4" fontWeight={700} textAlign="center" mt={2}>
        تبدیل صدا به متن
      </Typography>

      <Card sx={{ mt: 3, p: 2, borderRadius: 3, backgroundColor: "#1e1e1e", color: "#fff" }}>
        <CardContent>
          <Box display="flex" justifyContent="center" gap={2} mb={3}>
            <Button
              variant="contained"
              onClick={OpenListen}
              disabled={isListening}
              sx={{ borderRadius: 3, px: 4, py: 1.5 }}
            >
              شروع
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={CloseListen}
              disabled={!isListening}
              sx={{ borderRadius: 3, px: 4, py: 1.5 }}
            >
              توقف
            </Button>
          </Box>

          <Typography variant="h6" mb={1}>📝 متن شما:</Typography>
          <Typography
            variant="body1"
            sx={{
              backgroundColor: "#2c2c2c",
              p: 2,
              borderRadius: 2,
              cursor: "pointer",
              userSelect: "text",
              "&:hover": { backgroundColor: "#333" },
            }}
            onClick={HandleCopy}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>

      <Snackbar
        open={copy}
        autoHideDuration={1500}
        onClose={() => setCopy(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">کپی شد!</Alert>
      </Snackbar>

      {/* <FooterCom /> */}
      <FooterC />
    </Box>
  );
}
