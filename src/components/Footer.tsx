
import React from 'react';
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { PiWhatsappLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div id='Footer' className='mt-16 py-6 text-center bg-blue-400' 
    >
      <div className='flex justify-center gap-6'>
        {/* Social Icons */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <SlSocialFacebook size={30} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <SlSocialLinkedin size={30} />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <PiWhatsappLogoThin size={30} />
        </a>
      </div>
      <p className='mt-4 text-white'>
        Sehrish | All rights reserved 2024.
      </p>
    </div>
  );
}

export default Footer;
