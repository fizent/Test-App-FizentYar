import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";


export default function FooterC() {
  const [value, setValue] = useState(0)
  const navigate = useNavigate()

  function Gowhere(event,value) {
    setValue(value)
    if(value===0)navigate("/")
    else if(value===1)navigate("/Setting")
    else if(value===2)navigate("/About")
  }
  return(
    <Paper className="footer-paper">
      <BottomNavigation
        value={value}
        onChange={Gowhere}
        className="footer-nav"
        showLabels
      >
      <BottomNavigationAction label="خانه" icon={<HomeIcon />} />
      <BottomNavigationAction label="تنظیمات" icon={<SettingsIcon />} />
      <BottomNavigationAction label="درباره" icon={<InfoIcon />} />
      </BottomNavigation>
    </Paper>
  )
}
