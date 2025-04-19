import React, { useState } from "react";  
import axios from "axios";  
import BackButton from "./BackButton";  

const NewsToday = () => {  
  const [query, setQuery] = useState("");         
  const [articles, setArticles] = useState([]);   
  const [loading, setLoading] = useState(false);  
  const [language, setLanguage] = useState("en");   
  const [tomorrow, setTomorrow] = useState("");  
  const API_KEY = "26a906d409d446dc90a475193a55ffcf";  
  const API_URL = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything"; // CORS Proxy  

  // تابعی برای شناسایی زبان فارسی  
  const isPersian = (text) => /[\u0600-\u06FF]/.test(text);  

  // وقتی متن وارد می‌شود، زبان به صورت خودکار تغییر می‌کند  
  const handleChange = (e) => {  
    const text = e.target.value;  
    setQuery(text);  
    if (isPersian(text)) {  
      setLanguage("fa");  // اگر متن فارسی بود، زبان را به فارسی تغییر می‌دهد  
    } else {  
      setLanguage("en");  // در غیر اینصورت زبان انگلیسی می‌شود  
    }  
  };  

  const handleSearch = async () => {  
    if (query) {  
      setLoading(true);  
      try {  
        const response = await axios.get(API_URL, {  
          params: {  
            q: query,  
            apiKey: API_KEY,  
            language: language,  
          },  
        });  
        const fetchedArticles = response.data.articles;  
        setArticles(fetchedArticles);  

        if (fetchedArticles.length === 0) {  
          if (language === 'fa') {  
            setTomorrow("فردا خبرا شارژ میشه یکسری بزن حتما")  
          } else if (language === 'en') {  
            setTomorrow("Tomorrow, the news will be updated. Be sure to check it out!");  
          }  
        } else {  
          setTomorrow("");  
        }  
      } catch (error) {  
        console.error("Error fetching the news:", error);  
      } finally {  
        setLoading(false);  
      }  
    }  
  };  

  return (  
    <div className="BodyChat">  
      <BackButton />  
      <div className="containerAiChat">  
        <h2 className="Text_welcome">📰 دستیار اخبار (Fizent)</h2>  
        {/* فرم جستجو */}  
        <form className="form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>  
          <textarea  
            className="TextEaChat"  
            value={query}  
            onChange={handleChange}  // استفاده از handleChange برای شناسایی زبان  
            placeholder="نوع درخواست خبری خود را تایپ کنید..."  
            rows={5}  
          />  
          <button className="BtnSend" type="submit" disabled={loading}>  
            {loading ? "لطفاً صبر کنید..." : "جستجو"}  
          </button>  
        </form>  
      </div>  

      {/* نمایش نتایج اخبار */}  
      <div className="answerBox">  
        {articles.length > 0 ? (  
          articles.map((article, index) => (  
            <div key={index} className="chatItem">  
              <strong className="youAnswer">{article.title}</strong>  
              <p id="pAnswer">  
                <span className="youAnswer">توضیحات:</span> {article.description}  
                <br />  
                <a style={{ color: "red" }}  
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
          <p className="no-result" id="pAnswer">{tomorrow || "خبری موجود نیست لطفاً چیزی بنویسید"}</p>  
        )}  
      </div>  
    </div>  
  );  
};  

export default NewsToday;  