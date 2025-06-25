import TimeHi from "./TimeHi";
import DescriptionService from "./DescriptionService";

import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";


import { Card, CardContent } from '@mui/material';


export default function MainPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <Box>
      <AppBar className="container_app">
        <Toolbar className="header_toolbar">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <img className="logo_size" src="/FizentYar192.png" alt="Logo" />
        </Toolbar>
      </AppBar>
      <Drawer sx={{ '& .MuiDrawer-paper': { backgroundColor: '1e1e1e ', color: '#ffffff' } }} anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Box
          role="presentation"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
        </Box>
        <List>
          <ListItem className="drawer" button component={RouterLink} to="/">
            <HomeIcon sx={{ mr: 1 }} />
            <ListItemText sx={{ mr: 2 }} primary="بازگشت" />
          </ListItem>
          <ListItem className="drawer" button component={RouterLink} to="/Setting">
            <SettingsIcon sx={{ mr: 1 }} />
            <ListItemText primary="تنظیمات" />
          </ListItem>

          <ListItem className="drawer" button component={RouterLink} to="/About">
            <InfoIcon sx={{ mr: 1 }} />
            <ListItemText  primary="درباره" />
          </ListItem>
          {/* سایر لینک‌ها */}
          <div className="div_myket_mg">
            <a href="https://myket.ir/app/app.vercel.test_app_fizent_yar.twa">  
              <img src="/myket.png" alt="مایکت" id="myket" />  
            </a>  
          </div>
      </List>
      </Drawer>
      <Box className="container_card">
      <div className="mg-bt-welcome">
        <TimeHi />
        <Typography variant="h3">سلام به <span style={{color:"blueviolet"}}>FizentYar</span> خوش امدید</Typography>
      </div>
      <Card className="Card Card_for"  component={RouterLink} to="/WeatherForecast">
        <CardContent>
          <div>
            <img className="wid_ic_fo" alt="weather forecasting" src="/rainy-2.svg"></img>
          </div>
          <Typography variant="h6">پیش بینی اب و هوا</Typography>
        </CardContent>
      </Card>
      <div className="container-center">
        <Card className="Card margR margL" component={RouterLink} to="/NewsToday">
          <CardContent>
            <div>
              <img className="width_icon" alt="weather forecasting" src="/icons8-news.svg"></img>
            </div>
            <Typography variant="h6">اخبار هوش مصنوعی</Typography>
          </CardContent>
        </Card>
        
        <Card className="Card margR margL" component={RouterLink} to="/TextToAudio">
          <CardContent>
            <div>
              <img className="width_icon" alt="weather forecasting" src="/microphone-svgrepo-com.svg"></img>
            </div>
            <Typography variant="h6">صوت به متن</Typography>
          </CardContent>
        </Card>
      </div>
      <div className="container_discription">
        <Typography variant="h4" className="titleDes">توضیحات</Typography>

        <DescriptionService
          Desh3="اخبار هوش مصنوعی"
          Desp="این ابزار به شما کمک می‌کند که با کمک هوش مصنوعی بتوانید به به‌روزترین و دقیق‌ترین اخبار دسترسی داشته باشید."
        />

        <DescriptionService
          Desh3="تبدیل صوت به متن"
          Desp="کافی است فایل صوتی یا صدای زنده را بدهید؛ سرویس در چند ثانیه آن را به متن دقیق فارسی یا هر زبان دلخواه تبدیل می‌کند."
        />

        <DescriptionService
          Desh3="پیش‌بینی وضعیت هوا"
          Desp="با استفاده از مدل‌های یادگیری ماشین و داده‌های به‌روز، این ابزار پیش‌بینی دقیق دما، بارش و کیفیت هوا را برای شهرهای مختلف ارائه می‌دهد."
        />

      </div>

      </Box>
      <Typography></Typography>
    </Box>
  );
}
