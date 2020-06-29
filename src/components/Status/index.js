import styled from 'styled-components';

import { hexToRgba } from '@shared/utils';

export default styled.div.attrs((props) => ({
  color: props.color || '#0065ff',
}))`
  padding: 5px 16px;
  color: ${(props) => props.color};
  border-radius: 13px;
  background-color: ${(props) => hexToRgba(props.color, 0.1)};
  text-align: center;
  max-width: 80px;
`;
