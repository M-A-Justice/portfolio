// import {
//   Grid,
// } from '@mui/material';

import {
  Head,
  Nose,
  Eyes,
  SariaContainer,
  Mouth,
  LeftEyebrow,
  RightEyebrow,
} from '../../styles/Saria.style';

import face from '../../assets/saria-face.png';
import nose from '../../assets/saria-nose.png';
import eyes from '../../assets/saria-eyes.png';
import mouth from '../../assets/saria-mouth.png';
import lEyebrow from '../../assets/saria-l-eyebrow.png';
import rEyebrow from '../../assets/saria-r-eyebrow.png';

const Saria = () => (
  <SariaContainer>
    <Eyes src={eyes} />
    <Mouth src={mouth} />
    <Head src={face} />
    <Nose src={nose} />
    <LeftEyebrow src={lEyebrow} />
    <RightEyebrow src={rEyebrow} />
  </SariaContainer>
);

export default Saria;
