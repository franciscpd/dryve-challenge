import styled, { css } from 'styled-components';
import MuiButton from '@material-ui/core/Button';

export const Button = styled(MuiButton)`
  ${(props) => {
    if (props.variant === 'contained') {
      return css`
        background: #6200ee;
        color: #fff;

        &:hover {
          background: #6200ee;
        }
      `;
    }

    return css`
      color: #6200ee;
    `;
  }}

  font-size: 14px;
  padding: 5px 13px;
  font-weight: 500;
`;
