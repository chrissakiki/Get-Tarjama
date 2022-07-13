import Wrapper from "../assets/wrappers/Rates";
import { AiOutlineCheck } from "react-icons/ai";
const Rates = () => {
  return (
    <Wrapper name="packages">
      <div className="container">
        <h3 data-aos="fade-up">Choose a Plan That’s Right for You</h3>

        <div className="item-container">
          <div className="item" data-aos="fade-up">
            <h4>STANDARD</h4>
            <div className="content">
              <p className="price">0.04 USD</p>
              <p>per word</p>
            </div>

            <div className="list">
              <h5>Professional content</h5>
              <ul>
                <li>
                  <AiOutlineCheck className="check-icon" /> Social media posts
                </li>
                <li>
                  <AiOutlineCheck className="check-icon" /> Internal
                  communications
                </li>
                <li>
                  <AiOutlineCheck className="check-icon" /> General texts
                </li>
              </ul>
            </div>
          </div>
          <div className="item" data-aos="fade-up">
            <h4>ADVANCED</h4>
            <div className="content">
              <p className="price">0.06 USD</p>
              <p>per word</p>
            </div>
            <div className="list">
              <h5>Specialized content</h5>
              <ul>
                <li>
                  <AiOutlineCheck className="check-icon" /> Technical
                  presentations
                </li>
                <li>
                  <AiOutlineCheck className="check-icon" /> Business reports
                </li>
                <li>
                  <AiOutlineCheck className="check-icon" /> Guides and articles
                </li>
              </ul>
            </div>
          </div>
          <div className="item" data-aos="fade-up">
            <h4>FOR CORPORATES</h4>
            <div className="content">
              <p className="starting">Starting</p>
              <p className="price">0.032 USD</p>
              <p>per word</p>
            </div>
            <div className="list">
              <p className="details">
                We have more in store for you... <br className="dnone" />
                Contact us for more details!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Rates;
