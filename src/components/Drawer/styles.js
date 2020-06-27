import styled from 'styled-components';
import {
  MenuList as MuiMenuList,
  MenuItem as MuiMenuItem,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  ListItem as MuiListItem,
  ListItemAvatar as MuiListItemAvatar,
  List as MuiList,
  Drawer as MuiDrawer,
  Avatar as MuiAvatar,
  Box as MuiBox,
} from '@material-ui/core';
import { NavLink as RouterNavLink } from 'react-router-dom';

const transitionLeaving = (theme) => `
  transition: ${theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  })};
`;

const transitionEntering = (theme) => `
  transition: ${theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })};
`;

const highlightMenu = (theme) => `
  background: ${theme.palette.secondary.main};
  color: ${theme.palette.primary.main} !important;

  .MuiListItemText-root {
    color: ${theme.palette.primary.main};
  }

  #wrapper-icon-traingulation {
    opacity: 1;
  }

  #icon-traingulation {
    fill: ${theme.palette.primary.main};
  }
`;

export const Drawer = styled(MuiDrawer)`
  ${({ theme }) => `
    box-shadow: 1px 0 0 0 #e0e0e0;
    overflow-x: 'hidden';
    flex-shrink: 0;
    white-space: 'nowrap';
    width: ${theme.spacing(8) + 1}px;

    ${transitionLeaving(theme)}

    ${theme.breakpoints.up('sm')} {
      width: ${theme.spacing(10) + 1}px;
    }

    .MuiDrawer-paper {
      padding: 45px 15px 0px 15px;
      overflow-x: 'hidden';
      width: ${theme.spacing(8) + 1}px;

      ${transitionLeaving(theme)}

      ${theme.breakpoints.up('sm')} {
        width: ${theme.spacing(10) + 1}px;
      }

      &:hover {
        width: 240px;
        ${transitionEntering(theme)}
      }
    }

    &:hover {
      width: 240px;
      ${transitionEntering(theme)}
    }
  `}
`;

export const MenuList = styled(MuiMenuList)`
  ${({ theme }) => `
    margin-top: ${theme.spacing(1) + 1}px;
  `}
`;

export const MenuItem = styled(MuiMenuItem)`
  border-radius: 4px;

  .MuiListItemText-primary {
    font-weight: 700;
  }

  ${({ theme }) => `
    &:hover {
      ${highlightMenu(theme)}
    }
  `}
`;

export const ListItemIcon = styled(MuiListItemIcon)`
  color: inherit;
  min-width: 46px;
`;

export const ListItemText = styled(MuiListItemText)`
  letter-spacing: 0.1px;
  word-wrap: normal;
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  font-size: 14px;

  ${({ theme }) => `
    color: ${theme.palette.grey['400']};

    .MuiListItemText-root {
      color: ${theme.palette.text.primary};
    }

    .Mui-selected {
      ${highlightMenu(theme)}

      &:hover {
        ${highlightMenu(theme)}
      }
    }
  `}
`;

export const BoxAvatar = styled(MuiBox)`
  border-radius: 50%;

  ${({ theme }) => `
    width: ${theme.spacing(6) + 1}px;
    height: ${theme.spacing(6) + 1}px;
    border: 2px solid ${theme.palette.primary.main};
  `}
`;

export const Avatar = styled(MuiAvatar)`
  ${({ theme }) => `
    width: ${theme.spacing(5) + 1}px;
    height: ${theme.spacing(5) + 1}px;
  `}
`;

export const ListItem = styled(MuiListItem)`
  padding: 0px;

  .MuiTypography-body1 {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;

    ${({ theme }) => `
      color: ${theme.palette.text.primary};
    `}
  }
`;

export const List = styled(MuiList)`
  overflow-x: hidden;
  width: 100%;
`;

export const BoxLogout = styled(MuiBox)`
  margin-top: 5px;
  cursor: pointer;

  .MuiTypography-body1 {
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 1.5px;
    ${({ theme }) => `
      color: ${theme.palette.grey['400']};
    `}
  }

  .MuiSvgIcon-root {
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }

  ${({ theme }) => `
    color: ${theme.palette.grey['400']};
  `}
`;

export const ListItemAvatar = styled(MuiListItemAvatar)`
  margin-right: 15px;
`;
