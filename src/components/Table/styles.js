import styled, { css } from 'styled-components';

export const Table = styled.div.attrs((props) => ({
  selection: props.selection || false,
}))`
  & > div {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: none;

    .MuiTableCell-head {
      font-size: 10px;
      font-weight: 500;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.47);
    }

    .MuiTableCell-head,
    .MuiTableCell-body {
      ${({ theme }) => `
        padding: ${theme.spacing(1, 1)};
      `}
    }

    ${(props) =>
      props.selection &&
      css`
        .MuiTableCell-paddingNone {
          width: 10px !important;

          .MuiCheckbox-root {
            color: #9e9e9e;
          }
        }
      `}

    .MuiTableRow-footer {
      .MuiTablePagination-toolbar {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        ${({ theme }) => `
          padding: ${theme.spacing(0, 0, 0, 2)};
        `}

        .MuiTablePagination-spacer {
          flex: none;
        }

        .MuiTablePagination-selectRoot {
          font-size: 14px;
          font-weight: 500;

          ${({ theme }) => `
            margin: ${theme.spacing(0, 0.3)};
            color: ${theme.palette.text.primary};
          `}

          .MuiTablePagination-selectIcon {
            color: #7f7f7f;
          }
        }
      }

      .MuiTypography-body2 {
        display: flex;
        font-size: 11px;

        ${({ theme }) => `
          color: ${theme.palette.grey[500]};
        `}
      }

      div[class^='MTablePaginationInner-root-'] {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;

        .MuiTypography-caption {
          display: none;
        }

        .MuiIconButton-root {
          color: #7f7f7f;

          :disabled {
            color: rgba(0, 0, 0, 0.26);
          }
        }

        > span:first-child,
        > span:last-child {
          display: none;
        }
      }
    }
  }
`;
