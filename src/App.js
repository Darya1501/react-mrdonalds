import React from 'react';
import { GlobalStyle } from './Сomponents/Style/GlobalStyle';
import { NavBar } from './Сomponents/NavBar/NavBar';
import { Menu } from './Сomponents/Menu/Menu';
import { ModalItem } from './Сomponents/Modal/ModalItem';
import { Order } from './Сomponents/Order/Order';
import { useOpenItem } from './Сomponents/Hooks/useOpenItem'
import { useOrders } from './Сomponents/Hooks/useOrders'


function App() {

  const openItem = useOpenItem(); 
  const orders = useOrders(); 

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} {...openItem}/>
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} /> }
    </>
  );
}

export default App;
