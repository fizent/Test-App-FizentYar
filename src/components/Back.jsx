import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material'; // از Button استفاده میکنیم چون خواستید contained باشه
import BackImage from "../assets/icons8-back-arrow-64.png"; // تصویر فلش بازگشت شما

export default function Back_Btn() {
  const navigate = useNavigate();

  return (
    <Button
      className="back_btn"
      variant="contained" // به درخواست شما، contained استفاده شده
      onClick={() => navigate(-1)}
      sx={{
        // استایل‌های کلی برای شبیه سازی ظاهر دکمه‌های Native اندروید
        // رنگ پس‌زمینه رو می‌تونید از تم خودتون یا یک رنگ خاص انتخاب کنید
        position: "fixed",
        top: "10px",
        left: "10px",
        width: "50px",
        backgroundColor: 'primary.main', // مثال: رنگ اصلی تم MUI
        color: 'white', // رنگ آیکون و متن
        boxShadow: 'none', // معمولاً دکمه‌های Native سایه کمتری دارن یا بدون سایه هستن
        borderRadius: '8px', // گوشه‌های گردتر، شبیه به دکمه‌های متریال دیزاین
        minWidth: 'unset', // اجازه میده عرض دکمه کوچک‌تر باشه
        padding: '8px 16px', // پدینگ داخلی
        '&:hover': {
          backgroundColor: 'primary.dark', // رنگ تیره‌تر برای هاور
          boxShadow: 'none',
        },
        display: 'flex', // برای اینکه آیکون و متن کنار هم قرار بگیرن
        alignItems: 'center', // محتوا در مرکز عمودی
        justifyContent: 'center', // محتوا در مرکز افقی
        textTransform: 'none', // متن با حروف کوچک
      }}
    >
      <Box
        component="img" // استفاده از Box به عنوان یک تگ img
        src={BackImage}
        alt="Back"
        sx={{
          width: 24, // اندازه آیکون
          height: 24, // اندازه آیکون
          marginRight: 1, // فاصله بین آیکون و متن (اگر متن هم باشد)
          // اگر رنگ آیکون ثابت نیست و می‌خواهید با color دکمه تغییر کند:
          filter: 'invert(100%)', // این فیلتر رنگ تصویر رو برعکس میکنه، اگه آیکون مشکی باشه، سفید میشه.
                                  // اگر تصویر شما از قبل سفید/روشن هست، این خط رو حذف کنید.
        }}
      />
      
    </Button>
  );
}
