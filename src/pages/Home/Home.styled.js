import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeTitle = styled.h1`
  padding-top: 20px;
  width: 600px;
  font-size: ${p => p.theme.fontSizes.l};
  margin-left: auto;
  margin-right: auto;
`;

export const HomeLink = styled(Link)`
  color: ${p => p.theme.colors.blue};
  transition: ${p => p.theme.transition.color};

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;
