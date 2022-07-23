import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function WriteMiddle() {
  let navigate = useNavigate();
  return (
    <Section>
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
    </Section>
  );
}

export default WriteMiddle;

const Container = styled.div`
  width: 600px;
  height: 400px;
  border-style: solid;
  border-color: white;
  color: white;
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Link = styled.div`
  cursor: pointer;
  margin-bottom: 50px;
  :hover {
    color: rgb(42, 180, 200);
    transition: 0.3s ease-in-out;
  }
`;

const Section = styled.section`
  margin-top: 15vh;
  background-color: #27262b;
  height: 100vh;
`;
