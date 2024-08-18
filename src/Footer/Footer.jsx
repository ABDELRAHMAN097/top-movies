import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import './Footer.scss'
export default function Footer() {
    const handellinkedin = () => {
        window.open(
          `https://www.linkedin.com/in/abdelrahman-magdy-4944a3242/`,
          "_blank"
        );
      };
      const handleWhatsAppClick = () => {
        const phoneNumber = "+201023671214";
        window.open(`https://wa.me/${phoneNumber}`, "_blank");
      };
      const handelgithub = () => {
        window.open(
          `https://github.com/ABDELRAHMAN097`,
          "_blank"
        );
      };
      const handelPortfolio = () => {
        window.open(
          `https://abdelra7m2n.netlify.app/`,
          "_blank"
        );
      };
  return (
    <div className='d-flex justify-content-between w-100 border-top p-2 h-9vh'>
        <p className=' p-2 '>© 2024 Abdelrahman Magdy</p>
        <div className='d-flex justify-content-between gap-3 p-2'>
        <FaLinkedin className='fs-4' onClick={handellinkedin} />
        <FaWhatsappSquare className='fs-4' onClick={handleWhatsAppClick}/>
        <FaSquareGithub className='fs-4' onClick={handelgithub}/>
        <AiOutlineGlobal className='fs-4' onClick={handelPortfolio}/>
        </div>
    </div>
  )
}
