import { useLenis } from "@studio-freight/react-lenis";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const lenis = useLenis();

  return (
    <div className='min-h-screen relative overflow-hidden' data-lenis-prevent>
      <img src='/header-back.jpg' className='top-0 left-0 w-full absolute h-full object-cover pointer-events-none scale-[130%]' />
      <div className='bottom-0 w-full flex flex-wrap justify-center gap-4 absolute left-0 scale-[150%] items-end'>
        <img src='/oppenheimer.png' className='h-full max-h-[62rem]' />
      </div>
      <div className='bottom-0 w-full flex flex-wrap justify-center gap-4 absolute left-0 pb-[200px] scale-[110%] z-50'>
        <a
          target='_blank'
          href='https://www.oppenheimermovie.com/tickets/'
          className='relative flex min-w-[130px] min-h-[36px] md:min-h-[48px] items-center justify-between gap-x-[10px] border-b border-gray-8b8a8b px-[10px] py-[11px] text-gold-d4b38c treatment-navigation md:min-w-[160px] min-w-[90px]'
        >
          <span className='md:hidden' /> <span className='gold-text'>GET TICKETS</span>
          <div className='shrink-0' style={{ width: 8 }}>
            <svg viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 1L7 6L1 11' stroke='url(#4_paint0_linear_57_15383)' strokeOpacity='0.7' />
              <defs>
                <linearGradient
                  id='4_paint0_linear_57_15383'
                  x1='7.23754'
                  y1='15.359'
                  x2='2.46519'
                  y2='15.3283'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#8B8A8B' />
                  <stop offset={1} stopColor='#D3D3DA' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </a>
        <a
          target='_blank'
          href='https://www.oppenheimermovie.com/tickets/'
          className='relative flex min-w-[130px] min-h-[36px] md:min-h-[48px] items-center justify-between gap-x-[10px] border-b border-gray-8b8a8b px-[10px] py-[11px] text-gold-d4b38c treatment-navigation md:min-w-[160px] min-w-[90px]'
        >
          <span className='md:hidden' /> <span className='gold-text'>WATCH VIDEOS</span>
          <div className='shrink-0' style={{ width: 8 }}>
            <svg viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 1L7 6L1 11' stroke='url(#4_paint0_linear_57_15383)' strokeOpacity='0.7' />
              <defs>
                <linearGradient
                  id='4_paint0_linear_57_15383'
                  x1='7.23754'
                  y1='15.359'
                  x2='2.46519'
                  y2='15.3283'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#8B8A8B' />
                  <stop offset={1} stopColor='#D3D3DA' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </a>
        <div className='w-full flex justify-center'>
          <Link
            onClick={()=>lenis.scrollTo('#intro', {
                duration:3,  
                easing:(t)=>(t==1 ? 1 : 1 - Math.pow(2, -10 * t)),
            
            })}
            to={'#intro'}
            className='group relative inline-flex min-h-[44px] min-w-[190px] max-w-full cursor-pointer items-center justify-center px-[35px] text-center treatment-button specific-child:pointer-events-auto md:min-h-[37px] md:min-w-[202px] xl:min-h-[48px] xl:min-w-[254px] transition hover:!opacity-100'
          >
            <div className='absolute inset-0 rounded-full backdrop-blur-lg' />{" "}
            <svg xmlns='http://www.w3.org/2000/svg' width={268} height={125} fill='none' viewBox='0 0 268 125' className='absolute'>
              <g className='button'>
                <g className='neutral' style={{ opacity: 1 }}>
                  <g filter='url(#btn-24-a)' className='button specific-child'>
                    <rect rx='17.688311688311686' fill='url(#btn-24-b)' width={202} height={37} x={33} y={44} style={{ opacity: "0.5" }} />{" "}
                    <rect rx='17.188311688311686' stroke='url(#btn-24-c)' strokeOpacity='.7' width={201} height={36} x='33.5' y='44.5' />
                  </g>
                </g>{" "}
                <g className='hovered' style={{ opacity: 0 }}>
                  <g className='bg'>
                    <mask
                      id='btn-24-h'
                      maskUnits='userSpaceOnUse'
                      width={202}
                      height={37}
                      x={33}
                      y={44}
                      className='h'
                      style={{ maskType: "alpha" }}
                    >
                      <rect rx='17.688311688311686' fill='url(#btn-24-f)' width={202} height={37} x={33} y={44} className='bg-clip' />
                    </mask>{" "}
                    <g filter='url(#btn-24-g)' mask='url(#btn-24-h)' className='bg-fill'>
                      <rect rx='17.688311688311686' fill='url(#btn-24-i)' width={202} height={37} x={33} y={44} />
                    </g>
                  </g>{" "}
                  <g filter='url(#btn-24-j)' className='button'>
                    <rect rx='17.688311688311686' fill='url(#btn-24-k)' width={202} height={37} x={33} y={44} style={{ opacity: "0.5" }} />{" "}
                    <rect rx='17.188311688311686' stroke='url(#btn-24-l)' strokeOpacity='.7' width={201} height={36} x='33.5' y='44.5' />
                  </g>
                </g>{" "}
                <g className='dash-left'>
                  <path stroke='#000' strokeLinecap='round' strokeWidth={2} d='M 27 61.688311688311686 h 13' />{" "}
                  <path
                    stroke='url(#btn-24-d)'
                    strokeLinecap='round'
                    strokeOpacity='.7'
                    strokeWidth={2}
                    d='M 27 61.688311688311686 h 13'
                    style={{ opacity: 1 }}
                  />
                </g>{" "}
                <g className='dash-right'>
                  <path stroke='#000' strokeLinecap='round' strokeWidth={2} d='M 228 61.688311688311686 h 13' />{" "}
                  <path
                    stroke='url(#btn-24-e)'
                    strokeLinecap='round'
                    strokeOpacity='.7'
                    strokeWidth={2}
                    d='M 228 61.688311688311686 h 13'
                    style={{ opacity: 1 }}
                  />
                </g>{" "}
                <g className='rings-opacity'>
                  <g className='rings' style={{ opacity: 0 }}>
                    <g filter='url(#btn-24-o)' className='ring-0' style={{ opacity: 1 }}>
                      <rect
                        stroke='url(#btn-24-p)'
                        strokeOpacity={1}
                        opacity={1}
                        width={202}
                        height={37}
                        x={33}
                        y={44}
                        rx='17.688311688311686'
                        _gsap='[object Object]'
                      />
                    </g>
                    <g filter='url(#btn-24-o)' className='ring-1' style={{ opacity: 1 }}>
                      <rect
                        stroke='url(#btn-24-p)'
                        strokeOpacity={1}
                        opacity={1}
                        width={202}
                        height={37}
                        x={33}
                        y={44}
                        rx='17.688311688311686'
                        _gsap='[object Object]'
                      />
                    </g>
                    <g filter='url(#btn-24-o)' className='ring-2' style={{ opacity: 1 }}>
                      <rect
                        stroke='url(#btn-24-p)'
                        strokeOpacity={1}
                        opacity={1}
                        width={202}
                        height={37}
                        x={33}
                        y={44}
                        rx='17.688311688311686'
                        _gsap='[object Object]'
                      />
                    </g>
                  </g>
                </g>
              </g>{" "}
              <defs>
                <linearGradient
                  id='btn-24-b'
                  x1='259.5'
                  x2='89.841'
                  y1='61.688311688311686'
                  y2='142.987'
                  gradientUnits='userSpaceOnUse'
                  className='b'
                >
                  <stop /> <stop offset={1} stopColor='#2E2E2E' />
                </linearGradient>{" "}
                <linearGradient
                  id='btn-24-c'
                  x1='245.135'
                  x2='95.856'
                  y1='109.769'
                  y2='101.33099999999999'
                  gradientUnits='userSpaceOnUse'
                  className='c'
                >
                  <stop stopColor='#8B8A8B' /> <stop offset={1} stopColor='#D3D3DA' />
                </linearGradient>{" "}
                <linearGradient
                  id='btn-24-d'
                  x1='40.515'
                  x2='30.37'
                  y1='49.43600000000001'
                  y2='61.688311688311686'
                  gradientUnits='userSpaceOnUse'
                  className='d'
                >
                  <stop stopColor='#8B8A8B' /> <stop offset={1} stopColor='#D3D3DA' />
                </linearGradient>{" "}
                <linearGradient
                  id='btn-24-e'
                  x1='241.515'
                  x2='231.37'
                  y1='49.43600000000001'
                  y2='61.688311688311686'
                  gradientUnits='userSpaceOnUse'
                  className='e'
                >
                  <stop stopColor='#8B8A8B' /> <stop offset={1} stopColor='#D3D3DA' />
                </linearGradient>{" "}
                <linearGradient
                  id='btn-24-f'
                  x1='259.5'
                  x2='89.841'
                  y1='61.688311688311686'
                  y2='142.987'
                  gradientUnits='userSpaceOnUse'
                  className='f'
                >
                  <stop stopColor='#D4B38C' /> <stop offset={1} stopColor='#D4B38C' />
                </linearGradient>{" "}
                <linearGradient
                  id='btn-24-i'
                  x1={115}
                  x2='64.747'
                  y1={74}
                  y2='59.275999999999996'
                  gradientUnits='userSpaceOnUse'
                  className='i'
                >
                  <stop offset='.365' stopColor='#D4B38C' /> <stop offset='.927' stopColor='#FFEDD9' />
                </linearGradient>{" "}
                <linearGradient
                  id='btn-24-k'
                  x1='259.5'
                  x2='89.841'
                  y1='61.688311688311686'
                  y2='142.987'
                  gradientUnits='userSpaceOnUse'
                  className='k'
                >
                  <stop /> <stop offset={1} stopColor='#2E2E2E' />
                </linearGradient>{" "}
                <linearGradient
                  id='btn-24-l'
                  x1='245.135'
                  x2='95.856'
                  y1='109.769'
                  y2='101.33099999999999'
                  gradientUnits='userSpaceOnUse'
                  className='l'
                >
                  <stop stopColor='#D4B38C' /> <stop offset={1} stopColor='#F7E1AF' />
                </linearGradient>{" "}
                <linearGradient
                  id='btn-24-n'
                  x1='265.639'
                  x2='85.956'
                  y1='156.564'
                  y2='150.226'
                  gradientUnits='userSpaceOnUse'
                  className='n'
                >
                  <stop stopColor='#8B8A8B' /> <stop offset={1} stopColor='#D3D3DA' />
                </linearGradient>{" "}
                <linearGradient id='btn-24-p' x1='280.748' x2='78.749' y1='192.128' y2='186.4' gradientUnits='userSpaceOnUse' className='p'>
                  <stop stopColor='#8B8A8B' /> <stop offset={1} stopColor='#D3D3DA' />
                </linearGradient>{" "}
                <filter
                  id='btn-24-a'
                  colorInterpolationFilters='sRGB'
                  filterUnits='userSpaceOnUse'
                  width={254}
                  height={89}
                  x={7}
                  y={18}
                  className='a'
                >
                  <feFlood floodOpacity={0} result='BackgroundImageFix' />{" "}
                  <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1_2' />{" "}
                  <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_1_2' result='shape' />
                </filter>{" "}
                <filter
                  id='btn-24-g'
                  colorInterpolationFilters='sRGB'
                  filterUnits='userSpaceOnUse'
                  width={254}
                  height={89}
                  x={7}
                  y={18}
                  className='g'
                >
                  <feFlood floodOpacity={0} result='BackgroundImageFix' />{" "}
                  <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1_2' />{" "}
                  <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_1_2' result='shape' />
                </filter>{" "}
                <filter
                  id='btn-24-j'
                  colorInterpolationFilters='sRGB'
                  filterUnits='userSpaceOnUse'
                  width={254}
                  height={89}
                  x={7}
                  y={18}
                  className='j'
                >
                  <feFlood floodOpacity={0} result='BackgroundImageFix' />{" "}
                  <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1_2' />{" "}
                  <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_1_2' result='shape' />
                </filter>{" "}
                <filter
                  id='btn-24-m'
                  colorInterpolationFilters='sRGB'
                  filterUnits='userSpaceOnUse'
                  width={292}
                  height={139}
                  x={-12}
                  y={-7}
                  className='m'
                >
                  <feFlood floodOpacity={0} result='BackgroundImageFix' />{" "}
                  <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1_2' />{" "}
                  <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_1_2' result='shape' />
                </filter>{" "}
                <filter
                  id='btn-24-o'
                  colorInterpolationFilters='sRGB'
                  filterUnits='userSpaceOnUse'
                  width={320}
                  height={177}
                  x={-26}
                  y={-26}
                  className='o'
                >
                  <feFlood floodOpacity={0} result='BackgroundImageFix' />{" "}
                  <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_1_2' />{" "}
                  <feBlend in='SourceGraphic' in2='effect1_backgroundBlur_1_2' result='shape' />
                </filter>
              </defs>
            </svg>{" "}
            <div className='absolute gold-text'>
              <span>ENTER SITE</span>
            </div>{" "}
            <div className='relative gold-text opacity-0 transition-opacity delay-[250ms] duration-1000 ease-out group-hover:opacity-100'>
              <span>ENTER SITE</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
