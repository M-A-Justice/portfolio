import { useMediaQuery } from 'react-responsive';
import {
  Grid,
} from '@mui/material';
import {
  LayoutBody,
  PageTitle,
} from '../../styles/TitleLayout.style';

const TitleLayout = ({ component: Component, title }) => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)',
  });

  return (
    <LayoutBody container direction="column">
      <Grid container item xs={2} justifyContent="center" alignItems="center">
        <PageTitle variant={isTabletOrMobile ? 'h4' : 'h3'}>
          {title}
        </PageTitle>
      </Grid>
      <Grid container item xs={10} justifyContent="center">
        <Component />
      </Grid>
    </LayoutBody>
  );
};

export default TitleLayout;
