import styled from 'styled-components';
import {
  ListItemText as MuiListItemText,
  ListItem as MuiListItem,
  ListItemAvatar as MuiListItemAvatar,
  List as MuiList,
  Avatar as MuiAvatar,
} from '@material-ui/core';

export const ListItemText = styled(MuiListItemText)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .MuiTypography-root {
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;

    ${({ theme }) => `
      color: ${theme.palette.text.primary};
    `}
  }
`;

export const Avatar = styled(MuiAvatar)`
  ${({ theme }) => `
    width: ${theme.spacing(4) + 4}px;
    height: ${theme.spacing(4) + 4}px;
  `}
`;

export const ListItem = styled(MuiListItem)`
  padding: 0px;

  ${({ theme }) => `
    padding: ${theme.spacing(2) - 2}px 0px;
    border-bottom: 1px solid ${theme.palette.grey[200]};
  `}
`;

export const List = styled(MuiList)`
  overflow-x: hidden;
  width: 100%;

  ${({ theme }) => `
    padding: ${theme.spacing(0, 3)};
  `}

  li:last-child {
    padding-bottom: 0px;
    border-bottom: none;
  }
`;

export const ListItemAvatar = styled(MuiListItemAvatar)`
  min-width: 0px;
  margin-right: 15px;
`;
