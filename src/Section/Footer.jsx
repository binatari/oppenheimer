import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {

    const {hash} = useLocation()

    const variants = {
        visible: { height:'100%', transition: { duration: 2} },
        hidden: { height: '0' },
      }

  return (
    <div class='pointer-events-none fixed inset-x-0 bottom-0 treatment-scroll-indicator z-1 flex flex-col items-center !duration-[2s]'>
      <span class='radial-text-shadow-treatment block md:hidden'>SCROLL TO EXPLORE LOS ALAMOS</span>
      <span class='radial-text-shadow-treatment hidden md:block'>USE THE SCROLLBAR TO SCROLL ON DESKTOP</span>
      <div class='h-under-scroll-indicator flex flex-col justify-end'>
        <div class='flex h-[29px] flex-col justify-end md:h-[44px]'>
          <motion.div class='h-0 w-[1px] rounded-full  bg-[#d4b38c] [animation-delay:2s]' variants={variants} animate='visible' initial={'hidden'}></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
