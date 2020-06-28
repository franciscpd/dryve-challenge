import styled from 'styled-components';

export const Table = styled.div`
  & > div {
    border-radius: 4px;
    overflow: hidden;

    .MuiTableCell-head {
      font-size: 10px;
      font-weight: 500;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.47);
    }
  }
`;
