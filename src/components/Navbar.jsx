import React from 'react';
import { PiTranslateFill } from "react-icons/pi";
const Navbar = () => {
    return (
        <nav className="">
            <div className="flex flex-wrap space-x-1">
                
                <div className="text-black w-full sm:w-1/4 md:w-1/5 flex items-center justify-center space-x-2 pl-4 pr-4 pt-4">
                        <a href="#section1" className="text-black font-bold hover:text-gray-300">PDFSCRIBE</a>
                          <PiTranslateFill size={24} />
                 </div>

        

                {/* Links Column */}
                <div className="w-full sm:w-1/2 md:w-3/5 flex justify-center space-x-4 pt-4">
                    <a href="#home" className="text-black hover:text-gray-300 text-lg">Home</a>
                    <a href="#features" className="text-black hover:text-gray-300 text-lg">Features</a>
                    <a href="#testimonials" className="text-black hover:text-gray-300 text-lg">Testimonials</a>
                    <a href="#about" className="text-black hover:text-gray-300 text-lg">About Us</a>
                </div>

                {/* Get Started Button */}
                <div className="w-full sm:w-1/4 md:w-1/5 text-center  pt-4 pb-4 pr-4 ">
                <a href="#section3" className="block bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Get Started</a>

                </div>
                <div className="w-full  text-center  pt-4 pb-4 ">
                  <p>#AI Powered Precision</p>
                </div>
         
                <div className="w-full text-center pt-4 pb-4">
  <p className="text-4xl font-bold leading-relaxed">
    Transform Your Documents with <br /> AI-Powered Precision
  </p>
  <p className="text-lg font-medium pt-90">
    Seamless, Accurate, and Fast Transaction at Your Fingertips
  </p>
</div>



            </div>
        </nav>
    );
};

export default Navbar;
