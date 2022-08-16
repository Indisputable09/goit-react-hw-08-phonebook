import styled from 'styled-components';

export const Section = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: 700;
  width: 800px;
  margin-left: auto;
  margin-right: auto;

  border-radius: 5%;

  min-height: 100vh;
  text-align: center;
  background-image: linear-gradient(#45aef5, #fae441 70%);
`;

export const Title = styled.h1`
  font-size: 46px;
  padding-top: 20px;
`;

export const CenteredLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
