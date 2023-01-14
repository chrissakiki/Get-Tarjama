import styled from "styled-components";
import hero from "../images/hero.jpg";
const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(rgba(19, 33, 60, 0.95), rgba(19, 33, 60, 0.9)),
    url(${hero});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  padding: 70px 0;
  width: 100%;

  @media (max-width: 1020px) {
    padding: 20px 0;
  }
  @media (max-width: 960px) {
    height: 45vh;
  }
  .container {
    height: 100%;
    max-width: 800px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .center {
      padding: 0 10px;

      @media (max-width: 1020px) {
        text-align: center;
      }
      @media (max-width: 550px) {
        text-align: center;
        padding: 0;
      }
      .uppertext {
        font-size: 1.1rem;
        font-weight: 400;
        color: #999;
        text-transform: uppercase;

        @media (max-width: 760px) {
          font-size: 1rem;
        }
      }
      h2 {
        font-size: 2.2rem;
        margin: 10px 0 20px;
        /* color: #2f2e49; */
        color: #f1f1f1;
        font-weight: 600;
        letter-spacing: 1px;

        .colorfull {
          color: var(--secondary-color);
        }
        @media (max-width: 960px) {
          font-size: 2.1rem;
          letter-spacing: 0.9px;
        }
        @media (max-width: 760px) {
          font-size: 1.8rem;

          /* letter-spacing: 0.9px; */
        }
        @media (max-width: 550px) {
          font-size: 1.5rem;
        }
        @media (max-width: 450px) {
          font-size: 1.33rem;
        }
      }

      .btn {
        background-color: #df9e07;
        border-color: var(--secondary-color);
        padding: 10px 30px;
        font-weight: 600;
        font-size: 1.35rem;
        color: #f1f1f1;
        transition: all 0.2s ease-in-out;
        letter-spacing: 0.9px;

        @media (max-width: 600px) {
          font-size: 1.2rem;
          padding: 10px 20px;
        }
        @media (max-width: 600px) {
          font-size: 1.2rem;
          padding: 10px 18px;
        }
        &:hover {
          background-color: transparent;
          color: var(--secondary-color);
        }
      }
    }

    /* .right {
      @media (max-width: 1020px) {
        padding: 10px 50px;
      }
      @media (max-width: 760px) {
        padding: 10px 20px;
      }
      .image {
        width: 100%;
        height: 100%;
      }
    } */
  }
  .whatsapp-icon {
    z-index: 900;
    display: none;
    @media (max-width: 500px) {
      display: block;
      position: fixed;
      bottom: 10px;
      right: 10px;
      color: #44c354;
      font-size: 50px;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
