import styled from 'styled-components';
import MuiTextField from '@material-ui/core/TextField';

export const SearchField = styled(MuiTextField)`
  .MuiInputBase-root {
    color: #666666;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.71px;
    letter-spacing: 0.1px;
    background: #fff;
  }

  .MuiInputAdornment-root {
    background: #fff;

    ${({ theme }) => `
      color: ${theme.palette.text.primary};
    `}
  }

  input {
    background: #fff;

    ${({ theme }) => `
      padding: ${theme.spacing(1.22, 2)};
    `}
  }
`;
