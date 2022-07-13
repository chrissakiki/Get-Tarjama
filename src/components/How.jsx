import Wrapper from "../assets/wrappers/How";
import how from "../assets/images/how.svg";
const How = () => {
  return (
    <Wrapper name="how">
      <div className="container">
        <div className="left">
          <h3>How It Works?</h3>
          <div className="list-container">
            <div className="item" data-aos="fade-right">
              <div className="number">1</div>
              <div className="content">
                <h4>Place an order</h4>
                <p>
                  Send your document by email on info@get-tarjama.com or by
                  WhatsApp on + 961 81 183 601 with all your instructions.{" "}
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-right">
              <div className="number">2</div>
              <div className="content">
                <h4>Translator gets assigned</h4>
                <p>
                  A project manager will contact you to give you a free quote.
                  After approval, your job is assigned to a professional
                  translator.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-right">
              <div className="number">3</div>
              <div className="content">
                <h4>Receive your order</h4>
                <p>
                  You receive your requested translation on time, and have the
                  opportunity to double check and request changes.
                </p>
              </div>
            </div>
            <div className="item" data-aos="fade-right">
              <div className="number">4</div>
              <div className="content">
                <h4>Pay online </h4>
                <p>Payment is made through MoneyGram, OMT or Western Union.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right" data-aos="zoom-in">
          <img className="image" src={how} alt="translation" />
        </div>
      </div>
    </Wrapper>
  );
};

export default How;
