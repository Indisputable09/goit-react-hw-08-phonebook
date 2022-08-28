import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: ${p => p.theme.space[9]};
  margin-right: ${p => p.theme.space[9]};
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px;
  outline: ${p => p.theme.borders.none};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.md};

  :focus {
    border: ${p => p.theme.borders.normal};
  }
`;
