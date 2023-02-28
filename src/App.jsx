import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import CartWidget from './components/CartWidget'

function App() {
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}

const App = () => {
  return <div>
    <NavBar/>
    <CartWidget/>
    <ItemListContainer saludo="Bienvenida"/>
  </div>;
};

export default App
