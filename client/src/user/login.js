import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  font-size: 10px;
  color: white;
  float: right;
  margin-right: 10px;
  cursor: pointer;
  text-decoration: underline;
`;

function Login() {
  const [user, setUser] = useState();
  const [inputEmail, seInputEmail] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const inputEmailHandler = (e) => {
    seInputEmail(e.currentTarget.value);
  };
  const inputPwdHandler = (e) => {
    setInputPwd(e.currentTarget.value);
    console.log(inputPwd);
  };

  // token 어디 넣을지
  function check(e) {
    if (!e) {
    }
  }

  const register = (e) => {
    window.location.href = '/register';
  };
  const findPwd = (e) => {
    //window.location.href="/findPwd"
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: inputEmail,
      password: inputPwd,
    };

    axios
      .post('http://localhost:8000/api/user/login', body)
      .then((res) => {
        alert('회원가입 정상적으로 되었습니다 ');
        const user = res.data;
        console.log(user.token);
        localStorage.getItem('token', user.token);
        window.location.href = '/';
      })
      .catch(function (err) {
        alert(`${err.response.data.reason}`);
      });
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '2rem auto',
        borderRadius: '10px',
        backgroundColor: '#3e383899',
        borderStyle: 'solid',
        borderColor: 'rgb(123, 120, 120)',
      }}
    >
      <Form
        onSubmit={onSubmitHandler}
        style={{ maxWidth: '600px', margin: '2rem auto' }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: 'white' }}>이메일</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={inputEmail}
            onChange={inputEmailHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: 'white' }}>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={inputPwd}
            onChange={inputPwdHandler}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: '#6b6a6d', borderColor: 'white' }}
        >
          Submit
        </Button>

        <Div onClick={register}>회원가입을 하시겠습니까?</Div>

        <Div onClick={findPwd}>비밀번호 찾기</Div>
      </Form>
    </div>
  );
}

export { Login };
