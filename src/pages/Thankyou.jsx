import React from "react";
import Wrapper from "../assets/wrappers/Thankyou";
import { useNavigate } from "react-router-dom";
import { runFireworks } from "../lib/confetti";
const Thankyou = () => {
  const navigate = useNavigate();
  const [numb, setNumb] = React.useState(4);

  React.useEffect(() => {
    runFireworks();
  }, []);
  React.useEffect(() => {
    if (numb <= 0) {
      return navigate("/");
    }
    setTimeout(() => {
      setNumb(numb - 1);
    }, 1000);
  }, [numb, navigate]);
  return (
    <Wrapper>
      <div className="container">
        <h2>Thank You For Submitting Your Information.</h2>
        <p>We will contact you as soon as possible.</p>
        <span className="redirect">
          You will be redirected in <span className="numb">{numb}</span>
        </span>
      </div>
    </Wrapper>
  );
};

export default Thankyou;
