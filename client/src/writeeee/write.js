import * as React from 'react';
import { useState } from 'react';
import WriteState from './writeState';
import { ExhibitionForm } from './writeForm/exhibitionForm';
import styled from 'styled-components';

function Write() {
  return (
    <Container>
      <WriteState />
      <ExhibitionForm />
    </Container>
  );
}
export default Write;
const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  color: white;
`;
