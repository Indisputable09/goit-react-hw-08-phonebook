import styled from 'styled-components';

export const Input = styled.input`
  max-width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.md};
  border: ${p => p.theme.borders.none};
  margin: ${p => p.theme.space[4]}px ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[3]}px;

  :focus {
    outline: ${p => p.theme.borders.normal};
  }
`;
