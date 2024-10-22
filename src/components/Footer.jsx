import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { PiTranslateFill } from "react-icons/pi";
const Footer = () => {
    return (
        <footer className=" fot text-black p-8">
            <div className="flex justify-between">
                
                {/* Brand Name Column */}
            <div className="flex-1">
                <div className="flex px-4 items-center">
                  <PiTranslateFill size={24} />
                  <h2 className="text-xl font-bold ">PDFSCRIBE</h2>
                  </div>
               </div>

              


                <div className="flex-1 flex items-center justify-center space-x-4">
                    <a href="#" className="mx-2 ">
                    Terms
                    </a>
                    <a href="#" className="mx-2">
                       Privacy
                    </a>
                    <a href="#" className="mx-2">
                       Cookies
                    </a>
                </div>



                {/* Social Media Column */}
                <div className="flex-1 flex items-center justify-center space-x-4 pr-4">
                    <a href="#" className="mx-2">
                    <TiSocialLinkedinCircular  size={24}/>
                    </a>
                    <a href="#" className="mx-2">
                    <FaFacebookF size={24} />
                    </a>
                    <a href="#" className="mx-2">
                    <FaTwitter size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
