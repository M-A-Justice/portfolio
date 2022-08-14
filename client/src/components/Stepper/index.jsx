import { StepGroup } from '../../styles/Stepper.style';
import Step from './Step';

const Stepper = ({ pages, currentPage, setPage }) => (
  <StepGroup>
    {
      pages.map((page, index) => (
        <Step
          page={page}
          currentPage={currentPage}
          index={index}
          setPage={setPage}
        />
      ))
    }
  </StepGroup>
);

export default Stepper;
