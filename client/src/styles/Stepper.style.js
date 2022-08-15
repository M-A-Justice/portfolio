import { styled } from '@mui/material/styles';
import {
  Popover,
} from '@mui/material';

// update to be 50% width and 10px gap at desktop/laptop sizes
export const StepGroup = styled('div')`
  width: 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PawRow = styled('div')`
  display: flex;
  justify-content: ${(props) => (props.index % 2 === 0 ? 'flex-start' : 'flex-end')}
`;

export const PawPrint = styled('img')`
  filter: ${(props) => (props.currentPage === props.id
    ? 'invert(35%) sepia(8%) saturate(1410%) hue-rotate(323deg) brightness(95%) contrast(85%);'
    : 'invert(95%) sepia(12%) saturate(476%) hue-rotate(38deg) brightness(113%) contrast(94%);')}
  height: 35px;
  ${(props) => (props.currentPage === props.id ? '' : 'cursor: pointer;')}
`;

export const PawHelp = styled(Popover)`
  padding: 15px;
`;
