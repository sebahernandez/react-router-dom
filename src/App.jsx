
import {Routes, Route} from 'react-router-dom'
import Navigation from "./components/Navigation"
import Home from "./views/home/Home"
import Contact from "./views/contact/Contact"
import Footer from "./components/Footer"

function App() {
 
  return (
    <>
      <Navigation />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contact />} />
        </Routes>
         </main>
       <Footer />
    </>
  )
}

export default App
