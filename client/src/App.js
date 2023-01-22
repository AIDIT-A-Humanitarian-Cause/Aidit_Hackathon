import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import IndividualDonar from "./home/IndividualDonar";
import IndividualStory from "./home/IndividualStory";

import DonorRegister from "./components/DonorRegister";
import DonorSignIn from "./components/DonorSignIn";
import InstitutionRegister from "./components/InstitutionRegister";
import InstitutionSignIn from "./components/InstitutionSignIn";
import Donate from "./home/Donate";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/join/institutionregister"
          element={<InstitutionRegister />}
        />
        <Route path="/join/institution/log" element={<InstitutionSignIn />} />
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
