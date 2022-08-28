import styled from 'styled-components';

export const Overlay = styled.div`
  position: ${p => p.theme.position.fixed};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.modalBg};
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: ${p => p.theme.position.relative};
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  width: 600px;
  height: 300px;
`;
