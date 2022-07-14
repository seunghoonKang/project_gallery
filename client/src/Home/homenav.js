import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeNav = () => {
  const NavItem = {
    Recruitment: 'Recruitment',
    Proposal: 'Proposal',
    Exhibition: 'Exhibition',
  };
  const NavItemKo = {
    Recruitment: '채용',
    Proposal: '제안',
    Exhibition: '전시',
  };
  const navItems = Object.values(NavItem);
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState(false);
  const [nickName, setNickname] = useState('00님');
  const token = localStorage.getItem('token');

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.clear();
    setLoginState(false);
  };

  useEffect(() => {
    if (token) {
      setLoginState(true);
      console.log(token);
      async function checkNickname() {
        const url = 'http://localhost:8000/api/user/info';
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const nickName = response.data.nickName;
        setNickname(nickName);
      }
      checkNickname();
    }
  }, []);

  return (
    <NavContainer>
      <Link to={'/'}>
        <LogoName>Gallery</LogoName>
      </Link>
      <Navigations>
        {navItems.map((item, index) => {
          return (
            <ul key={`${item}-${index}`}>
              <li>
                <Link to={item}>{NavItemKo[item]}</Link>
              </li>
            </ul>
          );
        })}
      </Navigations>
      {loginState ? (
        <div>
          <LogoutNav onClick={handleLogout}>로그아웃</LogoutNav>
          <LogoutNav>{nickName} 님, 반갑습니다.</LogoutNav>
        </div>
      ) : (
        <LoginNav onClick={handleLogin}>로그인</LoginNav>
      )}
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

const LogoutNav = styled.div`
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
