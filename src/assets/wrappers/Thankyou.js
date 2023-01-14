import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--primary-color);
  padding: 60px 0;
  height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
  @media (max-width: 450px) {
    padding: 0;
  }

  .container {
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 450px) {
      padding: 0;
    }

    h2 {
      color: var(--secondary-color);
      font-size: 2.4rem;

      @media (max-width: 600px) {
        font-size: 2rem;
      }

      @media (max-width: 450px) {
        font-size: 1.6rem;
      }
    }

    p {
      color: #f8f9f7;
      font-size: 1.4rem;
      @media (max-width: 450px) {
        font-size: 1.2rem;
      }
    }

    .redirect {
      margin-top: 10px;
      font-size: 1.1rem;
      color: #f8f9f7;

      @media (max-width: 450px) {
        font-size: 1rem;
      }

      .numb {
        color: var(--secondary-color);
      }
    }
  }
`;

export default Wrapper;
