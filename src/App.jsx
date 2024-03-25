import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './Components/Home'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Books from './Components/Books'

function App() {


  return (
    <div className='lg:w-[1170px] mx-auto'>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>

    </div>
  )
}

export default App
