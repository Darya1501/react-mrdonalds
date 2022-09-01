import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import bannerImg from '../../images/banner.png';
import { useFetch } from '../Hooks/useFetch';

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


export const Menu = () => {

  const res = useFetch();
  const dbMenu = res.response;

  return (
    <MenuStyled>
      <MenuBanner/>
      {res.response ? 
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
          </SectionMenu>
          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} />
          </SectionMenu>
        </> : res.error ? <div>Произошла ошибка, скоро исправим</div> : <div>Загрузка...</div>
      }
    </MenuStyled>
  )
};
