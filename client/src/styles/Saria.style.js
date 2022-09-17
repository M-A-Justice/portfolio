import { styled } from '@mui/material/styles';
// import Canvas from '../components/Canvas';

const root = styled('img')`
  position: absolute;
  top: 30%;
  left: 30%;
  height: 50%;
  width: 33%;
`;

export const Head = styled(root)`
`;

export const Nose = styled(root)`

`;

export const NoseContainer = styled('div')`
  display: grid;
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  top: 30%;
  left: 30%;
`;

export const NoseImage = styled('img')`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  grid-column: 1;
  grid-row: 1;
`;

export const ClickableNoseContainer = styled('div')`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  grid-column: 1;
  grid-row: 1;
`;

export const ClickableNose = styled('button')`
  position: absolute;
  height: 15%;
  width: 17%;
  top: 70%;
  left: 45%;
  border-radius: 55%;
  z-index: 99;
  cursor: pointer;
  border: none;
  background-color: rgb(0, 0, 0, 0);
`;

export const Eyes = styled(root)`
`;

export const Mouth = styled(root)`
`;

export const LeftEyebrow = styled(root)`
`;

export const RightEyebrow = styled(root)`
`;

export const SariaContainer = styled('div')`
`;
