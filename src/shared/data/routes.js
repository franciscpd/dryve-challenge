import React from 'react';
import {
  Home as HomeIcon,
  Person,
  DriveEta,
  AccountBalanceWallet,
} from '@material-ui/icons';
import { SvgIcon } from '@material-ui/core';

import { ReactComponent as TriangulationIcon } from '@assets/icons/triangulationIcon.svg';

import Home from '@modules/Home';
import Clients from '@modules/Clients';
import Cars from '@modules/Cars';

const Triangulation = () => <SvgIcon component={TriangulationIcon} />;

export default [
  {
    path: '/',
    icon: <HomeIcon />,
    label: 'Início',
    component: Home,
  },
  {
    path: '/clients',
    icon: <Person />,
    label: 'Clientes',
    component: Clients,
  },
  {
    path: '/cars',
    icon: <DriveEta />,
    label: 'Veículos',
    component: Cars,
  },
  {
    path: '/triangulation',
    icon: <Triangulation />,
    label: 'Triangulação',
    component: null,
  },
  {
    path: '/balance',
    icon: <AccountBalanceWallet />,
    disabled: true,
    label: 'Financeiro',
    component: null,
  },
];
