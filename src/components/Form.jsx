import React from "react";
import emailjs from "@emailjs/browser";
import Wrapper from "../assets/wrappers/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppContext } from "../AppProvider";

const initialState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const Form = () => {
  const [formData, setFormData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);
  const form = React.useRef();
  const navigate = useNavigate();

  const { setOpen } = useAppContext();
  const { name, email, phone, subject, message } = formData;

  const handleChange = (e) => {
    if (e.target.name === "name") {
      // accepts letter only
      return setFormData({
        ...formData,
        [e.target.name]: e.target.value.replace(/[^a-zA-Z\s]/gi, ""),
      });
    }

    if (e.target.name === "phone") {
      // doesnt accept letters
      return setFormData({
        ...formData,
        [e.target.name]: e.target.value.replace(/[^0-9-+\s]/gi, ""),
      });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLICKEY
      )
      .then(
        () => {
          navigate("/thankyou");
          setLoading(false);
          setOpen(false);
        },
        (error) => {
          toast.error("Something went wrong! Please try again");
          setLoading(false);
        }
      );
  };
  return (
    <Wrapper>
      <div className="form-container">
        <div className="header">
          <h3>
            Request <span>Quote</span>{" "}
          </h3>
          <span className="close" onClick={() => setOpen(false)}>
            X
          </span>
        </div>
        <form className="form" onSubmit={handleSubmit} ref={form}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Kevin.."
              required
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="kevin@hotmail.com"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              placeholder="961-70030605"
              required
              value={phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="Translation"
              required
              value={subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message here"
              required
              value={message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="btn" disabled={loading}>
            {loading ? "Please wait.." : "Submit"}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Form;
