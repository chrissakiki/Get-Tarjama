import React from "react";
import Wrapper from "../assets/wrappers/Hero";
import { RiWhatsappFill } from "react-icons/ri";
import Form from "./Form";
import { useAppContext } from "../AppProvider";

const Hero = () => {
  const { open, setOpen } = useAppContext();
  return (
    <>
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

            <button className="btn" onClick={() => setOpen(true)}>
              Request Quote
            </button>
          </div>
        </div>
        <a href="https://wa.me/96181183601">
          <RiWhatsappFill className="whatsapp-icon" />
        </a>
        {open && <Form setOpen={setOpen} />}
      </Wrapper>
    </>
  );
};

export default Hero;
