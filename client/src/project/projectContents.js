import styled from 'styled-components';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const nickname = '프로젝트생산자 ';
const tag = ['c', 'c++', 'java'];
const projectName = '쇼핑몰 프로젝트';
const url = 'http:url올거임';
const time = '처음올린시간';
const contents = '프로젝트는 ... 궁시렁';

function ProductContents() {
  return (
    <>
      <div style={{ backgroundColor: '#27262b', color: 'white' }}>
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
                  style={{ backgroundColor: 'gray' }}
                />
              );
            })}
          </Stack>
          <Hr />
          <h2>{projectName}</h2>
          <div>{url}</div>
          <div style={{ fontSize: '12px' }}>{time}</div>
          <Hr />
          <ContentsContainer>{contents}</ContentsContainer>
        </Container>
      </div>
    </>
  );
}
const Nick = styled.h5`
  color: white;
`;
const Container = styled.div`
  margin-left: 200px;
  margin-right: 200px;
  padding-bottom: 200px;
`;

const Hr = styled.hr`
  color: white;
`;
const ContentsContainer = styled.div`
  color: white;
  border-style: solid;
  min-width: 800px;
  min-height: 800px;
  border-width: 1px;
`;

export default ProductContents;
