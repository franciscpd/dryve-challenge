import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '@shared/data/routes';

import NotFound from '@modules/NotFound';

import AppBar from '../AppBar';
import Drawer from '../Drawer';
import Content from '../Content';
import Footer from '../Footer';

import Root from './styles';

const Layout = () => {
  return (
    <Root>
      <AppBar />
      <Drawer />
      <Content>
        <Switch>
          {routes
            .filter((r) => r.component)
            .map((route) => (
              <Route
                exact
                path={route.path}
                key={route.path}
                component={route.component}
              />
            ))}
          <Route path="*" component={NotFound} />
        </Switch>
      </Content>
      <Footer />
    </Root>
  );
};

export default Layout;
