import styled from 'styled-components';
import {
  Container as MuiContainer,
  Box as MuiBox,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from '@material-ui/core';

export const Container = styled(MuiContainer)`
  ${({ theme }) => `
    width: calc(100% - ${theme.spacing(15) + 1}px);
    margin-left: ${theme.spacing(11) + 1}px;
    margin-right: ${theme.spacing(10) + 1}px;
    margin-top: ${theme.spacing(2) + 1}px;;
  `}
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 'auto';
`;

export const Box = styled(MuiBox)`
  width: 100%;

  ${({ theme }) => `
    margin-top: ${theme.spacing(2) + 1}px;
    margin-bottom: ${theme.spacing(2) + 1}px;
  `}
`;

export const Divider = styled(MuiDivider)`
  ${({ theme }) => `
    background-color: ${theme.palette.grey[300]};
  `}
`;

export const Copyright = styled(MuiTypography)`
  font-size: 14px;

  ${({ theme }) => `
    color: ${theme.palette.grey[600]};
  `}
`;

export const Version = styled(MuiTypography)`
  font-size: 12px;

  ${({ theme }) => `
    color: ${theme.palette.grey[300]};
  `}
`;
