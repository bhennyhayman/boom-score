import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='h-30 bg-teal-700 text-white'>
      <div>
        <ol className='flex gap-10 justify-center pt-3'>
          <li className='footer-li'>Home</li>
          <li className='footer-li'>Contact</li>
          <li className='footer-li'>Subscribe</li>
          <li className='footer-li'>Faqs</li>
        </ol>
      </div>
      <div className='text-center mt-2 text-[18px] '>Follow us</div>
      <div className='flex gap-5 justify-center mt-3'>
        <span className='footer-li'><FaFacebook size={20}/></span>
        <span className='footer-li'><FaTwitter size={20}/></span>
        <span className='footer-li'><FaGithub size={20}/></span>
      </div>
    </div>
  )
}

export default Footer