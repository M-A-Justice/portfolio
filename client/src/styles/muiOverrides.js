import {
  createTheme,
} from '@mui/material/styles';

import ChewyWoff from '../assets/font/chewy-v18-latin-regular.woff';

const chewy = {
  fontFamily: 'Chewy',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `url(${ChewyWoff})`,
};

const theme = createTheme({
  typography: {
    fontFamily: 'Chewy',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [chewy],
      },
    },
  },
});

export default theme;
