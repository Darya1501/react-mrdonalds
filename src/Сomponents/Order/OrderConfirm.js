import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { projection } from '../Functions/secondaryFunction';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { ref, set } from 'firebase/database';
import { Context } from '../Functions/context';


const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;


const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  toppings: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name)],
  choices: ['choice', item => item ? item : 'no choices']
}

const sendOrder = (database, orders, authentication )  => {
  const newOrder = orders.map(projection(rulesData));
  const orderID = Date.now();
  set(ref(database, 'orders/' + orderID), {
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  });
}

export const OrderConfirm = () => {

  const { 
    auth: {authentication},
    orders: {orders, setOrders},
    orderConfirm: {setOpenOrderConfirm},
    firebaseDatabase
  } = useContext(Context);


  const database = firebaseDatabase();
  const total = orders.reduce((result, order) =>
    totalPriceItems(order) + result, 0);

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Осталось только подтвердить ваш заказ</Text>
        <Total>
          <span>Итого:</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout onClick={() => {
          sendOrder(database, orders, authentication);
          setOrders([]);
          setOpenOrderConfirm(false);
        }}>Подтвердить</ButtonCheckout>
      </Modal>
    </Overlay>
  )

}