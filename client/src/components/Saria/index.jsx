import { useRef } from 'react';
// import {
//   Grid,
// } from '@mui/material';

import {
  Head,
  // Nose,
  Eyes,
  SariaContainer,
  Mouth,
  LeftEyebrow,
  RightEyebrow,
  // ColorPicker,
} from '../../styles/Saria.style';

import Nose from './Nose';

import face from '../../assets/saria-face.png';
import nose from '../../assets/saria-nose.png';
import eyes from '../../assets/saria-eyes.png';
import mouth from '../../assets/saria-mouth.png';
import lEyebrow from '../../assets/saria-l-eyebrow.png';
import rEyebrow from '../../assets/saria-r-eyebrow.png';

const Saria = () => {
  const headRef = useRef(null);

  return (
    <SariaContainer>
      <Eyes src={eyes} />
      <Mouth src={mouth} />
      <Head ref={headRef} src={face} />
      <Nose headRef={headRef} imgSrc={nose} />
      <LeftEyebrow src={lEyebrow} />
      <RightEyebrow src={rEyebrow} />
    </SariaContainer>
  );
};

export default Saria;
