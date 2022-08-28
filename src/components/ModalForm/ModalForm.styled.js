import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormBlock = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.theme.space[9]};
  margin-right: ${p => p.theme.space[9]};
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px;
  outline: orange;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.space[3]}px;
  :focus {
    border: ${p => p.theme.borders.bold};
  }
`;
