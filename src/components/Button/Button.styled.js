import styled from 'styled-components';
import Button from './Button';

export const ButtonStyled = styled(Button)`
  padding: 15px 50px;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  transition: all 250ms linear;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.orangered};
    transform: scale(0.9);
  }
`;

export const CloseButton = styled(ButtonStyled)`
  position: absolute;
  top: 2%;
  right: 2%;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddButton = styled(ButtonStyled)`
  padding: 10px 20px;
  width: 200px;
  height: 60px;
  font-weight: 700;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 10px;
  /* background-color: ${p => p.theme.colors.blue}; */
  background-color: #45aef5;
  border: none;
  transition: all 250ms linear;

  :hover,
  :focus {
    background-color: #969287;
    transform: scale(1.1);
  }
`;

export const EditButton = styled(ButtonStyled)`
  font-weight: 700;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  padding: 20px 70px;

  border-radius: 10px;
  background-color: #45f5e6;
  transition: all 250ms linear;
`;

export const LogOutButton = styled(Button)`
  padding: 16px 0;
  /* border-radius: 5px; */
  border: none;
  background-color: inherit;
  transition: all 250ms linear;
  font-weight: 700;

  :hover,
  :focus {
    color: ${p => p.theme.colors.yellow};
  }
`;

export const ListItemBlockButton = styled(ButtonStyled)`
  padding: 10px 20px;
  width: 100px;
  height: 40px;
  @media screen and (min-width: 900px) {
    width: 200px;
    height: 60px;
  }
`;
