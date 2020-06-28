import styled from 'styled-components';
import { Typography as MuiTypography, Box as MuiBox } from '@material-ui/core';

export const Title = styled(MuiTypography)`
  font-size: 10px;
  font-weight: 500;
  opacity: 0.5;
  text-transform: uppercase;

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
    padding: ${theme.spacing(3, 0)};
  `}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => `
    padding: ${theme.spacing(0, 3)};
  `}
`;
