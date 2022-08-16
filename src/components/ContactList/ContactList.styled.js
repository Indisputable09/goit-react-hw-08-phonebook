import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-template-rows: auto;
  gap: 20px;
  margin: 0;
  padding: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;
