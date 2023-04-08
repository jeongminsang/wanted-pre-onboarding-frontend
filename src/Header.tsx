import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 400px;
  padding: 10px 20px 10px 20px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
const Home = styled(Link)`
  border-radius: 10px;
  padding: 8px 15px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;
const SignUp = styled(Link)`
  display: ${() => localStorage.token === undefined ? "flex" : "none"};
  border-radius: 10px;
  padding: 8px 15px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;
const SignIn = styled(Link)`
  display: ${() => localStorage.token === undefined ? "flex" : "none"};
  border-radius: 10px;
  padding: 8px 15px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;
const Button = styled.button`
  display: ${() => localStorage.token === undefined ? "none" : "flex"};
  border: none;
  border-radius: 10px;
  padding: 8px 15px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  background-color: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;


function Header() {
  const navigate = useNavigate();
  const logouthandle = () => {
    window.localStorage.clear();
    alert("로그아웃 되었습니다.");
    navigate("../todo");
    window.location.reload();
  }
  return (
    <>
        <MainContainer>
            <Home to="./todo">홈</Home>
            <SignUp to="./signup">회원가입</SignUp>
            <SignIn to="./signin">로그인</SignIn>
            <Button onClick={logouthandle}>로그아웃</Button>
        </MainContainer>
      
    </>
  );
}

export default Header;