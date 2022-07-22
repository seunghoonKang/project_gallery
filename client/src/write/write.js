import * as React from 'react';
import WriteState from './writeState';
import styled from 'styled-components';

function Write() {
  return (
    <Container>
      <WriteState />
    </Container>
  );
}
export default Write;
const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  color: white;
`;
