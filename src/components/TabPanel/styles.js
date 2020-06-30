import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => `
    padding: ${theme.spacing(3, 5)};
    margin-top: ${theme.spacing(1)}px;
  `}
`;
