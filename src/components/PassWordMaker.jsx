// PasswordGenerator.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  Divider,
} from "@mui/material";
import Back_Btn from "./Back";
import FooterC from "./FooterC";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  /** تولید رمز بر اساس انتخاب‌ها */
  const generatePassword = () => {
    let charset = "";
    if (includeLower) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+{}[]<>?~";

    if (!charset) {
      setPassword("");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * charset.length);
      pass += charset[rand];
    }
    setPassword(pass);
  };

  /** کپی در کلیپ‌بورد */
  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{ px: 2, py: 2, maxWidth: 600, mx: "auto", mt: "80px" }}>
      <Back_Btn />

      <Typography variant="h4" fontWeight={700} textAlign="center" mt={2}>
        تولید رمز عبور
      </Typography>

      {/* تنظیمات تولید رمز */}
      <Card sx={{ my: 3, p: 2, borderRadius: 3, backgroundColor: "#1e1e1e", color: "#fff" }}>
        <CardContent>
          <TextField
            label="طول رمز"
            type="number"
            fullWidth
            value={length}
            onChange={(e) => setLength(Math.max(4, parseInt(e.target.value || 0)))}
            sx={{
              mb: 3,
              backgroundColor: "#2c2c2c",
              borderRadius: 2,
              "& label": { color: "#bbb" },
              "& input": { color: "#fff" },
            }}
          />

          <FormControlLabel
            control={<Checkbox checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} />}
            label="حروف بزرگ (A‑Z)"
          />
          <FormControlLabel
            control={<Checkbox checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} />}
            label="حروف کوچک (a‑z)"
          />
          <FormControlLabel
            control={<Checkbox checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />}
            label="اعداد (0‑9)"
          />
          <FormControlLabel
            control={<Checkbox checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />}
            label="نمادها (!@#$)"
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1.5, borderRadius: 2 }}
            onClick={generatePassword}
          >
            تولید رمز
          </Button>

          {password && (
            <>
              <Divider sx={{ my: 2, borderColor: "#444" }} />
              <Typography
                variant="body1"
                sx={{
                  backgroundColor: "#2c2c2c",
                  p: 2,
                  borderRadius: 2,
                  cursor: "pointer",
                  userSelect: "text",
                  wordBreak: "break-all",
                  "&:hover": { backgroundColor: "#333" },
                }}
                onClick={handleCopy}
              >
                {password}
              </Typography>
              <Typography variant="caption" color="#aaa">
                برای کپی روی رمز کلیک کنید
              </Typography>
            </>
          )}
        </CardContent>
      </Card>

      <FooterC />

      {/* اعلان کپی موفق */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          در کلیپ‌بورد کپی شد!
        </Alert>
      </Snackbar>
    </Box>
  );
}
