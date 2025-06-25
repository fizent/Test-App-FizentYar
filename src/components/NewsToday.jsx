import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  Divider,
} from "@mui/material";
import Back_Btn from "./Back";
import FooterCom from "./FooterC";

export default function NewsToday() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tomorrow, setTomorrow] = useState("");

  const API_KEY = "26a906d409d446dc90a475193a55ffcf";
  const API_URL = "https://newsapi.org/v2/everything";

  const isPersian = (text) => /[\u0600-\u06FF]/.test(text);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: query,
          apiKey: API_KEY,
          pageSize: 5,
        },
      });

      const fetchedArticles = response.data.articles;
      setArticles(fetchedArticles);
      if (fetchedArticles.length === 0) {
        setTomorrow(
          isPersian(query)
            ? "فردا خبری شارژ میشه."
            : "Tomorrow, the news will be updated. Be sure to check it out!"
        );
      } else {
        setTomorrow("");
      }
    } catch (error) {
      alert("در دریافت خبرها مشکل پیش آمد، لطفاً مجدد تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ px: 2, py: 2, maxWidth: "600px", mx: "auto", marginTop: "150px"}}>
      <Back_Btn />
      <Typography variant="h4" fontWeight={700} textAlign="center" mt={2}>
        دستیار اخبار
      </Typography>

      {/* باکس جستجو */}
      <Card
        sx={{
          my: 3,
          p: 2,
          borderRadius: 3,
          backgroundColor: "#1e1e1e",
          color: "#fff",
        }}
      >
        <TextField
          label="موضوع خبر را وارد کنید"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            mb: 2,
            backgroundColor: "#2c2c2c",
            borderRadius: 2,
            "& label": { color: "#bbb" },
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": { borderColor: "#444" },
              "&:hover fieldset": { borderColor: "#888" },
            },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSearch}
          disabled={loading}
          sx={{
            py: 1.5,
            fontWeight: 600,
            borderRadius: 2,
            backgroundColor: "#2979ff",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          {loading ? <CircularProgress size={22} color="inherit" /> : "جستجو"}
        </Button>
      </Card>

      {/* نتایج خبر */}
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <Card
            key={index}
            sx={{
              mb: 2,
              p: 2,
              borderRadius: 3,
              backgroundColor: "#252525",
              color: "#fff",
              boxShadow: 2,
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.01)" },
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="body2" mb={1}>
              {article.description}
            </Typography>
            <Divider sx={{ borderColor: "#444", my: 1 }} />
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#64b5f6", fontWeight: "bold" }}
            >
              مشاهده کامل
            </a>
          </Card>
        ))
      ) : (
        <Typography textAlign="center" color="#aaa" mt={2}>
          {tomorrow || "خبری موجود نیست لطفاً چیزی وارد کنید"}
        </Typography>
      )}

      {/* <FooterCom /> */}
    </Box>
  );
}
