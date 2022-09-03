import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: ${p => p.theme.space[0]}px ${p => p.theme.space[4]}px;
`;

export const HomeTitle = styled.h1`
  padding-top: ${p => p.theme.space[4]}px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.l};
  margin-left: ${p => p.theme.space[9]};
  margin-right: ${p => p.theme.space[9]};

  @media screen and (min-width: 480px) {
    width: 400px;
  }
`;

export const HomeLink = styled(Link)`
  color: ${p => p.theme.colors.blue};
  transition: ${p => p.theme.transition.color};

  :hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;
