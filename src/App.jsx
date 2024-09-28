import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Basket from './pages/basket'
import { StoreProvider } from './context-end-reducer/StoreContext'
function App() {

  return (
    <>
      <StoreProvider >
        <Router basename="/e-commerce">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/basket' element={<Basket />} />
          </Routes>
        </Router>
      </StoreProvider>
    </>
  )
}

export default App
