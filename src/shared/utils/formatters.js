export const percent = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
