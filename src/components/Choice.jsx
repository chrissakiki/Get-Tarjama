import Wrapper from "../assets/wrappers/Choice";
import { BiTime } from "react-icons/bi";
import { RiCustomerServiceFill } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

const Choice = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>What Makes Us the Best Choice?</h3>
        <div className="content">
          <div className="item" style={{ borderTopColor: "#F4B400" }}>
            <div className="header">
              <div
                className="icon-container"
                style={{ backgroundColor: "#F4B400" }}
              >
                <RiCustomerServiceFill className="icon" />
              </div>
              <h4>24/7 Customer Service</h4>
            </div>

            <ul>
              <li>
                <AiOutlineCheck className="checked-icon" /> Personal project
                manager
              </li>
              <li>
                <AiOutlineCheck className="checked-icon" /> Direct support and
                assistance
              </li>
            </ul>
          </div>
          <div className="item" style={{ borderTopColor: "#517AF9" }}>
            <div className="header">
              <div
                className="icon-container"
                style={{ backgroundColor: "#517AF9" }}
              >
                <AiOutlineCheck className="icon" />
              </div>

              <h4>Quality Guarantee</h4>
            </div>
            <ul>
              <li>
                {" "}
                <AiOutlineCheck className="checked-icon" /> Post-completion
                project support
              </li>
              <li>
                {" "}
                <AiOutlineCheck className="checked-icon" /> Comprehensive
                quality assurance
              </li>
            </ul>
          </div>
          <div className="item" style={{ borderTopColor: "#0f9d58" }}>
            <div className="header">
              <div
                className="icon-container"
                style={{ backgroundColor: "#0f9d58" }}
              >
                <BiTime className="icon" />
              </div>
              <h4>On Time Delivery</h4>
            </div>

            <ul>
              <li>
                <AiOutlineCheck className="checked-icon" /> Fast turnarounds
              </li>
              <li>
                <AiOutlineCheck className="checked-icon" /> Availability for
                urgent orders
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Choice;
