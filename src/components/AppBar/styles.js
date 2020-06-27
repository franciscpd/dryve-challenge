import styled from 'styled-components';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiBox from '@material-ui/core/Box';
import MuiTypography from '@material-ui/core/Typography';
import MuiSearchIcon from '@material-ui/icons/Search';
import MuiNotificationsIcon from '@material-ui/icons/Notifications';

export const AppBar = styled(MuiAppBar)`
  ${({ theme }) => `
    background: #fff;
    box-shadow: 0 1px 0 0 #e0e0e0;
    width: calc(100% - ${theme.spacing(6) + 1}px);
    margin-left: ${theme.spacing(6) + 1}px;

    ${theme.breakpoints.up('sm')} {
      width: calc(100% - ${theme.spacing(8) + 1}px);
      margin-left: ${theme.spacing(8) + 1}px;
    }
  `}
`;

export const Logo = styled.img`
  width: 101px;
  height: 34px;
  object-fit: contain;
`;

export const Box = styled(MuiBox)`
  flex-grow: 1;
`;

export const Typography = styled(MuiTypography)`
  ${({ theme }) => `
    color: ${theme.palette.grey['500']};
    font-size: 10px;
    margin-bottom: 7px;
    margin-left: 7px;
    text-transform: uppercase;
  `}
`;

export const SearchIcon = styled(MuiSearchIcon)`
  ${({ theme }) => `
    color: ${theme.palette.grey['500']};
  `}
`;

export const NotificationsIcon = styled(MuiNotificationsIcon)`
  color: #b2d1ff;
`;
