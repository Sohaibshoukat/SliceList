import { useState } from 'react'
import './App.css'
import AdminDashboard from './Pages/AdminDashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Redirect from './Pages/Redirect'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'
import ForgotPassword2 from './Pages/ForgotPassword2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Redirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/updatePassword" element={<ForgotPassword2 />} />
          <Route path="/admin-dashboard/*" element={<AdminDashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
