import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./components/About";
import IndividualDonar from "./home/IndividualDonar";
import IndividualStory from "./home/IndividualStory";

import DonorRegister from "./components/DonorRegister";
import DonorSignIn from "./components/DonorSignIn";
import InstitutionRegister from "./components/InstitutionRegister";
import InstitutionSignIn from "./components/InstitutionSignIn";
import Donate from "./components/Donate";
import DonationPage from "./home/DonationPage";
import MyDonation from "./components/myDonations";
function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/join/institution/register"
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
        <Route path="/createDonation" element={<DonationPage />} />
        <Route path="/myDonation" element={<MyDonation/>}/>
      </Routes>
    </>
  );
}
export default App;
