import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Image = styled.img`
  width: 80px;
  height: 60px;
  border-radius: 4px;
  margin-right: 10px;

  ${({ theme }) => `
    border: 1px solid ${theme.palette.grey[200]};
  `}
`;

export const TypDarkBlue = styled(Typography).attrs((props) => ({
  size: props.size || 12,
}))`
  color: #1e2c4c;
  font-weight: bold;
  line-height: 1.33;
  font-size: ${(props) => `${props.size}px`};
  text-transform: uppercase;
`;

export const TypSteel = styled(TypDarkBlue)`
  color: #768095;
  font-weight: normal;
  line-height: 1;
  letter-spacing: 0.33px;

  padding: 0.2em 0px;
`;

export const TypGrey = styled(TypSteel)`
  text-transform: none;

  ${({ theme }) => `
    color: ${theme.palette.grey[500]};
  `}
`;

export const Separator = styled.div`
  height: 5px;
`;

export const Badge = styled.div`
  padding: 5px 16px;
  color: #768095;
  border-radius: 13px;

  ${({ theme }) => `
    background-color: ${theme.palette.secondary.main};
  `}
`;
