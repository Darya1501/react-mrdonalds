import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 500px;
`;

const ModalBanner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${ ({img}) => img });
  background-size: cover;
  background-position: center;
`;

const Content = styled.section`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 200px)
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Pacifico', cursive;
`;

export const ModalItem = ({ openItem, setOpenItem }) => {

  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null)
    }
  }

  if (!openItem) return null;
  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <ModalBanner img={openItem.img} />
        <Content> 
          <HeaderContent>
            <h3>{openItem.name}</h3>
            <h3>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</h3>
          </HeaderContent>
          <ButtonCheckout>Добавить</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  )
}