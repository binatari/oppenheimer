import { motion } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Overlay = () => {
  const { hash } = useLocation();

  console.log(hash)
  return (
    <div className='w-full min-h-screen top-0 left-0 fixed z-40 pointer-events-none'>
      {hash !== "town" ? <div class='absolute inset-x-0 top-0 bottom-[54%] bg-gradient-to-b from-black/50 from-50% z-50'></div> : null}

      {hash !== "town" ? <div class='absolute inset-x-0 bottom-0 top-[67%] bg-gradient-to-t from-black from-25% z-50'></div> : null}

      <div className='w-full flex flex-col items-center pt-[30px] px-6 z-[1000] relative'>
        <motion.img
          initial={{ height: "auto" }}
          animate={hash ? { height: "0", opacity: 0, transition: { duration: 2 } } : { height: "auto", opacity: 1 }}
          src='/christopher-nolan.png'
          className='mb-8'
        />
        <motion.img
          initial={{ height: "auto" }}
          animate={hash ? { height: "2rem", transition: { duration: 2 } } : { height: "auto" }}
          src='/oppenheimer-orange.png'
        />
      </div>
      {
        hash == '#town' ?  <div class='pointer-events-none absolute bottom-0 right-0 z-2 !duration-[2s] h-screen w-full z-[1000]'>
        <div class='bg-gradient-gold-desktop absolute top-0 right-0 w-full h-full' style={{opacity: 1}}></div>
        <Footer/>
      </div> : null
      }
     
    </div>
  );
};

export default Overlay;
