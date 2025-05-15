import React, { useState } from "react";  
import axios from "axios";  
import { Link } from "react-router-dom";  

const NewsToday = () => {  
  const [query, setQuery] = useState("");  
  const [articles, setArticles] = useState([]);  
  const [loading, setLoading] = useState(false);  
  const [tomorrow, setTomorrow] = useState("");

  const API_KEY = "26a906d409d446dc90a475193a55ffcf";  
  const API_URL = "https://newsapi.org/v2/everything";

  // تشخیص زبان متن
  const isPersian = (text) => /[\u0600-\u06FF]/.test(text);  

  const handleChange = (e) => {  
    const text = e.target.value;  
    setQuery(text);  
  };  

  const handleSearch = async () => {  
    if (!query) return;  
    setLoading(true);  
    try {  
      // بر اساس زبان، می‌توایند کلمه‌ها را اضافه کنید یا نتایج را فیلتر کنید
      const response = await axios.get(API_URL, {  
        params: {  
          q: query,  
          apiKey: API_KEY,  
          pageSize: 5, // محدود سازی نتایج
        },  
      });  

      const fetchedArticles = response.data.articles;  
      setArticles(fetchedArticles);  

      if (fetchedArticles.length === 0) {  
        setTomorrow(isPersian(query) ? "فردا خبری شارژ میشه." : "Tomorrow, the news will be updated. Be sure to check it out!");  
      } else {  
        setTomorrow("");  
      }  

    } catch (error) {  
      console.error("Error fetching the news:", error);  
      alert("در دریافت خبرها مشکل پیش آمد، لطفاً مجدد تلاش کنید.");  
    } finally {  
      setLoading(false);  
    }  
  };  

  return (
    <div className="BodyChat">

      {/* قسمت جستجو */}
      <div className="containerAiChat">
        <h2 className="Text_welcome">📰 دستیار اخبار (Fizent)</h2>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault(); 
            handleSearch();
          }}
        >
          <textarea
            className="TextEaChat"
            value={query}
            onChange={handleChange}
            placeholder="نوع درخواست خبری خود را تایپ کنید..."
            rows={5}
          />
          <button className="BtnSend" type="submit" disabled={loading}>
            {loading ? "لطفاً صبر کنید..." : "جستجو"}
          </button>
        </form>
      </div>

      {/* نمایش نتایج */}
      <div className="answerBox">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="chatItem">
              <strong className="youAnswer">{article.title}</strong>
              <p id="pAnswer">
                <span className="youAnswer">توضیحات:</span> {article.description}
                <br />
                <a
                  style={{ color: "red" }}
                  href={article.url}
                  className="read-more"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  لینک سایت
                </a>
              </p>
            </div>
          ))
        ) : (
          <p className="no-result" id="pAnswer">
            {tomorrow || "خبری موجود نیست لطفاً چیزی بنویسید"}
          </p>
        )}
      </div>

      {/* فوتر */}
        <footer className="footer">
            <div className="footer-container">
              <div className="div-cursor">
                <Link to="/">
                  <img className="icon-profile" src="/icons8-home.svg" alt="" />
                </Link>
                <p>خانه</p>
              </div>
              <div className="div-cursor">
                <Link to="/Setting">
                  <img className="icon-profile" src="/icons8-setting.svg" alt="" />
                </Link>
                <p>تنظیمات</p>
              </div>
              <div className="div-cursor">
                <Link to="/About">
                  <img className="icon-profile" src="/icons8-about.svg" alt="" />
                </Link>
                <p>درباره</p>
              </div>
            </div>
        </footer>
    </div>
  );
};

export default NewsToday;