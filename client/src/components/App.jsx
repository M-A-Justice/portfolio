import { useState, cloneElement } from 'react';
import { useMediaQuery } from 'react-responsive';

import {
  AppBody,
  AppMain,
  AppSide,
} from '../styles/App.style';

import Stepper from './Stepper';
import Saria from './Saria';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  const [page, setPage] = useState(0);
  const [touchY, setTouchY] = useState(0);

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1224px)',
  });
  const isPortrait = useMediaQuery({
    query: '(orientation: portrait)',
  });

  const pages = [
    <Saria />,
    <About />,
    <Projects />,
    <Contact />,
  ];

  const handlePageChange = (e) => {
    const { deltaY } = e;

    if (deltaY > 0) {
      // down
      if (page < pages.length - 1) {
        setPage(page + 1);
      }
    } else if (page > 0) {
      // up
      setPage(page - 1);
    }
    // determine if a mobile event, wheel event, or pc drag event
  };

  const handleSwipe = (e) => {
    const touch = e.changedTouches[0];

    const { pageY } = touch;

    if (touchY === 0) {
      setTouchY(pageY);
    } else {
      if (touchY > pageY) {
        if (page < pages.length - 1) {
          setPage(page + 1);
        }
      } else if (page > 0) {
        setPage(page - 1);
      }
      setTouchY(0);
    }
  };

  const appType = () => {
    const dynamicProps = {
      container: true,
      direction: 'row',
    };

    if (isTabletOrMobile) {
      dynamicProps.onTouchStart = handleSwipe;
      dynamicProps.onTouchEnd = handleSwipe;
    } else {
      dynamicProps.onWheel = handlePageChange;
    }

    return (
      cloneElement(
        <AppBody />,
        dynamicProps,
        <>
          <AppMain container item xs={11} alignItems="center" justifyContent="center">
            {
              pages[page]
            }
          </AppMain>
          <AppSide container item xs={1} alignItems="center" justifyContent="center">
            <Stepper
              currentPage={page}
              pages={pages}
              setPage={setPage}
            />
          </AppSide>
        </>,
      )
    );
  };

  if (isTabletOrMobile) {
    if (isPortrait) {
      return (
        <AppBody container alignItems="center" justifyContent="center">
          <div>
            Please use landscape mode for this page.
          </div>
        </AppBody>
      );
    }
  }

  return (
    appType()
  );
};

export default App;
