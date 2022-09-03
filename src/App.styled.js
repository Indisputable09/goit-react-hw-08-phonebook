import styled from 'styled-components';

export const Section = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: ${p => p.theme.fontWeights.bold};
  padding-top: 50px;
  margin-left: ${p => p.theme.space[9]};
  margin-right: ${p => p.theme.space[9]};

  min-height: 100vh;
  text-align: center;
  background-color: ${p => p.theme.colors.yellow};
`;

export const Title = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  padding-top: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 480px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const CenteredLoader = styled.div`
  position: ${p => p.theme.position.fixed};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
