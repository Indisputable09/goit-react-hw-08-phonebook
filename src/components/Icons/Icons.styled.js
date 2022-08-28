import styled from 'styled-components';
import { RiContactsBookLine } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import { ImBin } from 'react-icons/im';
import { AiOutlineUserAdd } from 'react-icons/ai';

export const PhoneBookIconStyled = styled(RiContactsBookLine)`
  transition: ${p => p.theme.transition.color};
  color: ${p => (p.user === 'true' ? 'white' : 'black')};

  :hover,
  :focus {
    color: ${p => p.theme.colors.yellow};
  }
`;

export const DeleteIconStyled = styled(ImBin)`
  :hover,
  :focus {
    color: ${p =>
      p.hover === 'true' ? p.theme.colors.white : p.theme.colors.black};
  }
`;

export const EditIconStyled = styled(MdOutlineEdit)`
  :hover,
  :focus {
    color: ${p =>
      p.hover === 'true' ? p.theme.colors.white : p.theme.colors.black};
  }
`;

export const AddContactIconStyled = styled(AiOutlineUserAdd)`
  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
  }
`;
