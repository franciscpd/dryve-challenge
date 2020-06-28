import styled from 'styled-components';
import MuiContainer from '@material-ui/core/Container';

export const Container = styled(MuiContainer)`
  ${({ theme }) => `
    margin-top: ${theme.spacing(12) + 1}px;
    margin-bottom: ${theme.spacing(2) + 1}px;

    width: calc(100% - ${theme.spacing(15) + 1}px);
    margin-left: ${theme.spacing(10) + 1}px;
    margin-right: ${theme.spacing(10) + 1}px;

    min-height: calc(100vh - ${theme.spacing(26) + 1}px);
  `}
`;
