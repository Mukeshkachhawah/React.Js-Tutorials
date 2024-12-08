import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Home from './component/Home';
import Skills from './component/Skills';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
