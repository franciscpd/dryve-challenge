import styled from 'styled-components';
import {
  Typography as MuiTypography,
  Box as MuiBox,
  Paper as MuiPaper,
} from '@material-ui/core';

export const Paper = styled(MuiPaper)`
  ${({ theme }) => `
    padding: ${theme.spacing(0, 0, 0, 0)};
  `}
`;

export const Title = styled(MuiTypography)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;

  ${({ theme }) => `
    color: ${theme.palette.text.primary};
  `}
`;

export const Header = styled(MuiBox)`
  ${({ theme }) => `
    padding: ${theme.spacing(0, 3)};
  `}
`;

export const Container = styled(MuiBox)`
  ${({ theme }) => `
    padding: ${theme.spacing(3, 0, 1, 0)};
  `}

  .MuiPaper-root {
    box-shadow: none;
    border-radius: 0px;

    .MuiTableCell-head,
    .MuiTableCell-body {
      ${({ theme }) => `
        padding: ${theme.spacing(2, 3)};
      `}
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => `
    padding: ${theme.spacing(0, 3)};
  `}
`;
