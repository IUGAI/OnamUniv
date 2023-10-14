import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './Pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
       <Route index element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
