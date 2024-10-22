import React from 'react';
import './output.css'; // Import the compiled Tailwind CSS
import Navbar from './components/Navbar.jsx';
import PricingSection from './components/PricingSection.jsx';
import Pricing from './components/Pricing.jsx';
import Middle from './components/Middle.jsx';
import Introduction from './components/Introduction.jsx';
import FileUpload from './components/FileUpload.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import FourComponent from './components/FourComponent.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <>
      <Navbar />
      
        <FileUpload />
        <Middle/>
        <Introduction />

        <PricingSection />
        <Pricing />
        
        <Faq />
        <Contact/>
        <FourComponent/>
        <Footer/>
    
    </>
  );
}

export default App;
