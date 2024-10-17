import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './navbar.js';
import Home from './home.js'
import Form from './form.js';
import Login from './login.js';
import Signup from './signup.js';
import Logout from './logout.js';
import About from './about.js'
import Footer from './footer.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nutrition from './Nutrition.js';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Home />}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
