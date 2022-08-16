import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 35px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 10px;

  :focus {
    border: 1px solid orange;
  }
`;
