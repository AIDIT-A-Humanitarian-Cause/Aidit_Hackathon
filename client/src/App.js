import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Blank from "./components/Blank";
import IndividualDonar from "./home/IndividualDonar";
import IndividualStory from "./home/IndividualStory";
import Donate from "./home/Donate";
import Institution from "./components/Institution";
import DonorRegister from "./components/DonorRegister";
import DonorSignIn from "./components/DonorSignIn";
import InstitutionRegister from "./components/InstitutionRegister";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/join/institution/register"
          element={<InstitutionRegister />}
        />
        <Route path="/join/institution/log" element={<Institution />} />
        <Route path="/join/donor/register" element={<DonorRegister />} />
        <Route path="/join/donor/log" element={<DonorSignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/about" element={<About />} />
        <Route path="/individualDonar" element={<IndividualDonar />} />
        <Route path="/story" element={<IndividualStory />} />
      </Routes>
    </>
  );
}
export default App;
