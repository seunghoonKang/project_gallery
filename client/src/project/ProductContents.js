import styled from 'styled-components';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Nick = styled.div`
  color: white;
  fontsize: 300px;
`;
const Container = styled.div`
  margin-left: 200px;
  margin-right: 200px;
`;

const Hr = styled.hr`
  color: white;
`;
const nickname = '프로젝트생산자 이게 나다';
const tag = ['c', 'c++', 'java'];
const title = '쇼핑몰 프로젝트';
const contents = '프로젝트는 ... 궁시렁';

function ProductContents() {
  return (
    <>
      <Container>
        <Nick>{nickname}</Nick>
        <Stack direction="row" spacing={1}>
          {tag.map((a, i) => {
            return (
              <Chip
                label={tag[i]}
                clickable
                component="a"
                href="/"
                style={{ backgroundColor: 'white' }}
              />
            );
          })}
        </Stack>
        <Hr />
        <h2 style={{ color: 'white' }}>{title}</h2>
        <Hr />
        <div
          style={{ color: 'white', borderStyle: 'solid', borderColor: 'white' }}
        >
          {contents}
        </div>
      </Container>
    </>
  );
}

export default ProductContents;
