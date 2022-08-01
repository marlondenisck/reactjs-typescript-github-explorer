/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 4.8rem;
  color: #3a3a3a;
  max-width: 45rem;
  margin: 4rem auto;
  line-height: 1;
  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Form = styled.form`
  margin: 3rem auto;
  max-width: 70rem;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  input {
    flex: 1;
    height: 7rem;
    padding: 0 2.4rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    font-size: 1.6rem;
    color: #3d3d3d;
    border: 2px solid transparent;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 2rem;
    }

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    height: 7rem;
    width: 21rem;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #64dfdf;
    color: #fff;
    font-weight: bold;
    font-size: 1.6rem;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#64dfdf')};
    }

    @media (max-width: 768px) {
      margin: 2rem auto;
      width: 100%;
    }
  }
`;

export const Repositories = styled.div`
  margin: 6rem auto;
  max-width: 70rem;

  @media (max-width: 768px) {
    margin: 4rem auto;
    width: 100%;
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

    @media (max-width: 320px) {
      flex-direction: column;
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
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

      @media (max-width: 320px) {
        text-align: center;
        margin: 1rem 0;

        strong, p {
          font-size: 1.6rem;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbc6;

      @media (max-width: 320px) {
        text-align: center;
        width: 3rem;
        height: 3rem;
        margin: 2rem 0 0;
        width: 100%;
        color: #484848;
      }
    }
  }
`;

export const AlertError = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
