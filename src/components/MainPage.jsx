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
import FooterC from "./FooterC";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from "@mui/icons-material/Share";
import PersonIcon from '@mui/icons-material/Person';

import { Newspaper, Mic, Calendar, Cloud } from "lucide-react";

const descriptionSlides = [
  {
    Desh3: "اخبار هوش مصنوعی",
    Desp: "این ابزار به شما کمک می‌کند که با کمک هوش مصنوعی بتوانید به به‌روزترین و دقیق‌ترین اخبار دسترسی داشته باشید.",
  },
  {
    Desh3: "تبدیل صوت به متن",
    Desp: "کافی است فایل صوتی یا صدای زنده را بدهید؛ سرویس در چند ثانیه آن را به متن دقیق فارسی یا هر زبان دلخواه تبدیل می‌کند.",
  },
  {
    Desh3: "پیش‌بینی وضعیت هوا",
    Desp: "با استفاده از مدل‌های یادگیری ماشین و داده‌های به‌روز، این ابزار پیش‌بینی دقیق دما، بارش و کیفیت هوا را برای شهرهای مختلف ارائه می‌دهد.",
  },
];

export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [descIndex, setDescIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setDescIndex((prev) => (prev + 1) % descriptionSlides.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function ClickShare() {
    if (navigator.share) {
      navigator
        .share({
          title: "FizentYar",
          text: "اشتراک گذاری برنامه",
          url: "https://myket.ir/app/app.vercel.test_app_fizent_yar.twa",
        })
        .then(() => {
          setSnackbarOpen(true);
        })
        .catch(() => {
          console.error("خطا در اشتراک گذاری");
        });
    } else {
      alert("مرورگر شما پشتیبانی نمی کند");
    }
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  return (
    <Box>
      {/* Top AppBar */}
      <AppBar className="container_app">
        <Toolbar className="header_toolbar">
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <div className="Fiz_cont">
            <Typography variant="h5">FizentYar</Typography>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#1e1e1e", color: "#ffffff" } }}
        anchor="right"
        open={isMenuOpen}
        onClose={toggleMenu}
      >
        <List>
          <ListItem
            className="drawer"
            button
            component={RouterLink}
            to="/"
            onClick={()=> {window.location.reload()}}
          >
            <RefreshIcon sx={{ mr: 1 }} />
            <ListItemText sx={{ mr: 2 }} primary="تازه سازی" />
          </ListItem>

          <ListItem className="drawer" button onClick={() => { toggleMenu(); ClickShare(); }}>
            <ShareIcon sx={{ mr: 1 }} />
            <ListItemText primary="اشتراک" />
          </ListItem>


          <ListItem
            className="drawer"
            button
            component="a"
            href="https://fazelzare.liara.run/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <PersonIcon sx={{ mr: 1 }} />
            <ListItemText primary="سازنده" />
          </ListItem>

          <div className="div_myket_mg">
            <a href="https://myket.ir/app/app.vercel.test_app_fizent_yar.twa">
              <img src="/myket.png" alt="مایکت" id="myket" />
            </a>
          </div>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box className="container_card" sx={{ mt: 12, mb: 10 }}>
        {/* اسلایدر توضیحاتی بالای کارت‌ها */}
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

        {/* کارت‌ها */}
        <div style={{ marginTop: 32, marginBottom: 80 }}>
          <div className="container-center">
            {/* کارت اخبار */}
            <Card className="Card margR margL" component={RouterLink} to="/NewsToday">
              <CardContent className="card-content">
                <Newspaper size={48} color="#1976d2" />
                <Typography variant="h6" className="card-text" sx={{ mt: 1 }}>
                  اخبار
                </Typography>
              </CardContent>
            </Card>

            {/* کارت تبدیل متن */}
            <Card className="Card margR margL" component={RouterLink} to="/TextToAudio">
              <CardContent className="card-content">
                <Mic size={48} color="#9c27b0" />
                <Typography variant="h6" className="card-text" sx={{ mt: 1 }}>
                  تبدیل متن
                </Typography>
              </CardContent>
            </Card>
          </div>

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

      {/* Snackbar برای پیام اشتراک گذاری موفق */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "50%" }}>
          اشتراک‌گذاری موفق بود!
        </Alert>
      </Snackbar>
    </Box>
  );
}
