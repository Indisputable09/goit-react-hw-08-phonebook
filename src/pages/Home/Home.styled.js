import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeTitle = styled.h1`
  width: 600px;
  font-size: ${p => p.theme.fontSizes.l};
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin-left: auto;
  margin-right: auto;
`;

export const HomeLink = styled(Link)`
  color: ${p => p.theme.colors.blue};

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;
