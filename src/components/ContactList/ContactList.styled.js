import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(280px, 1fr));
  grid-template-rows: auto;
  gap: ${p => p.theme.space[4]}px;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[4]}px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  justify-content: space-between;
`;
