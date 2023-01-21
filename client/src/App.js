import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Blank from "./components/Blank";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </>
  );
}
export default App;
