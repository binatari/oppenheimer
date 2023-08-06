
import { motion, useAnimate, stagger, useInView, usePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useIsInViewport from "../hooks/useIntersecting";
import { useLenis } from "@studio-freight/react-lenis";

const staggerMenuItems = stagger(0.4, { startDelay: 0.15 });


const VideoBg = () => {
  const [video, setVideo] = useState(0);
  const [show, setShow] = useState("");
  const [firstAnim, setFirstAnim] = useState("");
  const [secondAnim, setSecondAnim] = useState("");
  const [isPresent, safeToRemove] = usePresence();
  const ref = useRef(null);
  const textRef = useRef(null);
  const lenis = useLenis();

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


  const textIsOnScreen = useIsInViewport(textRef)


//manages transition in and out animations
  useEffect(() => {
    if ( textIsOnScreen && !firstAnim) {
      const enterAnimation = async () => {
        await animate(
          "span",
          { opacity: 1, filter: "blur(0px)" },
          {
            duration: 4,
            delay: staggerMenuItems,
          }
        );
      };
      setTimeout( enterAnimation().then(() => setFirstAnim('started')), 2000)
     
    } else if (firstAnim == 'started') {
      const exitAnimation = async () => {
        await animate(
          "span",
          { opacity: 0, filter: "blur(40px)" },
          {
            duration: 4,
            delay: staggerMenuItems,
          }
        );
        // safeToRemove();
      };

      exitAnimation().then(() => setSecondAnim('started'));
    }
  }, [firstAnim, textIsOnScreen]);



  useEffect(() => {
    if (secondAnim == "started") {
      const enterAnimation = async () => {
        await animate(
          "li",
          { opacity: 1, filter: "blur(0px)" },
          {
            duration: 4,
            delay: staggerMenuItems,
          }
        );
      };
      enterAnimation().then(() => setSecondAnim("ended"));
    } else if (secondAnim == "ended") {
      const exitAnimation = async () => {
        await animate(
          "li",
          { opacity: 0, filter: "blur(40px)" },
          {
            duration: 4,
            delay: staggerMenuItems,
          }
        );
      };

      exitAnimation().then(()=>{
        
        lenis.scrollTo('#town', {
          duration:3,  
          easing:(t)=>(t==1 ? 1 : 1 - Math.pow(2, -10 * t)),
      
      })
      });
    }
  }, [secondAnim]);


  return (
    <div ref={scope} className='min-h-screen w-full bg-black relative' id='intro' data-lenis-prevent>
      <div ref={textRef} className='w-full absolute top-[30%] flex gap-4 flex-col items-center fader'>
        <div>
          <span className='uppercase split-text blur-[40px] opacity-0'>prometheus</span>
        </div>
        <div className='flex gap-10'>
          <span className='uppercase split-text blur-[40px] opacity-0'>was</span>
          <span className='uppercase split-text blur-[40px] opacity-0'>punished</span>
        </div>
        <div className='flex gap-10'>
          <span className='uppercase split-text blur-[40px] opacity-0'>by</span>
          <span className='uppercase split-text blur-[40px] opacity-0'>the</span>
          <span className='uppercase split-text blur-[40px] opacity-0'>gods</span>
        </div>
      </div>
      <div className='w-full absolute top-[30%] flex gap-4 flex-col items-center fader'>
        <ul className='flex gap-10'>
          <li className='uppercase split-text blur-[40px] opacity-0'>for</li>
          <li className='uppercase split-text blur-[40px] opacity-0'>giving</li>
        </ul>
        <div className='flex gap-10'>
          <li className='uppercase split-text blur-[40px] opacity-0'>fire</li>
          <li className='uppercase split-text blur-[40px] opacity-0'>to</li>
          <li className='uppercase split-text blur-[40px] opacity-0'>man</li>
        </div>
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
