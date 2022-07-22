import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function WriteMiddle() {
  let navigate = useNavigate();
  return (
    <Container>
      <Link
        onClick={() => {
          navigate(`/`);
        }}
      >
        홈으로 가기
      </Link>
      <Link
        onClick={() => {
          navigate(`/write`);
        }}
      >
        글 쓰러 가기
      </Link>
    </Container>
  );
}

export default WriteMiddle;

const Container = styled.div`
  width: 600px;
  height: 400px;
  border-style: solid;
  border-color: white;
  margin: auto;
  color: white;

  text-align: center;
`;
const Link = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  padding: auto;
`;
