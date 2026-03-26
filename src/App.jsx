
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import './App.css'
import Projects from './Components/Projects.jsx'
import Skills  from './Components/Skills.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import NavBar from './Components/NavBar.jsx'
import Home from './Components/Home.jsx'
import Footer from './Components/Footer.jsx'


function App() {


  return (
    <>
    <BrowserRouter>
    <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}  ></Route>
      <Route path='/skills' element={<Skills/>}  ></Route>
      <Route path='/projects' element={<Projects/>}  ></Route>
      <Route path='/about' element={<About/>}  ></Route>
      <Route path='/contact' element={<Contact/>}></Route>

     </Routes>
     <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
