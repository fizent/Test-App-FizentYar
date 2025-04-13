import { Link } from "react-router-dom";

export default function MenuMobile({ isVisible, closeMenu }) {
  return (
    <div className={`sider ${isVisible ? "active" : "hidden"}`}>
      <div className="menu-toggle-btn">
        <button className="btn_menu back_size" onClick={closeMenu}>
          <img className="wid-btn" src="/icons8-close.svg" alt="Close menu" />
        </button>
      </div>
      <div className="text-dashbord">
        <h2 className="color-text-dashbord">FizentYar</h2>
        <p>Your Ai Friend</p>
        <p className="color-text-dashbord">Mohammad Fazel</p>
        <ul>
          <li className="color-text-dashbord Link">
            <Link to="/About">About</Link>
          </li>
          <li className="color-text-dashbord Link">
            <Link to="/Setting">Setting</Link>
          </li>
          <li className="color-text-dashbord">
            <a href="https://myket.ir/app/app.vercel.calculator_app_xwy5.twa">
              <img src="/myket.png" alt="Myket" id="myket" />
            </a>
          </li>
        </ul>
        <div className="ImageTizer">
          {[...Array(5)].map((_, i) => (
            <img key={i} className="wid-btn" src="/public/LOGO Fazel.png" alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}
