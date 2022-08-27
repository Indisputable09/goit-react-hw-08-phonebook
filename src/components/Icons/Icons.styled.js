import styled from 'styled-components';
import { RiContactsBookLine } from 'react-icons/ri';

export const PhoneBookIconStyled = styled(RiContactsBookLine)`
  transition: ${p => p.theme.transition.color};
  color: ${p => (p.user === 'true' ? 'white' : 'black')};

  :hover,
  :focus {
    color: ${p => p.theme.colors.yellow};
  }
`;
