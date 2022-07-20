import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ExhReviw() {
  const [review, setReview] = useState('');
  const [nickName, setNickname] = useState('');
  const [myReviw, setMyReviw] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/api/comment').then((res) => {
      console.log(res);
    });
  }, []);

  const body = {
    comment: review,
    project: 'kdjfkasdj',
  };
  console.log(body);

  function onSubmitHandler(e) {
    e.preventDefault();
    return axios.post('http://localhost:8000/api/comment', body).then((res) => {
      console.log(res);
    });
  }
  return (
    <>
      <Container>
        {myReviw === true ? (
          <MyReviwCard>
            <div>쓴사람: {nickName}</div>
            <Contents>글내용</Contents>
          </MyReviwCard>
        ) : (
          <ReviwCard>
            <ProjectNickname>작성자: {nickName}</ProjectNickname>
            <Contents>글내용</Contents>
          </ReviwCard>
        )}

        <hr />
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>댓글쓰기</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={review}
              onChange={(e) => {
                setReview(e.currentTarget.value);
              }}
            />
            <Button>댓글쓰기</Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default ExhReviw;
const Button = styled.button`
  border-radius: 10%;
`;

const Container = styled.div`
  margin-right: 200px;
`;
const ReviwCard = styled.div`
  padding-top: 8px;
  padding-left: 10px;
  border-style: solid;
  min-height: 150px;
  border-radius: 10px;
  border-width: 1px;
`;
const Contents = styled.div`
  margin-top: 10px;
`;
const MyReviwCard = styled.div`
  padding-top: 8px;
  padding-left: 10px;
  border-style: solid;
  min-height: 150px;
  border-radius: 10px;
  border-width: 1px;
  background-color: rgb(205, 205, 187);
  color: black;
`;
const ProjectNickname = styled.div`
  diplay: float;
`;
