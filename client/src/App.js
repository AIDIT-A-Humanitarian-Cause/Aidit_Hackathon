import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Blank from "./components/Blank";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import IndividualDonar from "./home/IndividualDonar";
import IndividualStory from "./home/IndividualStory";

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
        <Route path="/individualDonar" element={<IndividualDonar />} />
        <Route path="/story" element={<IndividualStory />} />
      </Routes>
    </>
  );
}
export default App;
