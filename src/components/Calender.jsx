import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Box, Typography, Paper } from "@mui/material";
import "./calendar-custom.css";
import Back_Btn from "./Back";
import FooterC from "./FooterC";
import TimeHi from "./TimeHi";
export default function CalendarWidget() {
  const [value, setValue] = useState(new Date());

  return (
    <Box sx={{ px: 2, py: 4, maxWidth: 500, mx: "auto", marginTop: "80px" }}>
      <Back_Btn />
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={3} color="#fff">
         تقویم هوشمند
      </Typography>

      <Paper elevation={6} sx={{
        p: 2,
        borderRadius: 4,
        backgroundColor: "#1a1a1a",
        boxShadow: "0 0 15px rgba(0,0,0,0.4)",
        overflow: "hidden"
      }}>
        <Calendar
          onChange={setValue}
          value={value}
          locale="fa-IR"
          calendarType="gregory"
          className="dark-calendar"
        />

        <Typography mt={3} color="#ccc" textAlign="center" fontSize={18}>
           تاریخ انتخاب‌شده:{" "}
          <strong style={{ color: "#fff" }}>
            {value.toLocaleDateString("fa-IR")}
          </strong>
        </Typography>

        <TimeHi></TimeHi>
      </Paper>
      <FooterC />
    </Box>
  );
}
