import styled from 'styled-components';
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//url공유하는 코드
function urlShare() {
  const getUrl = window.location.href;
  navigator.clipboard.writeText(getUrl).then(() => {
    alert('링크를 복사했습니다');
  });
}

function ProductContents({ exhibitionProject, id }) {
  console.log(exhibitionProject);
  console.log(id);

  function projectShare() {
    navigator.clipboard.writeText(exhibitionProject[id].url).then(() => {
      alert('링크를 복사했습니다');
    });
  }
  return (
    <>
      <div style={{ color: 'white' }}>
        <Container>
          <Nick>{exhibitionProject[id].nickname}</Nick>
          <Stack direction="row" spacing={1}>
            {exhibitionProject[id].tags.map((tag, i) => {
              return (
                <Chip
                  label={tag}
                  clickable
                  component="a"
                  href="/"
                  style={{ backgroundColor: 'gray' }}
                />
              );
            })}
          </Stack>
          <Hr />
          <h2 style={{ display: 'inline-block' }}>
            {exhibitionProject[id].title}
          </h2>
          ;
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
            <div style={{ display: 'inline-block' }}>
              {exhibitionProject[id].url}
            </div>
            <ShareIcon
              onClick={projectShare}
              style={{
                fontSize: '17px',
                marginLeft: '20px',
                cursor: 'pointer',
              }}
            ></ShareIcon>
          </div>
          <div style={{ fontSize: '12px' }}>{exhibitionProject[id].time}</div>
          <Hr />
          <ContentsContainer>
            {exhibitionProject[id].contents}
          </ContentsContainer>
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
  min-width: 500;
  min-height: 500px;
  border-width: 1px;
`;
const ProjectName = styled.h2`
  display: inline-block;
`;

export default ProductContents;
