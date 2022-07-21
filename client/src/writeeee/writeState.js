import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styled from 'styled-components';
import { useState } from 'react';

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
  const [Writestate, WriteSetState] = useState('전시');
  return (
    <Container>
      <Autocomplete
        style={{ color: 'white' }}
        disablePortal
        id="combo-box-demo"
        options={stateWrite}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={Writestate} />}
      />
    </Container>
  );
}
export default WriteState;
const Container = styled.div`
  color: white;
`;
