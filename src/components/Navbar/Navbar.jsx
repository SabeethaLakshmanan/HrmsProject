import { FiMenu, FiSearch, FiBell, FiCalendar } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import "./Navbar.css";
import { useSidebar } from "../../Context/SidebarContext";
import logo from "../../assets/image/dtgLogoImg.png";
import hamburger from "../../assets/image/Navbar/hamburgerIcon.png";
import { useState, useRef, useEffect } from "react";
import LanguageIcon from "../../assets/image/Navbar/LanguageIcon.png";
import MoonIcon from "../../assets/image/Navbar/MoonIcon.png";
import SettingIcon from "../../assets/image/Navbar/SettingIcon.png";
import NotificationIcon from "../../assets/image/Navbar/NotificationIcon.png"


const Navbar = () => {
const { toggleSidebar, collapsed } = useSidebar();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("light");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  const toggleDropdown = (e, name) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };


  return (
    <header className="app-navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="Datatech Genius" className="navbar-logo" />
        <button className="menu-btn" onClick={toggleSidebar}>
          <img
            src={hamburger}
            alt="hamburger"
            className={`hamburger-icon ${collapsed ? "collapsed" : "expanded"}`}
          />
        </button>
      </div>

      <div className="search-box">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search Keyword" />
      </div>

      {/* RIGHT */}
      <div className="nav-right" ref={dropdownRef}>
        <div className="icon-wrapper">
          <button
            className="icon-btn"
            onClick={(e) => toggleDropdown(e,"language")}
          >
            <img src={LanguageIcon} alt="Language" className="icon-img" />
          </button>

           {activeDropdown === "language" && (
            <div
              className="dropdown-menu"
              onClick={(e) => e.stopPropagation()}
            >
              {["English", "Tamil", "Hindi"].map((lang) => (
                <p
                  key={lang}
                  className={language === lang ? "active" : ""}
                  onClick={() => {
                    setLanguage(lang);
                    setActiveDropdown(null);
                  }}
                >
                  {lang}
                </p>
              ))}
            </div>
          )}
        </div>
        
         <div className="icon-wrapper">
          <button className="icon-btn" onClick={(e) => toggleDropdown(e,"theme")}>
            <img src={MoonIcon} alt="Theme" className="icon-img" />
          </button>

          {activeDropdown === "theme" && (
            <div className="dropdown-menu"
            onClick={(e) => e.stopPropagation()}>
              <p
                className={theme === "light" ? "active" : ""}
                onClick={() => setTheme("light")}
              >
                Light Mode
              </p>
              <p
                className={theme === "dark" ? "active" : ""}
                onClick={() => setTheme("dark")}
              >
                Dark Mode
              </p>
            </div>
          )}
        </div>

           <div className="icon-wrapper">
          <button
            className="icon-btn"
            onClick={(e) => toggleDropdown(e,"settings")}
          >
            <img src={SettingIcon} alt="Settings" className="icon-img" />
          </button>

          {activeDropdown === "settings" && (
            <div className="dropdown-menu"
            onClick={(e) => e.stopPropagation()}
            >
              <p>Profile</p>
              <p>Account Settings</p>
              <p>Logout</p>
            </div>
          )}
        </div>

         <div className="icon-wrapper">
          <button
            className="icon-btn notification"
            onClick={(e) => toggleDropdown(e,"notification")}
          >
            <img src={NotificationIcon} alt="Notification" className="icon-img" />
            <span className="dot" />
          </button>

          {activeDropdown === "notification" && (
            <div className="dropdown-menu notification-menu"
            onClick={(e) => e.stopPropagation()}
            >
              <p>🔔 New employee added</p>
              <p>📅 Leave request pending</p>
              <p>✅ Payroll processed</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
