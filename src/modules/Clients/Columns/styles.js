import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import MuiMoreVertIcon from '@material-ui/icons/MoreVert';

export const Default = styled(Typography).attrs((props) => ({
  size: props.size || 14,
}))`
  ${({ theme }) => `
    color: ${theme.palette.text.primary};
  `}

  font-weight: 500;
  line-height: 1.33;
  font-size: ${(props) => `${props.size}px`};
`;

export const MoreVertIcon = styled(MuiMoreVertIcon)`
  color: #ccc;
`;
