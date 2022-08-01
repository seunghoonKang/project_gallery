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

function ProposalContents({ exhibitionProject }) {
  const arr = Object.entries(exhibitionProject);

  return (
    <>
      <div style={{ color: 'white' }}>
        <Container>
          <h2 style={{ display: 'inline-block' }}>{exhibitionProject.title}</h2>
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
          <Stack direction="row" spacing={1}>
            {arr.length > 0
              ? exhibitionProject.tags.map((tag, i) => {
                  return (
                    <Chip
                      label={tag}
                      clickable
                      component="a"
                      href="/"
                      style={{ backgroundColor: 'gray' }}
                    />
                  );
                })
              : null}
          </Stack>

          <Hr />
          <Nick>{exhibitionProject.nickName}</Nick>

          <div style={{ fontSize: '12px' }}>
            {new Date(exhibitionProject.createdAt).toLocaleDateString()}
          </div>
          <Hr />
          <ContentsContainer>{exhibitionProject.description}</ContentsContainer>
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

  min-width: 800px;
  min-height: 400px;
  border-width: 1px;
`;
const ProjectName = styled.h2`
  display: inline-block;
`;

export { ProposalContents };
