import styled from 'styled-components';
import {
  Container as ContainerMui,
  ContainerProps,
} from '@mui/material';

const Wrapper = styled(ContainerMui)`
  padding-top: 50px;
`;

function Container({ children, ...other }: ContainerProps) {
  return (
    <Wrapper fixed {...other}>
      {children}
    </Wrapper>
  );
}

export default Container;
