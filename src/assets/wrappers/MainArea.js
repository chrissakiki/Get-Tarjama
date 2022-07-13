import styled from "styled-components";

const Wrapper = styled.div`
  padding: 60px 0 40px;
  background-color: #f8f9f7;
  border: 1px solid transparent;
  border-top-color: var(--primary-color);
  overflow: hidden;

  .container {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    @media (max-width: 1020px) {
      grid-template-columns: 1fr;
      padding: 0 25px;
      grid-column-gap: 0;
    }
    @media (max-width: 760px) {
      grid-row-gap: 60px;
    }

    .left {
      height: 500px;

      .image {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 1020px) {
        display: none;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: left;
      margin-left: 50px;
      gap: 40px;

      @media (max-width: 1020px) {
        margin-left: 0;
        grid-template-columns: 1fr;
        align-items: center;
      }

      h3 {
        color: #2f2e49;
        letter-spacing: 1.1px;
        font-size: 2rem;

        @media (max-width: 600px) {
          font-size: 1.8rem;
        }
        @media (max-width: 450px) {
          text-align: center;
        }
      }

      .colorfull {
        color: var(--secondary-color);
      }
      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 20px;

        @media (max-width: 450px) {
          grid-column-gap: 10px;
        }
        li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.3rem;
          font-weight: 400;
          color: #555;

          @media (max-width: 600px) {
            font-size: 1.1rem;
          }
          @media (max-width: 450px) {
          }

          .check-icon {
            color: green;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

export default Wrapper;
