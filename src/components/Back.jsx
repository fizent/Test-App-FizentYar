import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BackImage from "../assets/icons8-back-arrow-64.png";

export default function Header({ toggleMenu }) {
  const navigate = useNavigate();

  return (
    <AppBar className="container_app">
      <Toolbar className="header_toolbar">
        {/* لوگو وسط */}

        {/* دکمه بازگشت سمت چپ */}
        <Box
          onClick={() => navigate(-1)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(-1); }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'inherit',
            userSelect: 'none',
            gap: 1,
            // اگر میخوای سایز و پدینگ داشته باشه میتونی اینجا اضافه کنی
            // padding: '6px 12px',
          }}
        >
          <Box
            component="img"
            className='icon_back'
            src={BackImage}
            alt="بازگشت"
            
          />
          <Typography variant="button">
            بازگشت
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
