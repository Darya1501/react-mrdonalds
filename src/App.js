import React from 'react';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { GlobalStyle } from './Сomponents/Style/GlobalStyle';
import { NavBar } from './Сomponents/NavBar/NavBar';
import { Menu } from './Сomponents/Menu/Menu';
import { ModalItem } from './Сomponents/Modal/ModalItem';
import { Order } from './Сomponents/Order/Order';
import { useOpenItem } from './Сomponents/Hooks/useOpenItem';
import { useOrders } from './Сomponents/Hooks/useOrders';
import { useAuth } from './Сomponents/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyDHmB8W9O14hWrlJnUp1TsXrUFuIXGJIlY",
  authDomain: "mrdonalds-92a8b.firebaseapp.com",
  projectId: "mrdonalds-92a8b",
  storageBucket: "mrdonalds-92a8b.appspot.com",
  messagingSenderId: "508826956915",
  appId: "1:508826956915:web:2d8944700a38e2cd54e606",
  databaseURL: "https://mrdonalds-92a8b-default-rtdb.europe-west1.firebasedatabase.app"
};

initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(getAuth);

  const openItem = useOpenItem(); 
  const orders = useOrders(); 

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth } />
      <Order {...orders} {...openItem} {...auth } 
        firebaseDatabase={getDatabase} />
      <Menu {...openItem} />
      { openItem.openItem && <ModalItem {...openItem} {...orders} /> }
    </>
  );
}

export default App;
