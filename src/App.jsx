import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
  <ShoppingCartProvider>
      <BrowserRouter>
      <NavBar/>
        <Route>
          <Routes exact path="/" element={<Welcome />} />
          <Routes exact path="/catalogue" element={<ItemListContainer />} />
          <Routes 
          exact path="/category/:category" element={<ItemListContainer />} />
          <Routes exact path="/item/:id" element={<ItemDetailContainer />} />
          <Routes exact path="/cart" element={<Cart />} />
        </Route>
      </BrowserRouter>
    </ShoppingCartProvider>
      </ChakraProvider>
  );
}

export default App;
