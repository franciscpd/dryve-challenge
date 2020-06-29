import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';

export const Button = styled(MuiButton)`
  color: #6200ee;
  background-color: #fff;
  font-size: 14px;
  padding: 5px 13px;
  font-weight: 500;

  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[200]};

    .MuiButton-startIcon {
      color: ${theme.palette.primary.main};
      margin-right: 6px;
    }
  `}
`;
