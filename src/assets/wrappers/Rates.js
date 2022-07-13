import styled from "styled-components";

const Wrapper = styled.div`
  padding: 80px 0;
  background: #f8f9f7;

  @media (max-width: 600px) {
    padding: 40px 0 20px;
  }

  .container {
    h3 {
      text-align: center;
      color: var(--primary-color);
      margin-bottom: 80px;

      @media (max-width: 600px) {
        font-size: 1.8rem;
        margin-bottom: 40px;
      }
    }

    .item-container {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      flex-wrap: wrap;

      .item {
        height: 410px;
        width: 330px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        text-align: center;
        border-radius: 10px;

        @media (max-width: 960px) {
          margin-top: 30px;
        }

        h4 {
          font-size: 1.3rem;
          letter-spacing: 1px;
          color: #f1f1f1;
          padding: 20px 0;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background-color: var(--primary-color);
          border: 1px solid var(--primary-color);
          border-bottom-color: lightgray;
        }

        .content {
          background-color: var(--primary-color);
          display: flex;
          flex-direction: column;
          padding: 30px 20px;
          color: #f1f1f1;
          position: relative;

          .starting {
            font-size: 0.85rem;
            position: absolute;
            top: 10px;
            left: 42%;
            color: #f1f1f1;
          }

          .price {
            font-size: 2.2rem;
            font-weight: 600;
          }

          h5 {
            margin-top: 20px;
          }
        }

        .list {
          padding: 30px;

          h5 {
            font-size: 1.3rem;
            color: #555;
            font-weight: 500;
            margin-bottom: 20px;
            text-align: center;
          }
          ul {
            margin-top: 10px;

            padding-left: 15px;
            .check-icon {
              color: var(--primary-color);
            }

            li {
              font-size: 1.1rem;
              margin-bottom: 2px;
              display: flex;
              align-items: center;
              gap: 8px;
              color: #222;
            }
          }
        }

        .details {
          text-align: center;
          color: #222;
        }
      }
    }

    .dnone {
      @media (min-width: 450px) {
        display: none;
      }
    }
  }
`;

export default Wrapper;
