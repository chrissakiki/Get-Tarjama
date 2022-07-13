import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--primary-color);
  padding: 60px 0 40px;
  overflow: hidden;
  animation: slide 2s linear infinite;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;

    @media (max-width: 1020px) {
      grid-template-columns: 1fr;
      padding: 0 25px;
    }

    .left {
      h3 {
        color: var(--secondary-color);
        letter-spacing: 1.1px;
        font-size: 2rem;
        margin-bottom: 40px;

        @media (max-width: 600px) {
        }
        @media (max-width: 450px) {
          text-align: center;
        }
      }

      .list-container {
        color: #f8f9f7;
        .item {
          width: 100%;
          display: grid;
          grid-template-columns: auto 1fr;
          justify-content: center;
          grid-column-gap: 20px;

          .number {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--secondary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            font-weight: 600;
          }

          .content {
            margin-bottom: 20px;
            h4 {
              color: #e1d9d1;
              font-size: 1.2rem;
              font-weight: 700;
              letter-spacing: 1px;
              margin-bottom: 5px;
            }
            p {
              font-size: 0.95rem;
              color: lightgray;
              line-height: 1.6;
            }
          }
        }
      }
    }

    .right {
      height: 500px;

      @media (max-width: 1020px) {
        display: none;
      }

      .image {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Wrapper;
