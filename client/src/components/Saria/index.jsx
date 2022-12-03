import { useRef, useState } from 'react';
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
  const [nosePress, setNosePress] = useState(false);
  const [waiting, setWaiting] = useState(false);

  // const handleMouseDown = (e) => {
  //   console.log(e);
  //   setNosePress(true);
  // };

  // const handleMouseUp = () => {
  //   setNosePress(false);
  // };

  const noseInteract = (e) => {
    const { type } = e;

    if (type === 'mousedown' && !waiting) {
      setNosePress(true);
      setWaiting(true);
      setTimeout(() => {
        setWaiting(false);
      }, 4000);
    }
  };

  const rotation = 0;

  return (
    <SariaContainer>
      <Eyes rotation={rotation} src={eyes} />
      <Mouth nosePress={nosePress} rotation={rotation} src={mouth} />
      <Head rotation={rotation} ref={headRef} src={face} />
      <Nose
        rotation={rotation}
        headRef={headRef}
        imgSrc={nose}
        handleMouseDown={noseInteract}
        handleMouseUp={noseInteract}
      />
      <LeftEyebrow rotation={rotation} src={lEyebrow} />
      <RightEyebrow rotation={rotation} src={rEyebrow} />
    </SariaContainer>
  );
};

export default Saria;
