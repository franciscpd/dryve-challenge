import React from 'react';
import Box from '@material-ui/core/Box';

import { currency } from '@shared/utils/formatters';

import * as S from './styles';

export const carData = (field, title, options) => ({
  ...options,
  title,
  field,
  width: '50%',
  render: (rowData) => (
    <Box display="flex" alignItems="center">
      <S.Image src={rowData.image} alt={rowData.name} />
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <S.TypDarkBlue>{`${rowData.brand_name} ${rowData.model_name}`}</S.TypDarkBlue>
        <S.Separator />
        <S.TypSteel size={10}>
          {rowData.vehicle_uuid.split('-').shift()}
        </S.TypSteel>
        <S.TypSteel size={10}>
          {`${rowData.model_year} - ${rowData.fuel_type}`}
        </S.TypSteel>
        <S.TypSteel size={10}>
          {`${
            rowData.transmission_type
          } - ${rowData.mileage.toLocaleString()} KM`}
        </S.TypSteel>
      </Box>
    </Box>
  ),
});

export const priceData = (field, title, options) => ({
  ...options,
  title,
  field,
  width: '20%',
  render: (rowData) => (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <S.TypSteel size={10}>Anúncio</S.TypSteel>
      <S.TypDarkBlue>{currency.format(rowData.ad_selling_price)}</S.TypDarkBlue>
      <S.Separator />
      <S.TypSteel size={10}>Mínimo aceito</S.TypSteel>
      <S.TypGrey size={12}>
        {currency.format(rowData.ad_selling_price)}
      </S.TypGrey>
    </Box>
  ),
});

export const statusData = (field, title, options) => ({
  ...options,
  title,
  field,
  width: '25%',
  render: () => (
    <Box display="flex" justifyContent="flex-start">
      <Box display="flex" flexDirection="column" alignItems="center">
        <S.Badge>Aguardando precificação</S.Badge>
        <S.Separator />
        <S.Separator />
        <S.TypGrey size={11}>18/04/2020 às 14:35</S.TypGrey>
      </Box>
    </Box>
  ),
});
