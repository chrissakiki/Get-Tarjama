import styled from "styled-components";

const Wrapper = styled.div`
  height: 70px;
  box-shadow: 8px 8px 22px rgba(0, 0, 0, 0.1);
  z-index: 999;
  background: #f8f9f7;
  position: sticky;
  top: 0;
  left: 0;
  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    position: relative;

    @media (max-width: 960px) {
      align-items: flex-start;
      padding: 15px 25px;
    }
  }

  .logo-img {
    position: absolute;
    object-fit: cover;
    top: 10px;
    left: 10px;
  }

  .left {
    cursor: pointer;
    .logo {
      color: var(--primary-color);
      position: absolute;
      top: 18px;
      left: 55px;

      @media (max-width: 450px) {
        font-size: 1.9rem;
      }

      span {
        color: var(--secondary-color);
      }
    }
  }

  .right {
    @media (max-width: 960px) {
      position: absolute;
      z-index: 10000;
      top: -1000%;
      left: 0;
      right: 0;
      opacity: 0;
      background-color: var(--primary-color);
      height: calc(100vh - 70px);
      transition: top 0.4s ease-in-out;

      &.active {
        opacity: 1;
        top: 70px;
      }
    }
    .navbar {
      display: flex;
      align-items: center;
      gap: 40px;

      @media (max-width: 960px) {
        flex-direction: column;
        margin-top: 80px;
      }

      li {
        font-size: 1.23rem;
        font-weight: 400;
        color: #555;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        .activeLink {
          color: var(--secondary-color);
        }

        &:hover {
          color: var(--secondary-color);
        }
        @media (max-width: 960px) {
          font-size: 1.6rem;
          font-weight: 300;
          color: #f9f9f9;
        }
      }

      .btn {
        transition: all 0.2s ease-in-out;
        @media (max-width: 960px) {
          background-color: transparent;
          border-color: var(--secondary-color);
          color: var(--secondary-color);
          border-radius: 5px;
          font-size: 1.3rem;
        }

        &:hover {
          color: var(--secondary-color);
        }
      }
    }
  }

  .burger {
    display: none;
    padding-top: 6px;
    @media (max-width: 960px) {
      display: block;
    }

    .burger-icon {
      font-size: 2rem;
      color: var(--secondary-color);
      cursor: pointer;
    }
  }
`;

export default Wrapper;
