import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Blank from "./components/Blank";
import Donate from "./components/Donate";

import Institution from "./components/Institution";
import DonorRegister from "./components/DonorRegister";
import DonorSignIn from "./components/DonorSignIn";
import InstitutionRegister from "./components/InstitutionRegister";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Blank />} />
        <Route path="/join/institution/register" element={<InstitutionRegister />} />

        <Route path="/join/institution/log" element={<Institution />} />
        <Route path="/join/donor/register" element={<DonorRegister/>} />
        <Route path="/join/donor/log" element={<DonorSignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </>
  );
}
export default App;
