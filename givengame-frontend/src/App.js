import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './Components/Navbar';
import RolePage from './Pages/RolePage';
import DynamicSignup from "./Pages/SignupPages/DynamicSignup";
import CoachSignup from './Pages/SignupPages/CoachSignup';
import ParentSignup from './Pages/SignupPages/ParentSignup';
import SponsorSignup from './Pages/SignupPages/SponsorSignup';
import Home from './Pages/Home';
import WhyGG from './Pages/WhyGG';
import Gamers from './Pages/Gamers';
import Guides from './Pages/Guides';
import Givers from './Pages/Givers';
import AboutUs from './Pages/AboutUs';
import ThankYou from './Pages/ThankYou';

import { SignedIn, SignOutButton, useUser } from '@clerk/clerk-react';
import Profile from './Pages/Profile';

function App() {


  return (
    <Router>
      
      
      <Navbar />

      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/whyg&g" element={<WhyGG />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/gamers" element={<Gamers />} />
            <Route path="/givers" element={<Givers />} />
            <Route path="/role-page" element={<RolePage/>} />
            <Route path="/signup/:role" element={<DynamicSignup />} />
            {/* <Route path="/signup/parent" element={<ParentSignup />} />
            <Route path="/signup/sponsor" element={<SponsorSignup />} /> */}
            <Route path="profile" element={<Profile />} />
          </Routes>
        
       
      </div>

    </Router>
      
  );
}


export default App;
