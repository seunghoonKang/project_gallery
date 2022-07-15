import styled from 'styled-components';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const nickname = '프로젝트생산자 ';
const tag = ['c', 'c++', 'java'];
const projectName = '쇼핑몰 프로젝트';
const url = 'http:url올거임';
const time = '처음올린시간';
const contents = '프로젝트는 ... 궁시렁';
//url공유하는 코드
function urlShare() {
  const getUrl = window.location.href;
  navigator.clipboard.writeText(getUrl).then(() => {
    alert('링크를 복사했습니다');
  });
}

function projectShare() {
  navigator.clipboard.writeText(url).then(() => {
    alert('링크를 복사했습니다');
  });
}

function ProductContents() {
  return (
    <>
      <div style={{ color: 'white' }}>
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
          <h2 style={{ display: 'inline-block' }}>{projectName}</h2>
          <h4
            onClick={urlShare}
            style={{
              display: 'inline-block',
              marginLeft: '20px',
            }}
          >
            <ShareIcon style={{ marginBottom: '10px' }}></ShareIcon>
            <FavoriteBorderIcon
              style={{ marginLeft: '20px', marginBottom: '10px' }}
            ></FavoriteBorderIcon>
          </h4>
          <div>
            <div style={{ display: 'inline-block' }}>{url}</div>
            <ShareIcon
              onClick={projectShare}
              style={{
                fontSize: '17px',
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            ></ShareIcon>
          </div>
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
  margin-top: 50px;
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
const ProjectName = styled.h2`
  display: inline-block;
`;

export default ProductContents;
