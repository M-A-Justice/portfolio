import { useMediaQuery } from 'react-responsive';
import {
  Grid,
  Typography,
} from '@mui/material';
import LayoutBody from '../../styles/TitleLayout.style';

const TitleLayout = ({ component: Component, title }) => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)',
  });

  return (
    <LayoutBody container direction="column">
      <Grid container item xs={2} justifyContent="center" alignItems="center">
        <Typography variant={isTabletOrMobile ? 'h4' : 'h3'}>
          {title}
        </Typography>
      </Grid>
      <Grid container item xs={10} justifyContent="center">
        <Component />
      </Grid>
    </LayoutBody>
  );
};

export default TitleLayout;
