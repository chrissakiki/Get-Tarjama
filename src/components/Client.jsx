import Wrapper from "../assets/wrappers/Client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";
import { BsChatRightQuote } from "react-icons/bs";

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <Wrapper name="reviews">
      <div className="container">
        <h3 data-aos="zoom-in">
          <BsChatRightQuote className="icon-quote" />
        </h3>

        <div className="reviews">
          <Slider {...settings}>
            <div className="client">
              <p data-aos="slide-right">
                I am very impressed with the quality of the Arabic translation
                and the fast delivery time. Cynthia was extremely helpful in
                answering my questions and very responsive to my emails. Thank
                you for such great service!
              </p>
              <div>
                <div className="star-icon-container" data-aos="zoom-out">
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                </div>
                <h4 data-aos="zoom-out">Michael Bulmer</h4>
              </div>
            </div>
            <div className="client">
              <div>
                <p data-aos="slide-left">
                  The quality of work is really good. The style and accuracy
                  with which the team translated my various documents was
                  exactly what I expected it to be. Keep up the good work!
                </p>
              </div>
              <div>
                <div className="star-icon-container" data-aos="zoom-out">
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                </div>
                <h4 data-aos="zoom-out">Samer Jamal</h4>
              </div>
            </div>
            <div className="client">
              <p>
                The translation team showed extreme cooperation and flexibility
                in processing two rush assignments! They are the best!
              </p>
              <div>
                <div className="star-icon-container">
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                </div>
                <h4>Amanda Khoury</h4>
              </div>
            </div>
            <div className="client">
              <p>
                Great customer service, affordable prices and high quality
                translations! I highly recommend their services!
              </p>
              <div>
                <div className="star-icon-container">
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                  <AiFillStar className="star-icon" />
                </div>
                <h4>Saud Abdul Aziz</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
};

export default Client;
