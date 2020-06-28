import React from 'react';
import { DriveEta, AttachMoney, ImportantDevices } from '@material-ui/icons';

export const variations = [
  {
    label: 'Avaliações hoje',
    value: '29',
    icon: <DriveEta />,
    type: 'up',
    percent: 0.36,
    captionPercent: 'desde ontem',
  },
  {
    label: 'Carros publicados',
    value: '397',
    icon: <ImportantDevices />,
    type: 'up',
    percent: 0.04,
    captionPercent: 'este mês',
  },
  {
    label: 'Ticket médio do estoque',
    value: 'R$ 42.567',
    icon: <AttachMoney />,
    type: 'down',
    percent: 0.06,
    captionPercent: 'este mês',
  },
];
