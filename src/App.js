import React from 'react';
import { GlobalStyle } from './Сomponents/GlobalStyle';
import { NavBar } from './Сomponents/NavBar';
import { Menu } from './Сomponents/Menu';
import { ModalItem } from './Сomponents/ModalItem';
import { Order } from './Сomponents/Order';
import { useOpenItem } from './Сomponents/Hooks/useOpenItem'
import { useOrders } from './Сomponents/Hooks/useOrders'


function App() {

  const openItem = useOpenItem(); 
  const orders = useOrders(); 

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} />
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} /> }
    </>
  );
}

export default App;
