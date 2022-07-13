import styled from "styled-components";

const Wrapper = styled.div`
  padding: 80px 20px;

  @media (max-width: 600px) {
    padding: 50px 20px;
  }
  @media (max-width: 450px) {
  }

  .container {
    overflow: hidden;
    h3 {
      color: var(--primary-color);
      text-transform: capitalize;
      text-align: center;
      margin-bottom: 60px;
      @media (max-width: 600px) {
        font-size: 1.7rem;
        margin-bottom: 40px;
      }
    }

    .content {
      .image-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 70px;

        @media (max-width: 600px) {
          gap: 10px;
        }
        @media (max-width: 450px) {
          gap: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        img {
          width: 200px;
          object-fit: cover;
          border-radius: 10%;
          image-rendering: -moz-crisp-edges; /* Firefox */
          image-rendering: -o-crisp-edges; /* Opera */
          image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
          image-rendering: crisp-edges;
          -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */

          @media (max-width: 450px) {
            width: 150px;
          }
        }
      }
    }
  }
`;

export default Wrapper;
