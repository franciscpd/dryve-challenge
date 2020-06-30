// @ts-nocheck
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import routes from '@shared/data/routes';
import userAvatar from '@assets/images/avatar.jpg';

import * as S from './styles';

const Drawler = () => {
  const location = useLocation();

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <S.Drawer variant="permanent" anchor="left">
      <S.List>
        <S.ListItem>
          <S.ListItemAvatar style={{ marginRight: '15px' }}>
            <S.BoxAvatar
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <S.Avatar src={userAvatar} alt="user avatar" />
            </S.BoxAvatar>
          </S.ListItemAvatar>
          <S.ListItemText
            primary="Francis Soares"
            primaryTypographyProps={{
              color: 'textPrimary',
              variant: 'body1',
            }}
            secondary={
              <S.BoxLogout display="flex">
                <PowerSettingsNewIcon fontSize="small" />
                <Typography>SAIR</Typography>
              </S.BoxLogout>
            }
          />
        </S.ListItem>
      </S.List>
      <S.MenuList>
        {routes
          .filter((r) => r.showSidebar)
          .map((route, key) => (
            <S.NavLink to={route.disabled ? '#' : route.path} key={key}>
              <S.MenuItem
                selected={isActiveRoute(route.path)}
                disabled={route.disabled}
              >
                <S.ListItemIcon>{route.icon}</S.ListItemIcon>
                <S.ListItemText primary={route.label} />
              </S.MenuItem>
            </S.NavLink>
          ))}
      </S.MenuList>
    </S.Drawer>
  );
};

export default Drawler;
