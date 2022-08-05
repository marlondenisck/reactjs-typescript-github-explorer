import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 3rem;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 2rem;
    }
    strong {
      font-size: 3rem;
      line-height: 1;
      color: #3d3d4d;
    }
    p {
      font-size: 1.8rem;
      line-height: 1;
      color: #737380;
      margin-top: 4px;
    }
    @media (max-width: 320px) {
      flex-direction: column;
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 4rem;
    li {
      & + li {
        margin-left: 6rem;
      }
      strong {
        display: block;
        font-size: 3rem;
        line-height: 1;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
    @media (max-width: 320px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      li {
        & + li {
          margin: 2rem 0;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 6rem;
  & + div {
    margin-top: 2rem;
  }
  a {
    display: block;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: box-shadow 0.2s;
    & + a {
      margin-top: 1.6rem;
    }
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    ul {
      display: flex;
      list-style: none;
      justify-content: center;
      li {
        text-align: center;
        svg {
          margin: 0 auto;
          display: block;
          color: #b8bb1c;
        }
        span {
          margin-top: 1rem;
          display: block;
          color: #848100;
        }
      }
    }
    div {
      margin-left: 1.6rem;
      flex: 1;
      strong {
        font-size: 2rem;
        color: #3d3d3d;
        line-height: 1;
      }
      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 4px;
        line-height: 1;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbc6;
    }
  }
  @media (max-width: 320px) {
    margin-top: 3rem;
    a {
      div {
        strong,
        p {
          font-size: 1.6rem;
          word-break: break-all;
          overflow: hidden;
        }
      }
    }
  }
`;
