import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

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
