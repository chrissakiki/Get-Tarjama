import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-container {
    width: 500px;
    background-color: #f8f9f7;
    color: var(--primary-color);
    border-radius: 20px;

    @media (max-width: 600px) {
      width: 95%;
    }
    .header {
      padding: 12px 20px 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--primary-color);

      h3 {
        font-size: 1.7rem;
        font-weight: 700;
        letter-spacing: 0.95px;

        span {
          color: var(--secondary-color);
        }
      }

      .close {
        font-size: 1.5rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }

    .form {
      padding: 20px 15px 13px 15px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 12px;
      grid-row-gap: 12px;

      @media (max-width: 450px) {
        grid-template-columns: 1fr;
        padding: 15px 15px 13px 15px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 3px;

        &:nth-child(5) {
          width: 100%;

          grid-column: 1 / -1;
        }

        label {
          font-size: 1.15rem;
        }

        input[type="text"],
        input[type="tel"],
        input[type="email"] {
          background: transparent;
          outline: none;
          border: 1px solid #777;
          padding: 5px 6px;
          color: var(--primary-color);
          font-size: 1rem;
          border-radius: 3px;
        }

        textarea {
          background: transparent;
          padding: 3px 5px;
          resize: none;
          outline: none;
          border: 1px solid #777;
          height: 80px;
          font-size: 1rem;
          color: var(--primary-color);
        }
      }

      .btn {
        width: 100%;
        grid-column: 1 / -1;
        font-size: 1.3rem;
        letter-spacing: 0.8px;
        margin-top: 3px;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--secondary-color);
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }
`;

export default Wrapper;
