import { motion, useAnimate, stagger, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";


const staggerMenuItems = stagger(0.4, { startDelay: 0.15 });

const VideoBg = () => {
  const [video, setVideo] = useState(0);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const { hash } = useLocation();

  //   useEffect(() => {
  //     console.log(ref);

  //     if (hash == "#intro" && ref) {
  //       //   setTimeout(() => {
  //       //     ref.current.play();
  //       //   }, 2000);
  //       //   setShow(true);
  //     }
  //   }, [location]);

  const [scope, animate] = useAnimate();

  const isInView = useInView(scope);

  useEffect(() => {
 animate("span", { opacity: 1, filter: "blur(0px)" }, {
        duration: 3,
        delay:staggerMenuItems,
      })
  
  }, [isInView]);

  return (
    <div ref={scope} className='min-h-screen w-full bg-black relative' id='intro' data-lenis-prevent>
      <div  className='w-full absolute top-[30%] flex gap-4 justify-center fader'>
        <span className='uppercase split-text blur-[40px] opacity-0'>prometheus</span>
        <span className='uppercase split-text blur-[40px] opacity-0'>was</span>
        <span className='uppercase split-text blur-[40px] opacity-0'>punished</span>
        <span className='uppercase split-text blur-[40px] opacity-0'>by the</span>
      </div>
      <video
        key={video}
        ref={ref}
        width='100%'
        autoPlay
        allowFullScreen={true}
        muted='muted'
        playsInline='playsinline'
        loop={!!video}
        onEnded={() => setVideo(1)}
        className='w-full'
      >
        <source src={!!video ? "/embers.mp4" : "/sparks-1.mp4"} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoBg;
