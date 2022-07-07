import { useState } from "react";
import styled from "styled-components";



const HomeNav =() => {
  const navs = ["전시", "제안", "모집"];
  const [currNav, setCurrNav] = useState("");
  return(
    <NavContainer>
      <LogoName value={currNav}>Gallery</LogoName>
      <Navigations>
          {navs.map((nav,index)=>{
            return(
              <ul 
                key= {`${nav}-${index}`}
                value = {currNav}
                onClick = {(e)=>{
                  setCurrNav(e.target.value);
                  console.log(e)
                }}
                >
                <li>
                  {nav}
                </li>
              </ul>
            )
          })}
      </Navigations>
      <LoginNav value={currNav}>로그인</LoginNav>
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
`

const Navigations = styled.div`
  margin-top: 22px;
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

