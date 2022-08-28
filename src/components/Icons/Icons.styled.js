import styled from 'styled-components';
import { RiContactsBookLine } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import { ImBin } from 'react-icons/im';
import { ListItemBlockButton } from 'components/Button/Button.styled';

export const PhoneBookIconStyled = styled(RiContactsBookLine)`
  transition: ${p => p.theme.transition.color};
  color: ${p => (p.user === 'true' ? 'white' : 'black')};

  :hover,
  :focus {
    color: ${p => p.theme.colors.yellow};
  }
`;

export const EditIconStyled = styled(MdOutlineEdit)`
  transition: ${p => p.theme.transition.color};
  ${ListItemBlockButton}:hover & {
    color: ${p => p.theme.colors.white};
  }
`;

export const DeleteIconStyled = styled(ImBin)`
  transition: ${p => p.theme.transition.color};
  ${ListItemBlockButton}:hover & {
    color: ${p => p.theme.colors.white};
  }
`;
