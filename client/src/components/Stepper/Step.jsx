import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Typography,
} from '@mui/material';
import paw from '../../assets/paw-print.png';
import {
  PawPrint,
  PawRow,
  PawHelp,
} from '../../styles/Stepper.style';

const titles = [
  'Home',
  'About',
  'Projects',
  'Contact',
];

const Step = ({ index, currentPage, setPage }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)',
  });

  const handleClick = () => {
    setPage(index);
  };

  const handleMouseEnter = (e) => {
    if (!isTabletOrMobile && e.target.id !== currentPage) {
      setAnchorEl(e.currentTarget);
    }
  };

  const handleMouseLeave = (e) => {
    if (!isTabletOrMobile && e.target.id !== currentPage) {
      setAnchorEl(null);
    }
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <PawRow index={index}>
        <PawPrint
          id={index}
          currentPage={currentPage}
          key={`page${index}-print`}
          src={paw}
          alt="paw-print"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </PawRow>
      <PawHelp
        id="paw-hover-helper"
        open={open}
        anchorEl={anchorEl}
        sx={{
          pointerEvents: 'none',
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        onClose={handleMouseLeave}
      >
        <Typography>
          {titles[index]}
        </Typography>
      </PawHelp>
    </>
  );
};

export default Step;
