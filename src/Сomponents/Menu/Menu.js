import React from 'react';
import styled from 'styled-components';
import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../../images/banner.png'


const MenuStyled = styled.main`
  margin-top: 80px;
  margin-left: 380px;
`;

const MenuBanner = styled.div`
  background-image: url("${bannerImg}");
  background-position: center;
  background-size: cover;
  height: 210px;
  width: 100%;
`;

const SectionMenu = styled.section`
  padding: 30px
`;


export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <MenuBanner/>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
    </SectionMenu>
  </MenuStyled>
);
