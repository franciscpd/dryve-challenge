import React, { useState } from 'react';
import { Grid, Button as MuiButton } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';

import TextField from '@components/TextField';

import states from '@shared/data/states';

const ClientForm = () => {
  const [cep, handleCep] = useState('');

  return (
    <Grid container>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth autoFocus label="Nome" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Sobrenome" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="E-mail" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Telefone" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <MuiButton
              color="primary"
              size="large"
              style={{ height: '100%', textTransform: 'none' }}
              startIcon={<AddIcon />}
            >
              adicionar outro
            </MuiButton>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CEP"
              variant="outlined"
              onChange={(e) => handleCep(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={12}>
            <TextField
              fullWidth
              disabled={!cep}
              label="Endereço"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              disabled={!cep}
              fullWidth
              label="Número"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              disabled={!cep}
              label="Complemento"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              disabled={!cep}
              label="Bairro"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              disabled={!cep}
              fullWidth
              label="Número"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              id="uf"
              disabled={!cep}
              options={states}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField {...params} label="Estado" variant="outlined" />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ClientForm;
