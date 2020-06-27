import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, IconButton } from '@material-ui/core';

import logoDryve from '@assets/images/logoDryve.svg';

import * as S from './styles';

const AppBar = () => {
  return (
    <S.AppBar position="fixed">
      <Toolbar>
        <S.Box display="flex" alignItems="flex-end">
          <Link to="/">
            <S.Logo src={logoDryve} alt="Dryve" />
          </Link>
          <S.Typography>Backoffice</S.Typography>
        </S.Box>
        <IconButton aria-label="pesquisar" color="inherit">
          <S.SearchIcon />
        </IconButton>
        <IconButton aria-label="notificações" color="inherit">
          <S.NotificationsIcon />
        </IconButton>
      </Toolbar>
    </S.AppBar>
  );
};

export default AppBar;
