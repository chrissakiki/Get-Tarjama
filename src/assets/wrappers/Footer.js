import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--primary-color);
  padding: 30px 0 10px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon-container {
      display: flex;
      gap: 20px;

      .icon {
        font-size: 25px;
        color: #f9f9f9;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }

    .navbar {
      color: #f9f9f9;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      margin: 30px 0 25px;

      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }

    p {
      color: #f9f9f9;
      font-size: 1.1rem;
      letter-spacing: 0.8px;
      word-wrap: break-word;

      @media (max-width: 500px) {
        font-size: 0.9rem;
      }
    }
  }
`;

export default Wrapper;
