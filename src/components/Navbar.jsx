import Wrapper from "../assets/wrappers/Navbar";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <Wrapper>
      <div className="container">
        <Link to="home" offset={-70}>
          <img src={logo} alt="" className="logo-img" />
          <div className="left">
            <h3 className="logo">
              <span>Get</span> Tarjama
            </h3>
          </div>
        </Link>

        <div className={click ? "right active" : "right"}>
          <ul className="navbar">
            <li>
              <Link
                to="how"
                offset={-30}
                spy={true}
                onClick={() => setClick(false)}
              >
                {" "}
                How It Works{" "}
              </Link>
            </li>

            <li>
              {" "}
              <Link
                to="services"
                offset={-60}
                spy={true}
                onClick={() => setClick(false)}
              >
                {" "}
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="mainareas"
                offset={-60}
                spy={true}
                onClick={() => setClick(false)}
              >
                {" "}
                Sectors
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="packages"
                spy={true}
                onClick={() => setClick(false)}
                offset={-60}
              >
                {" "}
                Rates
              </Link>
            </li>
            <a href="https://wa.me/96181183601">
              <button className="btn" onClick={() => setClick(false)}>
                Request Quote
              </button>
            </a>
          </ul>
        </div>

        <div className="burger">
          <GiHamburgerMenu
            className="burger-icon"
            onClick={() => setClick(!click)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
