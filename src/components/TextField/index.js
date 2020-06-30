import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export default styled(TextField)`
  label,
  .MuiIconButton-label {
    color: rgba(0, 0, 0, 0.6);
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #bababa;
  }

  .Mui-disabled {
    fieldset {
      border-color: #e1e1e1 !important;
    }
  }
`;
