import { styled } from '@mui/material/styles';
import { css, keyframes } from '@mui/system';
// import Canvas from '../components/Canvas';

const openMouth = keyframes`
  0% {
    top: 30%;
  }
  40% {
    top: 36%;
  }
  100% {
    top: 30%;
  }
`;

const root = styled('img')`
  position: absolute;
  top: 30%;
  left: 30%;
  height: 50%;
  width: 33%;
  transform: rotate(${(props) => (props.rotation ? props.rotation : 0)}deg);
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
  z-index: 99;
  transform: rotate(${(props) => (props.rotation ? props.rotation : 0)}deg);
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
  animation: ${(props) => (props.nosePress ? css`4s linear ${openMouth}` : 'none')};
`;

export const LeftEyebrow = styled(root)`
`;

export const RightEyebrow = styled(root)`
`;

export const SariaContainer = styled('div')`
`;
