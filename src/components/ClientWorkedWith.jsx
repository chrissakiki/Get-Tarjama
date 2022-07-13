import Wrapper from "../assets/wrappers/ClientWorkedWith";
import zomato from "../assets/images/zomato1.png";
import newyork from "../assets/images/ny1.png";
import michigan from "../assets/images/michigan1.png";
import pathways from "../assets/images/pathway.jpg";

const ClientWorkedWith = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3 data-aos="fade-up">A few companies we have worked with</h3>

        <div className="content">
          <div className="image-container">
            <img src={michigan} alt="" />
            <img src={zomato} alt="" />
            <img src={newyork} alt="" />
            <img src={pathways} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ClientWorkedWith;
