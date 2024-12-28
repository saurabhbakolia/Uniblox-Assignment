import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router'
import { CartProvider } from './contexts/CartContext.tsx'
import { Toaster } from './components/ui/toaster.tsx'

const config = {
  theme: {}
};

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <CartProvider>
        <BrowserRouter>
          <Toaster />
          <App />
        </BrowserRouter>
      </CartProvider>
    </ChakraProvider>
  </StrictMode>,
)
