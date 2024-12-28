import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import CartPage from './pages/CartPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
