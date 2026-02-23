
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import './App.css'
import Navbar from './Components/Navbar'
import ProtectedRoute from './Components/ProtectedRoute'



function App() {
  return (
      <div className='app'>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path='/auth' element={<Auth />}/>
          <Route
            path='/checkout'
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
  )
}

export default App
