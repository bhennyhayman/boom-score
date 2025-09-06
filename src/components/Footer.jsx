import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='h-70 w-vw mt-10 bg-teal-700 text-white'>
      <div className='m-2'>
        <ol className='flex gap-10 mx-auto pt-8 justify-self-center text-[15px] font-medium '>
          <li className='footer-li'>Home</li>
          <li className='footer-li'>Contact</li>
          <li className='footer-li'>Subscribe</li>
          <li className='footer-li'>Faqs</li>
        </ol>
      </div>
      <div className='text-center mt-5 text-[20px] '>Follow us</div>
      <div className='flex gap-5 justify-center mt-1'>
        <span className='footer-li'><FaFacebook size={30}/></span>
        <span className='footer-li'><FaTwitter size={30}/></span>
        <span className='footer-li'><FaGithub size={30}/></span>
      </div>
      <div className='text-center my-5 p-2'>
        <p>Ben @BoomProjects</p>
        <p>Copyright@2025</p>
        </div>
    </div>
  )
}

export default Footer
