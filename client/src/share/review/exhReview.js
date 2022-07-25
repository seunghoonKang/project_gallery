import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { reviewApi } from '../../api/review/reviewApi';
import userApi from '../../api/user/userApi';

function ExhReviw({ exhibitionProject }) {
  const projectNickname = exhibitionProject.nickName;
  const [getReview, setGetRevies] = useState([]);
  const [reLoadReview, setReLoadReview] = useState(false);
  const [reviewDescription, setReviewDescription] = useState('');

  const [user, setUser] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    reviewApi.getReviewApi(projectReviewId).then((res) => {
      if (token) {
        userApi.homeNavApi(token).then((res) => {
          setUser(res.data.nickName);
        });
      }
      setGetRevies(res.data);
    });
  }, []);

  // 로그인 체크 그리고 유저 정보가지고오기
  function loginCheck() {
    if (token) {
      userApi.homeNavApi(token).then((res) => {
        setUser(res.data.nickName);
      });
    } else {
      alert('로그인 또는 회원가입을 해주세요');
      window.location.href = '/login';
    }
  }

  useEffect(() => {
    reviewApi.getReviewApi(projectReviewId).then((res) => {
      setGetRevies(res.data);
    });
  }, [reLoadReview]);
  console.log(getReview);
  console.log('리뷰우:', reLoadReview);

  // post 보낼때 보내는 id와 DATA
  const projectReviewId = {
    postId: exhibitionProject._id,
  };
  const commentData = {
    comment: reviewDescription,
  };
  console.log(commentData);
  //댓글 post날리는 부분
  function onSubmitHandler(e) {
    e.preventDefault();

    reviewApi.postReviewApi(commentData, projectReviewId).then((res) => {
      console.log(res);
      setReviewDescription('');
      setReLoadReview(true);
    });
  }

  // 댓글 delete
  function deleteReview() {
    return console.log();
  }

  return (
    <>
      <Container>
        {getReview.map((comment, i) => {
          if (projectNickname === getReview[i].nickName) {
            return (
              <MyReviwCard>
                <ProjectNickname>
                  👑작성자: {getReview[i].nickName}
                  {user === getReview[i].nickName ? (
                    <>
                      <MyDiv onClick={deleteReview}>삭제</MyDiv>
                      <MyDiv>수정</MyDiv>
                    </>
                  ) : null}
                </ProjectNickname>
                <MyContents>{getReview[i].comment}</MyContents>
              </MyReviwCard>
            );
          } else {
            return (
              <ReviwCard>
                <div>
                  <span>닉네임: {getReview[i].nickName}</span>
                  {user === getReview[i].nickName ? (
                    <>
                      <Div>삭제</Div> <Div>수정</Div>
                    </>
                  ) : null}
                </div>
                <Contents>{getReview[i].comment}</Contents>
              </ReviwCard>
            );
          }
        })}
        <hr />

        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>댓글쓰기</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={reviewDescription}
              onClick={loginCheck}
              onChange={(e) => {
                setReviewDescription(e.currentTarget.value);
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
  padding: 0.375rem 0.75rem;
`;

const Container = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  margin-left: -25px;
  margin-right: 375px;
`;
const ReviwCard = styled.div`
  padding-top: 8px;
  padding-left: 10px;
  border-style: solid;
  min-height: 150px;
  border-radius: 10px;
  border-width: 1px;
  margin-bottom: 20px;
`;
const Contents = styled.div`
  margin-top: 10px;
  margin-left: 20px;
`;
const MyContents = styled.div`
  margin-top: 20px;
  margin-left: 20px;
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
  margin-bottom: 20px;
`;
const ProjectNickname = styled.div`
  float: right;
  margin-right: 15px;
`;
const Div = styled.span`
  font-size: 10px;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: underline;
`;
const MyDiv = styled.span`
  font-size: 10px;
  color: black;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: underline;
`;
