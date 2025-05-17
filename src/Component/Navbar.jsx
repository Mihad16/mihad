import React from 'react';
import logo from "../assets/Untitled_logo_1_free-file.jpg";


function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="text-xl flex justify-between p-">
      <img src={logo} alt="Logo" className="h-12 w-auto" /> 
     
      </div>
    </div>
  );
}

export default Navbar;
