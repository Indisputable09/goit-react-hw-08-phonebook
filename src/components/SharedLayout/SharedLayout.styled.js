import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[4]}px 0;
  transition: ${p => p.theme.transition.color};

  :hover,
  :focus {
    color: ${p => p.theme.colors.orangered};
  }

  &.active {
    color: ${p => p.theme.colors.orangered};
  }
`;
