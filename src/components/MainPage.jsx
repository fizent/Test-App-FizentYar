import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Fade,
  Snackbar,
  Alert,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from "@mui/icons-material/Share";
import PersonIcon from "@mui/icons-material/Person";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import LockIcon from "@mui/icons-material/Lock";

import { Calendar, Cloud } from "lucide-react";
import FooterC from "./FooterC";

/* --- توضیحات اسلایدر بالای کارت‌ها --- */
const descriptionSlides = [
  {
    Desh3: "تولید رمز عبور",
    Desp: "رمزهای امن و تصادفی با طول و ترکیب دلخواه بسازید و تنها با یک کلیک در کلیپ‌بورد کپی کنید.",
  },
  {
    Desh3: "مبدل واحدها",
    Desp: "طول، وزن، دما و ارزهای رایج را تنها با چند کلیک به واحد دلخواه تبدیل کنید؛ سریع، دقیق و بدون نیاز به اینترنت.",
  },
  {
    Desh3: "پیش‌بینی وضعیت هوا",
    Desp: "با استفاده از مدل‌های یادگیری ماشین و داده‌های به‌روز، پیش‌بینی دقیق دما، بارش و کیفیت هوا برای شهرهای مختلف ارائه می‌شود.",
  },
  {
    Desh3: "تقویم",
    Desp: "رویدادها، قرار ملاقات‌ها و برنامه‌های مهم خود را مدیریت کنید و همیشه منظم باشید.",
  },
];

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [descIndex, setDescIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");

  const toggleMenu = () => setIsMenuOpen((p) => !p);

  /* --- چرخش خودکار اسلایدر --- */
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setDescIndex((p) => (p + 1) % descriptionSlides.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* --- اشتراک‌گذاری --- */
  const handleShare = () => {
    const url = "https://myket.ir/app/app.vercel.test_app_fizent_yar.twa";
    const text = "اپ FizentYar را امتحان کن!";

    // اگر اپ داخل Median اجرا میشه
    if (window.median && median.share && typeof median.share.sharePage === "function") {
      median.share.sharePage({ url, text });
      setSnackbarMsg("اشتراک‌گذاری موفق بود!");
      setSnackbarOpen(true);
      return;
    }

    // اگر مرورگر از Web Share API پشتیبانی کنه
    if (navigator.share) {
      navigator
        .share({ title: "FizentYar", text, url })
        .then(() => {
          setSnackbarMsg("اشتراک‌گذاری موفق بود!");
          setSnackbarOpen(true);
        })
        .catch(() => console.error("خطا در اشتراک گذاری"));
      return;
    }

    // fallback: کپی لینک در کلیپ‌بورد و نمایش پیام
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setSnackbarMsg("لینک در کلیپ‌بورد کپی شد!");
        setSnackbarOpen(true);
      });
    } else {
      alert("مرورگر شما پشتیبانی نمی‌کند");
    }
  };

  return (
    <Box>
      {/* ---------- AppBar ---------- */}
      <AppBar className="container_app">
        <Toolbar className="header_toolbar">
          <IconButton edge="end" color="inherit" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <div className="Fiz_cont">
            <Typography variant="h5">FizentYar</Typography>
          </div>
        </Toolbar>
      </AppBar>

      {/* ---------- Drawer ---------- */}
      <Drawer
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#1e1e1e", color: "#ffffff", width: "60%" } }}
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
      >
        <List>
          <ListItem button onClick={() => window.location.reload()} className="drawer">
            <RefreshIcon sx={{ mr: 1 }} />
            <ListItemText sx={{ mr: 2, textAlign: "start" }} primary="تازه‌سازی" />
          </ListItem>

          <ListItem button onClick={() => { toggleMenu(); handleShare(); }} className="drawer">
            <ShareIcon sx={{ mr: 1 }} />
            <ListItemText sx={{ mr: 2, textAlign: "start" }} primary="اشتراک" />
          </ListItem>

          <ListItem
            button
            component="a"
            href="https://fazelzare.liara.run/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="drawer"
          >
            <PersonIcon sx={{ mr: 1 }} />
            <ListItemText sx={{ mr: 2, textAlign: "start" }} primary="سازنده" />
          </ListItem>
          
        </List>
      </Drawer>

      {/* ---------- محتوای اصلی ---------- */}
      <Box className="container_card" sx={{ mt: 12, mb: 10 }}>
        {/* اسلایدر توضیحی بالای کارت‌ها */}
        <Box
          sx={{
            px: 3,
            py: 4,
            textAlign: "center",
            borderRadius: 4,
            background: "linear-gradient(135deg, #1e1e40, #3d1c58, #091833)",
            color: "#fff",
            maxWidth: 600,
            mx: "auto",
            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
            transition: "all 0.4s ease",
          }}
        >
          <Fade in={fade} timeout={500}>
            <Box>
              <Typography variant="h5" fontWeight={700} mb={2}>
                {descriptionSlides[descIndex].Desh3}
              </Typography>
              <Typography variant="body1" fontSize={18}>
                {descriptionSlides[descIndex].Desp}
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* ---------- کارت‌ها ---------- */}
        <div style={{ marginTop: 32, marginBottom: 80 }}>
          {/* ردیف اول */}
          <div className="container-center">
            {/* کارت تولید رمز عبور */}
            <Card className="Card margR margL" component={RouterLink} to="/PasswordGenerator">
              <CardContent className="card-content">
                <LockIcon sx={{ fontSize: 48, color: "#1976d2" }} />
                <Typography variant="h6" className="card-text" sx={{ mt: 1 }}>
                  رمز عبور
                </Typography>
              </CardContent>
            </Card>

            {/* کارت مبدل واحدها */}
            <Card className="Card margR margL" component={RouterLink} to="/UnitConvert">
              <CardContent className="card-content">
                <CompareArrowsIcon sx={{ fontSize: 48, color: "#9c27b0" }} />
                <Typography variant="h6" className="card-text" sx={{ mt: 1 }}>
                   تبدیل ها
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* ردیف دوم */}
          <div className="container-center" style={{ marginTop: 24 }}>
            {/* کارت تقویم */}
            <Card className="Card margR margL" component={RouterLink} to="/CalendarWidget">
              <CardContent className="card-content">
                <Calendar size={48} color="#388e3c" />
                <Typography variant="h6" className="card-text" sx={{ mt: 1 }}>
                  تقویم
                </Typography>
              </CardContent>
            </Card>

            {/* کارت آب و هوا */}
            <Card className="Card margR margL" component={RouterLink} to="/WeatherForecast">
              <CardContent className="card-content">
                <Cloud size={48} color="#f57c00" />
                <Typography variant="h6" className="card-text" sx={{ mt: 1 }}>
                  آب و هوا
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Box>

      <FooterC />

      {/* Snackbar اشتراک‌گذاری */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "50%" }}>
          {snackbarMsg || "اشتراک‌گذاری موفق بود!"}
        </Alert>
      </Snackbar>
    </Box>
  );
}
