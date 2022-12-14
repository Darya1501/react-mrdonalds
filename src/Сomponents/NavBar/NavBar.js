import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../images/logo.svg';
import signImg from '../../images/sign.svg';
import { Context } from '../Functions/context';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  font-family: Roboto;
  font-size: 16px;
  color: #fff;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 20px;
`;

export const NavBar = () => {
  const { auth: {authentication, logIn, logOut} } = useContext(Context);

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="Лого"/>
        <H1>MrDonald's</H1>
      </Logo>
      {
        authentication ?
        <User>
          <p>
            <img src={signImg} alt={authentication.displayName}/><br/>
            <span>{authentication.displayName}</span>
          </p>
          <LogOut onClick={logOut}>выйти</LogOut>
        </User> : 
        <LoginButton onClick={logIn}>
          <img src={signImg} alt="Войти"/>
          <p>войти</p>
        </LoginButton>
      }
    </NavBarStyled>
  )
};
