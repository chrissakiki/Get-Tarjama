import Wrapper from "../assets/wrappers/Hero";
import { RiWhatsappFill } from "react-icons/ri";

const Hero = () => {
  return (
    <Wrapper name="home">
      <div className="container" data-aos="fade-in">
        <div className="center">
          {/* <span className="uppertext">
            <Typed
              strings={["Fast and Trusted Arabic Translations"]}
              typeSpeed={50}
            />
          </span> */}
          <h2>
            ⁠We Provide the Fastest, Most Reliable and{" "}
            <span className="colorfull"> Professional </span>Human Arabic
            Translation Services.{" "}
          </h2>

          <a href="https://wa.me/96181183601">
            <button className="btn">Request Quote</button>
          </a>
        </div>
      </div>
      <a href="https://wa.me/96181183601">
        <RiWhatsappFill className="whatsapp-icon" />
      </a>
    </Wrapper>
  );
};

export default Hero;
