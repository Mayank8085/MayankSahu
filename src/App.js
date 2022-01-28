import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faDownload,
  faGlobe, 
  faLocationArrow,
  faPhoneAlt
  

} from "@fortawesome/free-solid-svg-icons";

import { faTwitter, faGithub, faLinkedin ,faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";


library.add(
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faDownload,
  faGlobe, 
  faLocationArrow,
  faPhoneAlt

  
 
  
);

//implenting routing for same page element

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </Router>
      
    </div>
  );
}
