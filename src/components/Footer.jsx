import Wrapper from "../assets/wrappers/Footer";
import { Link } from "react-scroll";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="icon-container">
          <a href="https://wa.me/96181183601">
            <BsWhatsapp className="icon" />
          </a>
          <a href="https://www.facebook.com/Get.tarjama">
            {" "}
            <BsFacebook className="icon" />{" "}
          </a>
          <a href="https://www.instagram.com/get.tarjama">
            {" "}
            <BsInstagram className="icon" />{" "}
          </a>
        </div>

        <ul className="navbar">
          <Link to="how" offset={-30}>
            {" "}
            <li>How It Works</li>
          </Link>
          <Link to="services" offset={-60}>
            {" "}
            <li>Services</li>
          </Link>
          <Link to="mainareas" offset={-60}>
            {" "}
            <li>Sectors</li>
          </Link>
          <Link to="reviews" offset={-120}>
            {" "}
            <li>Reviews</li>
          </Link>
          <Link to="packages" offset={-60}>
            {" "}
            <li>Rates</li>
          </Link>
        </ul>

        <p>@2022 Get Tarjama | All Rights Reserved</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
