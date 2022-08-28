import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.theme.space[9]};
  margin-right: ${p => p.theme.space[9]};
`;

export const SwitchFormLink = styled(Link)`
  font-family: 'Arial';
  transition: ${p => p.theme.transition.color};

  :hover,
  :focus {
    color: ${p => p.theme.colors.blue};
  }
`;
