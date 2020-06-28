import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getData } from '@shared/store/reducers/cars/actions';
import { Variation, Table, ListData, DonutChart } from '@components/Widgets';
import { variations, buyIntentions, chartData } from '@shared/data/home';

import { carData, priceData, statusData } from './Columns';

const columns = [
  carData('image', 'Dados do Veículo'),
  priceData('ad_selling_price', 'Valor'),
  statusData('status', 'Status'),
];

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {variations.map((variation, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Variation {...variation} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Table
              title="Últimas avaliações"
              columns={columns}
              data={data}
              options={{ sorting: false }}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <ListData
                  title="Top intenções de compra"
                  data={buyIntentions}
                />
              </Grid>
              <Grid item xs={12}>
                <DonutChart title="Preços - Dryve x KBB" data={chartData} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
