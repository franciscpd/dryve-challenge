import styled from 'styled-components';
import MuiTabs from '@material-ui/core/Tabs';

export const Tabs = styled(MuiTabs)`
  .MuiTab-fullWidth {
    border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  }

  .MuiTab-textColorPrimary {
    color: rgba(0, 0, 0, 0.38);
  }

  .MuiTab-wrapper {
    font-size: 14px;
    font-weight: 500;
  }

  .Mui-selected {
    color: #6200ee;
  }

  .MuiTabs-indicator {
    background: #6200ee;
    position: absolute;
    bottom: 0;
  }
`;
