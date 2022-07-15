import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../images/banner.png'


const MenuStyled = styled.main`
  margin-top: 80px;
`;

const MenuBanner = styled.div`
  background-image: url("${bannerImg}");
  background-size: cover;
  height: 210px;
  width: 100%;
`;

const SectionMenu = styled.section`
  padding: 30px
`;


export const Menu = () => (
  <MenuStyled>
    <MenuBanner/>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger}/>
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other}/>
    </SectionMenu>
  </MenuStyled>
);
