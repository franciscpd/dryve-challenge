import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Box, InputAdornment } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import { getData } from '@shared/store/reducers/clients/actions';
import Button from '@components/Button';
import Filter from '@components/Filter';
import SearchField from '@components/SearchField';
import Table from '@components/Table';

import { defaultData, statusData, moreActions } from './Columns';

const columns = [
  defaultData('name', 'Nome', {}, '100px'),
  statusData('status', 'Status', {}, '30px'),
  defaultData('phone', 'Telefone', {}, '100px'),
  defaultData('email', 'E-mail', {}, '100px'),
  moreActions('more', '', {}, '5px'),
];

const Clients = () => {
  const [search, handleSearch] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.clients);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} lg={6} xl={5}>
            <Box display="flex" alignItems="center">
              <Grid container spacing={1}>
                <Grid item xs={4} sm={2}>
                  <Filter fullWidth>Filtrar</Filter>
                </Grid>
                <Grid item xs={8} sm={10}>
                  <SearchField
                    name="search"
                    variant="outlined"
                    placeholder="Buscar por nome..."
                    fullWidth
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} xl={7}>
            <Grid container justify="flex-end">
              <Grid item xs={4} sm={3} xl={2}>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => history.push('/clients/new')}
                >
                  Adicionar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Table
          columns={columns}
          data={data.filter((d) =>
            d.name.toLowerCase().includes(search.toLowerCase())
          )}
          isLoading={isLoading}
          options={{
            tableLayout: 'fixed',
            paging: true,
            selection: true,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Clients;
