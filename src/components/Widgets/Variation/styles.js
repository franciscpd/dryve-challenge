import styled from 'styled-components';
import { Typography as MuiTypography, Box as MuiBox } from '@material-ui/core';

export const CircleIcon = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root {
    font-size: 32px;
  }

  ${({ theme }) => `
    width: ${theme.spacing(10) + 1}px;
    height: ${theme.spacing(10) + 1}px;

    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.primary.main};
  `}
`;

export const Label = styled(MuiTypography)`
  font-size: 10px;
  font-weight: 500;
  opacity: 0.5;
  text-transform: uppercase;

  ${({ theme }) => `
    color: ${theme.palette.text.primary};
  `}
`;

export const Value = styled(Label)`
  font-size: 36px;
  font-weight: 400;
  opacity: 1;
`;

export const Container = styled(MuiBox)`
  ${({ theme }) => `
    padding: ${theme.spacing(2, 3)};
  `}
`;

export const PercentDown = styled(MuiBox)`
  color: #fc4a40;
  font-size: 12px;
  letter-spacing: 0.4px;

  .MuiSvgIcon-root {
    font-size: 22px;
  }

  .MuiTypography-body1 {
    font-size: 11px;
    opacity: 0.5;
    margin-left: 5px;

    ${({ theme }) => `
      color: ${theme.palette.text.primary};
    `}
  }
`;

export const PercentUp = styled(PercentDown)`
  color: #6200ee;
`;
