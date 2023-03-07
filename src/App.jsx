import React from 'react'
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
    <ItemListContainer saludo="Bienvenida"/>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}

export default App
