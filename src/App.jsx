
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Parc from './pages/Parc'
import SingleCar from './pages/SingleCar'

function App() {


  return (
<Routes>
<Route element={<Layout />} >

<Route path="/" element={<Home />} />
<Route path="/home" element={<Home/>} />
<Route path="/contact" element={<Contact />} />
<Route path="/vehicules" element={<Parc />} />
<Route path="/vehicules/:id" element={<SingleCar />} />

</Route>

</Routes>
  )
}

export default App
