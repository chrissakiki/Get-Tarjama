import styled from "styled-components";

const Wrapper = styled.div`
  background: #f8f9f7;
  padding: 60px 0;

  .container {
    @media (max-width: 600px) {
      padding: 0 20px;
    }
    @media (max-width: 450px) {
      padding: 0 10px;
    }
    h3 {
      text-align: center;
      color: var(--primary-color);
      margin-bottom: 60px;

      @media (max-width: 960px) {
        font-size: 2rem;
      }
      @media (max-width: 600px) {
        font-size: 1.8rem;
      }
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-evenly;

      @media (max-width: 768px) {
        gap: 20px;
      }

      .item {
        height: 285px;
        width: 340px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        display: grid;
        grid-template-columns: 1fr;

        gap: 15px;
        text-align: center;
        padding: 30px 10px;
        border-top: 5px solid;

        @media (max-width: 960px) {
          margin-top: 10px;
        }

        .header {
          height: 130px;
          display: flex;
          flex-direction: column;
          align-items: space-between;
          justify-content: space-between;

          .icon-container {
            margin-inline: auto;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .icon {
            color: #fff;
            font-size: 2.5rem;
          }

          h4 {
            font-size: 1.2rem;
            letter-spacing: 1px;
            color: var(--primary-color);
          }
        }

        ul {
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 2px;
          li {
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1.5;
            font-size: 1.05rem;
            color: #444;
            gap: 5px;

            .checked-icon {
              color: green;
              font-size: 17px;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
