import { useState } from 'react'
import './App.css'
import AdminDashboard from './Pages/AdminDashboard'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Redirect from './Pages/Redirect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Redirect/>} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
