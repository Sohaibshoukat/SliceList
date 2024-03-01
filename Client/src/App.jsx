import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Logics/scrolltop'
import Nav from './Components/Nav'
import Home from './Pages/Portfolio/Home'
import Footer from './Components/Footer'
import HowTo from './Pages/Portfolio/HowTo'
import HowItWork from './Pages/Portfolio/HowItWork'
import Blog from './Pages/Portfolio/Blog'
import Auth from './Pages/Portfolio/Auth'
import Pricing from './Pages/Portfolio/Pricing'

function App() {

  return (
    <>
      <BrowserRouter >
      <ScrollToTop/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/how-it-work" element={<HowItWork />}></Route>
          <Route path="/how-to" element={<HowTo />}></Route>
          <Route path="/our-blogs" element={<Blog />}></Route>
          <Route path="/pricing-plans" element={<Pricing />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
