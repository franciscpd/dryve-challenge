import styled from 'styled-components';

export const Actions = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.12);
  border-bottom-left-radius: 4px;
  border-bottom-left-radius: 4px;

  ${({ theme }) => `
    padding: ${theme.spacing(3) - 1}px;
    background-color: ${theme.palette.secondary.main};
  `}
`;
