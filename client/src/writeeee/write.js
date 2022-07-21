import * as React from 'react';
import { useState } from 'react';
import WriteState from './writeState';
import { ExhibitionForm, ProposalForm, RecruitmentForm } from './writeForm';
// import { ExhibitionForm } from './writeForm/exhibitionForm';
// import { ProposalForm } from './writeForm/propsalForm';
// import { RecruitmentForm } from './writeForm/recruitmentForm';

import styled from 'styled-components';

function Write() {
  return (
    <Container>
      <WriteState />
      <RecruitmentForm />
    </Container>
  );
}
export default Write;
const Container = styled.div`
  max-width: 700px;
  margin: 2rem auto;
  color: white;
`;
