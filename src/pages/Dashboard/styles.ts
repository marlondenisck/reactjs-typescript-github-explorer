/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

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
