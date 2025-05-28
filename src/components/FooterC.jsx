import { Link } from "react-router-dom";
export default function FooterCom() {
    return(
        <div className="absolut">
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

    )
}

