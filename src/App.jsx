import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
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
    </ShoppingCartProvider>
  );
}

export default App;
