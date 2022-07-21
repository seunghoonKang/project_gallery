import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from 'styled-components';
import { useState } from 'react';
import { ProposalForm } from './writeForm/propsalForm';
import { RecruitmentForm } from './writeForm/recruitmentForm';
import { ExhibitionForm } from './writeForm/exhibitionForm';

const stateWrite = [
  {
    label: '전시',
  },
  {
    label: '제안',
  },
  {
    label: '팀원모집',
  },
];
function WriteState() {
  const [writestate, setWriteState] = useState('전시');
  return (
    <Container>
      <Autocomplete
        style={{ color: 'white' }}
        disablePortal
        id="combo-box-demo"
        options={stateWrite}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={writestate}
            onChange={(label) => {
              console.log(label);
              setWriteState(label.currentTarget.value);
            }}
          />
        )}
      />
      {writestate === '전시' ? <ExhibitionForm /> : null}
      {writestate === '제안' ? <ProposalForm /> : null}
      {writestate === '팀원모집' ? <RecruitmentForm /> : null}
    </Container>
  );
}
export default WriteState;
const Container = styled.div`
  background-color: white;
`;
