import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';

export const Button = styled(MuiButton)`
  font-weight: 500;
  text-transform: none;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.1px;

  ${({ theme }) => `
    color: ${theme.palette.text.primary};
  `}

  .MuiButton-endIcon {
    margin-left: 0px;
    color: #7f7f7f;
  }
`;

export const ButtonMore = styled(MuiButton)`
  font-weight: 500;
  text-transform: none;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.1px;

  ${({ theme }) => `
    color: ${theme.palette.primary.main};
  `}

  .MuiButton-endIcon {
    margin-left: 0px;
  }
`;
