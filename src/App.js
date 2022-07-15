import React from 'react';
import { GlobalStyle } from './Сomponents/GlobalStyle';
import { NavBar } from './Сomponents/NavBar';
import { Menu } from './Сomponents/Menu';
import { ModalItem } from './Сomponents/ModalItem';


function App() {

  const [openItem, setOpenItem] = React.useState(null)

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
