import styled from 'styled-components';
import Button from './Button';

export const ButtonStyled = styled(Button)`
  border-radius: ${p => p.theme.radii.sm};
  border: ${p => p.theme.borders.none};
  background-color: ${p => p.theme.colors.white};
  transition: ${p => p.theme.transition.all};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.orangered};
    transform: scale(0.9);
  }
`;

export const CloseButton = styled(ButtonStyled)`
  position: ${p => p.theme.position.absolute};
  top: 2%;
  right: 2%;
  padding: ${p => p.theme.space[0]}px;
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled(ButtonStyled)`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[6]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[9]};
  margin-left: ${p => p.theme.space[9]};

  border-radius: 10px;
  background-color: ${p => p.theme.colors.blueButton};
  border: ${p => p.theme.radii.none};
  transition: ${p => p.theme.transition.all};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.greyHover};
    transform: scale(1.1);
  }
`;

export const EditButton = styled(ButtonStyled)`
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-top: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[9]};
  margin-left: ${p => p.theme.space[9]};

  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[6]}px;

  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.lightGreen};
  transition: ${p => p.theme.transition.all};
`;

export const LogOutButton = styled(Button)`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[0]}px;
  border: ${p => p.theme.radii.none};
  background-color: inherit;
  transition: ${p => p.theme.transition.all};
  font-weight: ${p => p.theme.fontWeights.bold};

  :hover,
  :focus {
    color: ${p => p.theme.colors.yellow};
  }
`;

export const ListItemBlockButton = styled(ButtonStyled)`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;
  @media screen and (min-width: 900px) {
    width: ${p => p.theme.space[8]}px;
    height: ${p => p.theme.space[6]}px;
  }
`;
