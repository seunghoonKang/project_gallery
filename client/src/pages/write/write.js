import * as React from 'react';
import WriteState from '../../components/write/writeState';
import styled from 'styled-components';

function Write() {
  return (
    <Section>
      <Container>
        <WriteState />
      </Container>
    </Section>
  );
}
export default Write;
const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  color: white;
`;

const Section = styled.section`
  background-color: #27262b;
  height: 100vh;
`;
