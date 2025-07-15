import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  MenuItem,
  Button,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import Back_Btn from "./Back";
import FooterC from "./FooterC";
export default function UnitConverter() {
  /* ---------- داده‌های ثابت ---------- */
  const categories = {
    length: {
      label: "طول",
      units: {
        m: { label: "متر", toBase: (v) => v, fromBase: (v) => v },
        km: { label: "کیلومتر", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
        cm: { label: "سانتی‌متر", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
        mm: { label: "میلی‌متر", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      },
    },
    weight: {
      label: "وزن",
      units: {
        kg: { label: "کیلوگرم", toBase: (v) => v, fromBase: (v) => v },
        g: { label: "گرم", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
        lb: { label: "پوند", toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
        oz: { label: "اونس", toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
      },
    },
    temperature: {
      label: "دما",
      units: {
        C: {
          label: "سلسیوس",
          toBase: (v) => v,
          fromBase: (v) => v,
        },
        F: {
          label: "فارنهایت",
          toBase: (v) => (v - 32) * (5 / 9),
          fromBase: (v) => v * (9 / 5) + 32,
        },
        K: {
          label: "کلوین",
          toBase: (v) => v - 273.15,
          fromBase: (v) => v + 273.15,
        },
      },
    },
  };

  /* ---------- حالت‌ها ---------- */
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("km");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  /* ---------- واحدهای مربوط به دستهٔ فعلی ---------- */
  const unitOptions = useMemo(() => Object.keys(categories[category].units), [category]);

  /* ---------- محاسبه ---------- */
  const handleConvert = () => {
    if (value === "" || isNaN(Number(value))) return;
    const val = parseFloat(value);
    const base = categories[category].units[fromUnit].toBase(val);
    const converted = categories[category].units[toUnit].fromBase(base);
    setResult(converted.toLocaleString("fa-IR", { maximumFractionDigits: 6 }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
  };

  /* ---------- رندر ---------- */
  return (
    <Box sx={{ px: 2, py: 3, maxWidth: 600, mx: "auto", mt: "80px" }}>
      <Back_Btn></Back_Btn>
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={2}>
        مبدّل واحدها
      </Typography>

      <Card sx={{ p: 2, borderRadius: 3, backgroundColor: "#1e1e1e", color: "#fff" }}>
        <CardContent>
          {/* انتخاب دسته */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="category-label" sx={{ color: "#ccc" }}>
              دسته
            </InputLabel>
            <Select
              labelId="category-label"
              value={category}
              label="دسته"
              onChange={(e) => {
                const newCat = e.target.value;
                setCategory(newCat);
                const units = Object.keys(categories[newCat].units);
                setFromUnit(units[0]);
                setToUnit(units[1] || units[0]);
                setResult("");
              }}
              sx={{ color: "#fff" }}
            >
              {Object.entries(categories).map(([key, { label }]) => (
                <MenuItem key={key} value={key}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* مقدار و واحد مبدأ */}
          <Box display="flex" gap={2} mb={3}>
            <TextField
              fullWidth
              label="مقدار"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              variant="outlined"
              inputProps={{ inputMode: "decimal" }}
              sx={{ input: { color: "#fff" } }}
            />
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="from-label" sx={{ color: "#ccc" }}>
                از
              </InputLabel>
              <Select
                labelId="from-label"
                value={fromUnit}
                label="از"
                onChange={(e) => setFromUnit(e.target.value)}
                sx={{ color: "#fff" }}
              >
                {unitOptions.map((u) => (
                  <MenuItem key={u} value={u}>
                    {categories[category].units[u].label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* واحد مقصد */}
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="to-label" sx={{ color: "#ccc" }}>
              به
            </InputLabel>
            <Select
              labelId="to-label"
              value={toUnit}
              label="به"
              onChange={(e) => setToUnit(e.target.value)}
              sx={{ color: "#fff" }}
            >
              {unitOptions.map((u) => (
                <MenuItem key={u} value={u}>
                  {categories[category].units[u].label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* دکمه تبدیل */}
          <Button
            variant="contained"
            fullWidth
            sx={{ py: 1.5, borderRadius: 3, mb: 2 }}
            onClick={handleConvert}
          >
            تبدیل
          </Button>

          {/* نمایش نتیجه */}
          {result !== "" && (
            <>
              <Typography variant="h6" mb={1}>
                نتیجه:
              </Typography>
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
                onClick={handleCopy}
              >
                {result} {categories[category].units[toUnit].label}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>

      {/* نوتیفیکیشن کپی */}
      <Snackbar
        open={copied}
        autoHideDuration={1500}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          کپی شد!
        </Alert>
      </Snackbar>
      <FooterC />
    </Box>
  );
}
