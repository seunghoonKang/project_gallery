import styled from 'styled-components';
import * as React from 'react';

//url공유하는 코드

function RecruitmentContents({ exhibitionProject }) {
  return (
    <>
      <div style={{ color: 'white' }}>
        <Container>
          <Nick>{exhibitionProject.nickName}</Nick>
          <Hr />
          <h2 style={{ display: 'inline-block' }}>{exhibitionProject.title}</h2>

          <div>
            <div style={{ display: 'inline-block' }}>
              {exhibitionProject.url}
            </div>
          </div>
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
  min-height: 200px;
  border-width: 1px;
`;

export default RecruitmentContents;
