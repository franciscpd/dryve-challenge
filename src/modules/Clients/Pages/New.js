// @ts-nocheck
import React, { useState } from 'react';
import { Grid, Paper, Typography, Tab } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Tabs from '@components/Tabs';
import Button from '@components/Button';
import TabPanel from '@components/TabPanel';

import ClientForm from './Forms/ClientForm';

import * as S from './styles';

const NewClient = () => {
  const [activeTab, setActiveTab] = useState(0);

  const history = useHistory();

  const handleChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          style={{ fontWeight: 500 }}
          color="textPrimary"
        >
          Adicionar cliente
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper
          variant="outlined"
          style={{ minHeight: 500, display: 'flex', flexDirection: 'column' }}
        >
          <Tabs
            value={activeTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="Dados do cliente" />
            <Tab label="Dados do veículo" />
            <Tab label="Itenção de compra" />
          </Tabs>
          <TabPanel activeTab={activeTab} index={0} style={{ flexGrow: 1 }}>
            <ClientForm />
          </TabPanel>
          <TabPanel activeTab={activeTab} index={1} style={{ flexGrow: 1 }} />
          <TabPanel activeTab={activeTab} index={2} style={{ flexGrow: 1 }} />
          <S.Actions>
            <Button variant="contained" style={{ width: 150, height: 36 }}>
              Salvar
            </Button>
            <Button
              style={{ width: 150, marginLeft: 15, height: 36 }}
              onClick={() => history.push('/clients')}
            >
              Cancelar
            </Button>
          </S.Actions>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewClient;
