import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormBlock = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 35px;
  padding: 10px;
  outline: orange;
  border: 1px solid orange;
  border-radius: 10px;
  :focus {
    border: 2px solid orange;
  }
`;
