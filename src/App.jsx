import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainPage';
import ProductPage from './pages/productPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
      </div>
  
    </>
  )
}

export default App
