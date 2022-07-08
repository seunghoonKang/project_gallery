import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeNav = () => {
  const navs = ['Exhibition', 'Proposal', 'Recruitment'];
  const navName = ['전시', '제안', '채용'];
  const [login, setLogin] = useState('로그인');
  const [loginState, setLoginState] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (login === '로그인') {
      navigate('/login');

      //<Link to={'/login'}></Link>;
    }
    // 1. 토큰 여부 확인, 로그인 한 사람 누군지 확인.
    // 2. db에서 로그인 한 사람의 닉네임을 보여주도록
    // 3. setLogin(`${닉네임}님 반갑습니다.`) ?
  };

  return (
    <NavContainer>
      <Link to={'/'}>
        <LogoName>Gallery</LogoName>
      </Link>
    
      <Navigations>
        {navs.map((nav, index) => {
          return (
            <ul key={`${nav}-${index}`}>
              <li>
                <Link to={nav}>{navName[index]}</Link>
              </li>
            </ul>
          );
        })}
      </Navigations>
      <LoginNav onClick={handleLogin}>{login}</LoginNav>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: sticky;
  top: 0px;
  color: #ccc;
  width: 100vw;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const LogoName = styled.div`
  position: relative;
  float: left;
  font-weight: bolder;
  margin-top: 22px;
  margin-right: 70px;
  padding: auto;
  text-decoration: none;
  color: #ccc;
`;

const Navigations = styled.div`
  

  & a {
    text-decoration: none;
    color: #ccc;

    :hover {
      cursor: pointer;
      color: #35b2aa;
      border-bottom: #35b2aa 1px solid;
      transition: 0.3s ease-in-out;
    }
  }

  & ul,
  li {
    margin-top: 11px;
    margin-left: 2rem;
    float: left;
    list-style: none;
  }
`;

const LoginNav = styled.div`
  display: relative;
  float: right;
  margin-top: 22px;
  margin-left: 50px;
  padding-left: 50px;
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
`;

export default HomeNav;
