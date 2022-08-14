import paw from '../../assets/paw-print.png';
import {
  PawPrint,
  PawRow,
} from '../../styles/Stepper.style';

const Step = ({ index, currentPage, setPage }) => {
  const handleClick = () => {
    setPage(index);
  };

  return (
    <PawRow index={index}>
      <PawPrint
        id={index}
        currentPage={currentPage}
        key={`page${index}-print`}
        src={paw}
        alt="paw-print"
        onClick={handleClick}
      />
    </PawRow>
  );
};

export default Step;
