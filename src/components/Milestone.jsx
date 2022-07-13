import Wrapper from "../assets/wrappers/Milestone";

const Milestone = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="item">
          <p data-aos="zoom-in"> 5+</p>
          <div className="divider"></div>
          <span>years of experience </span>
        </div>
        <div className="item">
          <p data-aos="zoom-in"> 103M+ </p>
          <div className="divider"></div>
          <span>words translated</span>
        </div>
        <div className="item">
          <p data-aos="zoom-in">10+ </p>
          <div className="divider"></div>
          <span>industries of expertise</span>
        </div>
        <div className="item">
          <p data-aos="zoom-in">300+ </p>
          <div className="divider"></div>
          <span>satisfied clients</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Milestone;
