import styled from "styled-components";
import milestone from "../images/milestone.jpg";
const Wrapper = styled.div`
  background: linear-gradient(rgba(19, 33, 60, 0.95), rgba(19, 33, 60, 0.9)),
    url(${milestone});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 40px 0;

  @media (min-width: 768px) {
    background-attachment: fixed;
  }

  @media (max-width: 600px) {
    margin-top: 20px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 10px;
    gap: 30px;
    @media (max-width: 600px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      text-align: center;
      padding: 20px 10px;
    }

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1.5rem;
      color: #f9f9f9;
      font-weight: 500;
      p {
        font-size: 1.6rem;

        @media (max-width: 760px) {
          font-size: 1.4rem;
        }
      }

      .divider {
        height: 1px;
        width: 80px;
        border: 1px solid var(--primary-color);
        border-top-color: var(--secondary-color);
      }

      span {
        font-size: 1.2rem;

        @media (max-width: 760px) {
          font-size: 1.1rem;
        }

        @media (max-width: 600px) {
          width: 120px;
        }
      }
    }
  }
`;

export default Wrapper;
