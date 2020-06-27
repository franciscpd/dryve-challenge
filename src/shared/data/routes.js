import React from 'react';
import { Home, Person, DriveEta, AccountBalance } from '@material-ui/icons';
import { SvgIcon } from '@material-ui/core';

import { ReactComponent as TriangulationIcon } from '@assets/icons/triangulationIcon.svg';

const Triangulation = () => <SvgIcon component={TriangulationIcon} />;

export default [
  {
    path: '/',
    icon: <Home />,
    label: 'Início',
    component: null,
  },
  {
    path: '/clients',
    icon: <Person />,
    label: 'Clientes',
    component: null,
  },
  {
    path: '/drives',
    icon: <DriveEta />,
    label: 'Veículos',
    component: null,
  },
  {
    path: '/triangulation',
    icon: <Triangulation />,
    label: 'Triangulação',
    component: null,
  },
  {
    path: '/balance',
    icon: <AccountBalance />,
    disabled: true,
    label: 'Financeiro',
    component: null,
  },
];
