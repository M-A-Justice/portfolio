import {
  useRef,
  useEffect,
  useState,
} from 'react';

import {
  ClickableNoseContainer,
  ClickableNose,
  NoseContainer,
  NoseImage,
} from '../../../styles/Saria.style';

const Nose = ({
  imgSrc,
  headRef,
  rotation,
  handleMouseDown,
  handleMouseUp,
}) => {
  const ref = useRef(null);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const { offsetWidth, offsetHeight } = headRef.current;

    console.log(offsetWidth, offsetHeight, offsetWidth / offsetHeight);

    setHeight(offsetHeight);
    setWidth(offsetWidth);
  }, [dimensions]);

  return (
    <NoseContainer width={width} height={height} rotation={rotation}>
      <NoseImage src={imgSrc} ref={ref} width={width} height={height} />
      <ClickableNoseContainer width={width} height={height}>
        <ClickableNose onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
      </ClickableNoseContainer>
    </NoseContainer>
  );
};

export default Nose;
