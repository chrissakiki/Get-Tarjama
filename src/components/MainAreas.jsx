import Wrapper from "../assets/wrappers/MainArea";
import main from "../assets/images/mainarea.svg";
import { MdCheckCircle } from "react-icons/md";
const MainArea = () => {
  return (
    <Wrapper name="mainareas">
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <img className="image" src={main} alt="translation" />
        </div>
        <div className="right">
          <h3 data-aos="fade-left">
            Main Areas of <span className="colorfull"> Specialization</span>
          </h3>
          <ul data-aos="fade-left">
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Technical
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Immigration
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Insurance
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Marketing
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Banking/Finance
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> E-Commerce
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Public Sector
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Media
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Legal
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Medical
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Business
            </li>
            <li>
              {" "}
              <MdCheckCircle className="check-icon" /> Industrial
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainArea;
