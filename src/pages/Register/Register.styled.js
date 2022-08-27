import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const FormField = styled(TextField)`
  /* height: 400px; */
  /* margin-top: 20px; */
`;

export const SwitchFormLink = styled(Link)`
  font-family: 'Arial';
  transition: ${p => p.theme.transition.color};

  :hover,
  :focus {
    color: ${p => p.theme.colors.blue};
  }
`;
