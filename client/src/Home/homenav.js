import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const HomeNav =() => {
  const navs = ["Exhibition", "Proposal", "Recruitment"];
  const [login, setLogin] = useState("강승훈님, 반갑습니다");
  const handleLogin = () => {
    // 1. 토큰 여부 확인, 로그인 한 사람 누군지 확인. 
    // 2. db에서 로그인 한 사람의 닉네임을 보여주도록
    // 3. setLogin(`${닉네임}님 반갑습니다.`) ?
  }
  return(
    <NavContainer>
      <Link to = {"/"}>
        <LogoName>Gallery</LogoName>
      </Link>
      <Navigations>
          {navs.map((nav,index)=>{
            return(
              <ul 
                key= {`${nav}-${index}`}
                >
                <li>
                  <Link to ={nav}>{nav}</Link>
                </li>
              </ul>
            )
          })}
      </Navigations>
      <LoginNav onClick={handleLogin}>{login}</LoginNav>
    </NavContainer>
  )
};

const NavContainer = styled.nav`
  position: fixed;
  color: #ccc;
  width: 100vw;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgba(0, 0, 0, 0.6);

`

const LogoName = styled.div`
  position: relative;
  float: left;
  font-weight: bolder;
  margin-top: 22px;
  margin-right: 70px;
  padding: auto;
  text-decoration: none;
  color: #ccc;
`

const Navigations = styled.div`
  margin-top: 22px;

  & a {
    text-decoration: none;
    color: #ccc;
  }

  & ul,li {
    margin-left: 2rem;
    float: left;
    list-style: none;

    :hover {
    cursor: pointer;
    }
  }

`

const LoginNav = styled.div`
  display: relative;
  float: right;
  font-size: 1rem;
`

export default HomeNav;

