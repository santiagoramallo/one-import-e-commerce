import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRoutes>
      <NavBar/>
        <Routes>
          <Routes exact path="/" element={<Welcome />} />
          <Routes exact path="/catalogue" element={<ItemListContainer />} />
          <Routes 
          exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRoutes>
    </ChakraProvider>
  );
}

export default App;
