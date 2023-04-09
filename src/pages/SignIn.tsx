import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { signin } from "../utils/auth";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  background: #ebf5fc;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #c6d9e7;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    text-shadow:  2px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  width: 300px;
  font-size: 16px;
  box-shadow: -2px -2px 5px rgba(255, 255, 255, 1), 3px 3px 5px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    border: none;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: ${(props) => props.disabled === false ? "black" : "grey"};
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

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [valid, setValid] = useState(true);

  const loginhandle = () => {
    signin(email, password)
      .then((res) => {
        const { data } = res;
        localStorage.setItem("token", "Bearer " + data.access_token);
        alert("로그인이 완료되었습니다.");
        navigate("../todo");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  const handleEmailChange = (e : React.SyntheticEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setValid(!validateEmail(e.currentTarget.value) || !validatePassword(password));
  };
  const handlePasswordChange = (e : React.SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
    setValid(!validateEmail(email) || !validatePassword(e.currentTarget.value));
  };

  const validateEmail = ( email : string ) => {
    return (/@/).test(email);
  };

  const validatePassword = ( password : string ) => {
    return password.length >= 8;
  };
  return (
    <>
      <MainContainer>
        <FormContainer>
          <Title>로그인</Title>
          <Input 
            data-testid="email-input" 
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}/>
          <Input 
            data-testid="password-input" 
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}/>
          <Button type="button" data-testid="signin-button" onClick={loginhandle} disabled={valid}>로그인</Button>
        </FormContainer>
      </MainContainer>
      
    </>
  );
}

export default SignIn;