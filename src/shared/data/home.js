import React from 'react';
import { DriveEta, AttachMoney, ImportantDevices } from '@material-ui/icons';

import logoHyundai from '@assets/marcas/hyundai.png';
import logoJeep from '@assets/marcas/jeep.png';
import logoChevrolet from '@assets/marcas/chevrolet.png';
import logoVolks from '@assets/marcas/volks.png';
import logoNissan from '@assets/marcas/nissan.png';

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

export const buyIntentions = [
  {
    name: 'HB20',
    logo: logoHyundai,
    total: 197,
  },
  {
    name: 'Onix',
    logo: logoChevrolet,
    total: 183,
  },
  {
    name: 'Renegade',
    logo: logoJeep,
    total: 125,
  },
  {
    name: 'T-Cross',
    logo: logoVolks,
    total: 109,
  },
  {
    name: 'Kicks',
    logo: logoNissan,
    total: 86,
  },
];

export const chartData = [
  ['Dryve x KBB', 'Em porcentual'],
  ['Na média', 60],
  ['Acima da média', 25],
  ['Abaixo da média', 15],
];
