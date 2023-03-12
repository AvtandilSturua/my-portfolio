import "./Style.css";
import { useState } from "react";
// import { Link } from "react-router-dom";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => {
    setOpenNav((current) => !current);
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>A.Sturua</h1>
          <span>
            <i
              onClick={handleClick}
              class="fa-sharp fa-solid fa-caret-down"
            ></i>
          </span>
        </div>
        <div className="navbar-box">
          <div className={openNav ? "openNav" : "navbar"}>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/avtandil-sturua-81953a224/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/AvtandilSturua" target="_blank">
                  <i class="fa-brands fa-square-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/a__sturua/" target="_blank">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
