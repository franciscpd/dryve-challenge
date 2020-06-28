import React from 'react';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <S.Container maxWidth={false}>
        <S.Divider />
        <S.Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <S.Copyright variant="body1">
            {new Date().getFullYear()} © Dryve Tecnologia Ltda.
          </S.Copyright>

          <S.Version>Versão {process.env.REACT_APP_VERSION}</S.Version>
        </S.Box>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
