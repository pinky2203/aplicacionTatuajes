import { Routes, Route } from 'react-router-dom'
import PaginaInicio from './pages/PaginaInicio'
import Blog from './pages/Blog'
import Contacto from './pages/Contacto'
import Galeria from './pages/Galeria'
import Navbar from './layout/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/inicio' element={<PaginaInicio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/galeria' element={<Galeria />} />
      </Routes>
    </>
  )
}
//juan es puto
//juan se la come}


export default App
