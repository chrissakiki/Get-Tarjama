import Wrapper from "../assets/wrappers/Services";
import services from "../assets/images/services.svg";
const Services = () => {
  return (
    <Wrapper name="services">
      <div className="container">
        <div className="left" data-aos="zoom-in">
          <img className="image" src={services} alt="translation" />
        </div>

        <div className="right">
          <h3>Our Services</h3>
          <div className="list-container">
            <div className="item" data-aos="fade-left">
              <div className="number">1</div>
              <div className="content">
                <h4>Professional Translation </h4>
                <p>
                  We provide high quality translation services at the most
                  competitive rates in the industry.{" "}
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-left">
              <div className="number">2</div>
              <div className="content">
                <h4>Editing and Proofreading</h4>
                <p>We deliver your message to your audience authentically.</p>
              </div>
            </div>
            <div className="item" data-aos="fade-left">
              <div className="number">3</div>
              <div className="content">
                <h4>Subtitling</h4>
                <p>
                  We offer excellent subtitling services for movies, television
                  programs, etc.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-left">
              <div className="number">4</div>
              <div className="content">
                <h4>Voice Over</h4>
                <p>
                  We localize your audio and video content with our voice over
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
