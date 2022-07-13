import styled from "styled-components";
import clients from "../images/clients.jpg";

const Wrapper = styled.div`
  padding: 40px 0;
  background: linear-gradient(rgba(19, 33, 60, 0.95), rgba(19, 33, 60, 0.9)),
    url(${clients});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (min-width: 768px) {
    background-attachment: fixed;
  }

  overflow-x: hidden;

  .container {
    h3 {
      text-align: center;
      color: var(--secondary-color);
      margin-bottom: 60px;
      font-size: 1.5rem;
      line-height: 1.3;

      @media (max-width: 600px) {
        font-size: 1.2rem;
        margin-bottom: 40px;
      }

      @media (max-width: 450px) {
        padding: 0 5px;
      }
    }
    .icon-quote {
      font-size: 50px;
    }
    .client {
      background: linear-gradient(
        rgba(19, 33, 60, 0.55),
        rgba(19, 33, 60, 0.5)
      );
      height: 200px;
      max-width: 570px;
      display: flex !important;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 15px;
      border-radius: 10px;

      @media (max-width: 600px) {
        justify-content: center;
        min-height: 220px;
        padding-bottom: 30px;
        text-align: center;
      }

      .test {
        align-self: end;
      }

      .star-icon-container {
        margin: 10px 0 5px;

        .star-icon {
          color: gold;
        }
      }

      h4 {
        color: var(--secondary-color);
        align-self: center;
      }

      p {
        font-size: 1rem;
        color: #f9f9f9;
        letter-spacing: 0.9px;
      }
    }
  }
`;

export default Wrapper;
